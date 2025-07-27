// Enhanced error handling and retry mechanisms
import React from 'react';
import { useRUM } from './rum';

export interface ErrorContext {
  operation: string;
  data?: any;
  retryCount?: number;
  timestamp: number;
}

export interface RetryConfig {
  maxRetries: number;
  baseDelay: number;
  maxDelay: number;
  backoffMultiplier: number;
}

export class ErrorHandler {
  private static instance: ErrorHandler;
  private errorListeners: Array<(error: Error, context: ErrorContext) => void> = [];
  private retryConfig: RetryConfig = {
    maxRetries: 3,
    baseDelay: 1000,
    maxDelay: 10000,
    backoffMultiplier: 2
  };

  private constructor() {
    this.setupGlobalErrorHandling();
  }

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  private setupGlobalErrorHandling(): void {
    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError(new Error(event.reason), {
        operation: 'unhandled_promise_rejection',
        timestamp: Date.now()
      });
    });

    // Handle JavaScript errors
    window.addEventListener('error', (event) => {
      this.handleError(new Error(event.message), {
        operation: 'javascript_error',
        data: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno
        },
        timestamp: Date.now()
      });
    });
  }

  setRetryConfig(config: Partial<RetryConfig>): void {
    this.retryConfig = { ...this.retryConfig, ...config };
  }

  addErrorListener(listener: (error: Error, context: ErrorContext) => void): void {
    this.errorListeners.push(listener);
  }

  removeErrorListener(listener: (error: Error, context: ErrorContext) => void): void {
    const index = this.errorListeners.indexOf(listener);
    if (index > -1) {
      this.errorListeners.splice(index, 1);
    }
  }

  handleError(error: Error, context: ErrorContext): void {
    // Log error to RUM
    const { trackError } = useRUM();
    trackError({
      message: error.message,
      stack: error.stack,
      context,
      timestamp: Date.now(),
      page: window.location.pathname
    });

    // Notify error listeners
    this.errorListeners.forEach(listener => {
      try {
        listener(error, context);
      } catch (listenerError) {
        console.error('Error in error listener:', listenerError);
      }
    });

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error handled:', error, context);
    }
  }

  async retryOperation<T>(
    operation: () => Promise<T>,
    context: Omit<ErrorContext, 'retryCount' | 'timestamp'>
  ): Promise<T> {
    let lastError: Error;
    let delay = this.retryConfig.baseDelay;

    for (let attempt = 0; attempt <= this.retryConfig.maxRetries; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error as Error;
        
        if (attempt === this.retryConfig.maxRetries) {
          // Final attempt failed
          this.handleError(lastError, {
            ...context,
            retryCount: attempt,
            timestamp: Date.now()
          });
          throw lastError;
        }

        // Log retry attempt
        console.warn(`Retry attempt ${attempt + 1}/${this.retryConfig.maxRetries + 1} for ${context.operation}:`, error);

        // Wait before retrying
        await this.delay(delay);
        delay = Math.min(delay * this.retryConfig.backoffMultiplier, this.retryConfig.maxDelay);
      }
    }

    throw lastError!;
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Firebase-specific error handling
  handleFirebaseError(error: any, operation: string): void {
    let userMessage = 'An error occurred. Please try again.';
    
    if (error.code) {
      switch (error.code) {
        case 'permission-denied':
          userMessage = 'You don\'t have permission to perform this action.';
          break;
        case 'unavailable':
          userMessage = 'Service is temporarily unavailable. Please try again.';
          break;
        case 'network-request-failed':
          userMessage = 'Network error. Please check your connection.';
          break;
        case 'quota-exceeded':
          userMessage = 'Storage quota exceeded. Please contact support.';
          break;
        default:
          userMessage = `Error: ${error.message || 'Unknown error occurred'}`;
      }
    }

    this.handleError(new Error(userMessage), {
      operation: `firebase_${operation}`,
      data: { firebaseError: error },
      timestamp: Date.now()
    });
  }

  // Network error handling
  handleNetworkError(error: Error, operation: string): void {
    const isOnline = navigator.onLine;
    const userMessage = isOnline 
      ? 'Network request failed. Please try again.'
      : 'You are offline. Please check your connection.';

    this.handleError(new Error(userMessage), {
      operation: `network_${operation}`,
      data: { isOnline, originalError: error },
      timestamp: Date.now()
    });
  }

  // Validation error handling
  handleValidationError(errors: string[], operation: string): void {
    const userMessage = `Validation failed: ${errors.join(', ')}`;
    
    this.handleError(new Error(userMessage), {
      operation: `validation_${operation}`,
      data: { validationErrors: errors },
      timestamp: Date.now()
    });
  }
}

// React Hook for Error Handling
export function useErrorHandler() {
  const errorHandler = ErrorHandler.getInstance();
  const { trackError } = useRUM();

  return {
    handleError: (error: Error, context: Omit<ErrorContext, 'timestamp'>) => {
      errorHandler.handleError(error, { ...context, timestamp: Date.now() });
    },
    
    retryOperation: <T>(
      operation: () => Promise<T>,
      context: Omit<ErrorContext, 'retryCount' | 'timestamp'>
    ): Promise<T> => {
      return errorHandler.retryOperation(operation, context);
    },

    handleFirebaseError: (error: any, operation: string) => {
      errorHandler.handleFirebaseError(error, operation);
    },

    handleNetworkError: (error: Error, operation: string) => {
      errorHandler.handleNetworkError(error, operation);
    },

    handleValidationError: (errors: string[], operation: string) => {
      errorHandler.handleValidationError(errors, operation);
    },

    addErrorListener: (listener: (error: Error, context: ErrorContext) => void) => {
      errorHandler.addErrorListener(listener);
    },

    removeErrorListener: (listener: (error: Error, context: ErrorContext) => void) => {
      errorHandler.removeErrorListener(listener);
    }
  };
}

// Error Boundary Component
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; retry: () => void }>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ error, errorInfo });
    
    // Track error in RUM
    const { trackError } = useRUM();
    trackError({
      message: error.message,
      stack: error.stack,
      context: { errorInfo },
      timestamp: Date.now(),
      page: window.location.pathname
    });

    // Call custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  retry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
              if (this.props.fallback) {
          const FallbackComponent = this.props.fallback;
          return React.createElement(FallbackComponent, { error: this.state.error!, retry: this.retry });
        }

              return React.createElement(
          'div',
          { className: 'flex items-center justify-center min-h-[400px] p-8' },
          React.createElement(
            'div',
            { className: 'text-center' },
            React.createElement('div', { className: 'text-6xl mb-4' }, '⚠️'),
            React.createElement('h2', { className: 'text-xl font-bold text-foreground mb-2' }, 'Something went wrong'),
            React.createElement('p', { className: 'text-muted-foreground mb-4' }, this.state.error?.message || 'An unexpected error occurred'),
            React.createElement(
              'button',
              {
                onClick: this.retry,
                className: 'px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90'
              },
              'Try Again'
            )
          )
        );
    }

    return this.props.children;
  }
}

export default ErrorHandler;