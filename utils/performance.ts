// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();
  private observers: Map<string, PerformanceObserver> = new Map();

  private constructor() {
    this.initObservers();
  }

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  private initObservers() {
    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      try {
        const longTaskObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.warn('Long task detected:', entry.duration, 'ms');
          }
        });
        longTaskObserver.observe({ entryTypes: ['longtask'] });
        this.observers.set('longtask', longTaskObserver);
      } catch (e) {
        console.warn('Long task observer not supported');
      }

              // Monitor layout shifts
        try {
          const layoutShiftObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              const layoutShift = entry as any;
              if (layoutShift.value > 0.1) {
                console.warn('Layout shift detected:', layoutShift.value);
              }
            }
          });
          layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });
          this.observers.set('layout-shift', layoutShiftObserver);
        } catch (e) {
          console.warn('Layout shift observer not supported');
        }
    }
  }

  startMeasure(name: string): void {
    if ('performance' in window) {
      performance.mark(`${name}-start`);
    }
  }

  endMeasure(name: string): number {
    if ('performance' in window) {
      performance.mark(`${name}-end`);
      performance.measure(name, `${name}-start`, `${name}-end`);
      
      const measure = performance.getEntriesByName(name)[0];
      const duration = measure.duration;
      
      this.metrics.set(name, duration);
      console.log(`${name}: ${duration.toFixed(2)}ms`);
      
      return duration;
    }
    return 0;
  }

  getMetrics(): Map<string, number> {
    return new Map(this.metrics);
  }

  clearMetrics(): void {
    this.metrics.clear();
  }

  // Monitor component render performance
  measureComponentRender(componentName: string, renderFn: () => void): void {
    this.startMeasure(`${componentName}-render`);
    renderFn();
    this.endMeasure(`${componentName}-render`);
  }

  // Monitor async operations
  async measureAsync<T>(name: string, asyncFn: () => Promise<T>): Promise<T> {
    this.startMeasure(name);
    try {
      const result = await asyncFn();
      this.endMeasure(name);
      return result;
    } catch (error) {
      this.endMeasure(name);
      throw error;
    }
  }

  // Get memory usage (if available)
  getMemoryInfo(): { used: number; total: number; limit: number } | null {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      return {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit
      };
    }
    return null;
  }

  // Cleanup observers
  destroy(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
    this.metrics.clear();
  }
}

// React performance hook
export function usePerformanceMonitor() {
  const monitor = PerformanceMonitor.getInstance();

  const measureRender = (componentName: string, renderFn: () => void) => {
    monitor.measureComponentRender(componentName, renderFn);
  };

  const measureAsync = async <T>(name: string, asyncFn: () => Promise<T>): Promise<T> => {
    return monitor.measureAsync(name, asyncFn);
  };

  return { measureRender, measureAsync, getMetrics: monitor.getMetrics.bind(monitor) };
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

// Intersection Observer utility for lazy loading
export function createIntersectionObserver(
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver {
  return new IntersectionObserver(callback, {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  });
}