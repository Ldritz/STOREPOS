// Real User Monitoring (RUM) implementation
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

export interface RUMMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
  userId?: string;
  sessionId?: string;
}

export interface UserInteraction {
  action: string;
  duration: number;
  timestamp: number;
  page: string;
  userId?: string;
  sessionId?: string;
}

export interface ErrorEvent {
  message: string;
  stack?: string;
  context?: any;
  timestamp: number;
  page: string;
  userId?: string;
  sessionId?: string;
}

class RUMTracker {
  private static instance: RUMTracker;
  private metrics: RUMMetric[] = [];
  private interactions: UserInteraction[] = [];
  private errors: ErrorEvent[] = [];
  private sessionId: string;
  private userId?: string;
  private isOnline: boolean = navigator.onLine;

  private constructor() {
    this.sessionId = this.generateSessionId();
    this.initializeListeners();
    this.trackCoreWebVitals();
  }

  static getInstance(): RUMTracker {
    if (!RUMTracker.instance) {
      RUMTracker.instance = new RUMTracker();
    }
    return RUMTracker.instance;
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeListeners(): void {
    // Track online/offline status
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.trackUserAction('app_online');
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
      this.trackUserAction('app_offline');
    });

    // Track page visibility
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.trackUserAction('page_hidden');
      } else {
        this.trackUserAction('page_visible');
      }
    });

    // Track JavaScript errors
    window.addEventListener('error', (event) => {
      this.trackError({
        message: event.message,
        stack: event.error?.stack,
        context: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno
        },
        timestamp: Date.now(),
        page: window.location.pathname
      });
    });

    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.trackError({
        message: event.reason?.message || 'Unhandled promise rejection',
        stack: event.reason?.stack,
        context: { reason: event.reason },
        timestamp: Date.now(),
        page: window.location.pathname
      });
    });
  }

  private trackCoreWebVitals(): void {
    const sendToAnalytics = (metric: any) => {
      const rating = this.getRating(metric.name, metric.value);
      this.metrics.push({
        name: metric.name,
        value: metric.value,
        rating,
        timestamp: Date.now()
      });

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`RUM Metric - ${metric.name}:`, metric.value, `(${rating})`);
      }
    };

    onCLS(sendToAnalytics);
    onFID(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  }

  private getRating(metricName: string, value: number): 'good' | 'needs-improvement' | 'poor' {
    const thresholds: { [key: string]: { good: number; poor: number } } = {
      CLS: { good: 0.1, poor: 0.25 },
      FID: { good: 100, poor: 300 },
      FCP: { good: 1800, poor: 3000 },
      LCP: { good: 2500, poor: 4000 },
      TTFB: { good: 800, poor: 1800 }
    };

    const threshold = thresholds[metricName];
    if (!threshold) return 'good';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  }

  // Public methods
  setUserId(userId: string): void {
    this.userId = userId;
  }

  trackPageLoad(pageName: string): void {
    const loadTime = performance.now();
    this.trackUserAction('page_load', {
      page: pageName,
      loadTime,
      url: window.location.href,
      userAgent: navigator.userAgent
    });
  }

  trackUserAction(action: string, data?: any): void {
    const interaction: UserInteraction = {
      action,
      duration: 0,
      timestamp: Date.now(),
      page: window.location.pathname,
      userId: this.userId,
      sessionId: this.sessionId
    };

    this.interactions.push(interaction);

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('RUM User Action:', { action, data, timestamp: interaction.timestamp });
    }
  }

  trackTransactionTime(startTime: number, transactionType: string): void {
    const duration = performance.now() - startTime;
    this.trackUserAction('transaction_complete', {
      type: transactionType,
      duration,
      timestamp: Date.now()
    });
  }

  trackError(error: ErrorEvent): void {
    error.userId = this.userId;
    error.sessionId = this.sessionId;
    this.errors.push(error);

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('RUM Error:', error);
    }
  }

  trackPerformanceMark(name: string, startTime?: number): void {
    if (startTime) {
      const duration = performance.now() - startTime;
      this.trackUserAction('performance_mark', {
        name,
        duration,
        timestamp: Date.now()
      });
    } else {
      performance.mark(name);
    }
  }

  trackMemoryUsage(): void {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      this.trackUserAction('memory_usage', {
        usedJSHeapSize: memory.usedJSHeapSize,
        totalJSHeapSize: memory.totalJSHeapSize,
        jsHeapSizeLimit: memory.jsHeapSizeLimit
      });
    }
  }

  // Analytics methods
  getMetrics(): RUMMetric[] {
    return [...this.metrics];
  }

  getInteractions(): UserInteraction[] {
    return [...this.interactions];
  }

  getErrors(): ErrorEvent[] {
    return [...this.errors];
  }

  getSessionData(): {
    sessionId: string;
    userId?: string;
    isOnline: boolean;
    pageLoads: number;
    interactions: number;
    errors: number;
  } {
    return {
      sessionId: this.sessionId,
      userId: this.userId,
      isOnline: this.isOnline,
      pageLoads: this.interactions.filter(i => i.action === 'page_load').length,
      interactions: this.interactions.length,
      errors: this.errors.length
    };
  }

  // Export data for analytics
  exportData(): {
    metrics: RUMMetric[];
    interactions: UserInteraction[];
    errors: ErrorEvent[];
    session: any;
  } {
    return {
      metrics: this.getMetrics(),
      interactions: this.getInteractions(),
      errors: this.getErrors(),
      session: this.getSessionData()
    };
  }

  // Clear data (useful for testing)
  clearData(): void {
    this.metrics = [];
    this.interactions = [];
    this.errors = [];
  }
}

// React Hook for RUM
export function useRUM() {
  const tracker = RUMTracker.getInstance();

  return {
    trackPageLoad: tracker.trackPageLoad.bind(tracker),
    trackUserAction: tracker.trackUserAction.bind(tracker),
    trackTransactionTime: tracker.trackTransactionTime.bind(tracker),
    trackError: tracker.trackError.bind(tracker),
    trackPerformanceMark: tracker.trackPerformanceMark.bind(tracker),
    trackMemoryUsage: tracker.trackMemoryUsage.bind(tracker),
    setUserId: tracker.setUserId.bind(tracker),
    getMetrics: tracker.getMetrics.bind(tracker),
    getSessionData: tracker.getSessionData.bind(tracker),
    exportData: tracker.exportData.bind(tracker)
  };
}

// Performance monitoring utilities
export function createPerformanceObserver(
  entryTypes: string[],
  callback: (entries: PerformanceEntry[]) => void
): PerformanceObserver | null {
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        callback(entries);
      });
      observer.observe({ entryTypes });
      return observer;
    } catch (error) {
      console.warn('PerformanceObserver not supported:', error);
      return null;
    }
  }
  return null;
}

// Debounce utility for performance
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle utility for performance
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export default RUMTracker;