// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number[]> = new Map();
  private marks: Map<string, number> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  startTimer(name: string): void {
    this.marks.set(name, performance.now());
  }

  endTimer(name: string): number {
    const startTime = this.marks.get(name);
    if (!startTime) {
      console.warn(`Timer '${name}' was not started`);
      return 0;
    }

    const duration = performance.now() - startTime;
    this.marks.delete(name);

    // Store metric for averaging
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    this.metrics.get(name)!.push(duration);

    // Keep only last 10 measurements
    const measurements = this.metrics.get(name)!;
    if (measurements.length > 10) {
      measurements.shift();
    }

    return duration;
  }

  getAverageTime(name: string): number {
    const measurements = this.metrics.get(name);
    if (!measurements || measurements.length === 0) {
      return 0;
    }
    return measurements.reduce((sum, time) => sum + time, 0) / measurements.length;
  }

  logPerformance(name: string, duration: number): void {
    if (process.env.NODE_ENV === 'development') {
      console.log(`⏱️ ${name}: ${duration.toFixed(2)}ms`);
    }
  }
}

// React performance hooks
export const usePerformanceTimer = (name: string) => {
  const monitor = PerformanceMonitor.getInstance();
  
  const startTimer = () => {
    monitor.startTimer(name);
  };

  const endTimer = () => {
    const duration = monitor.endTimer(name);
    monitor.logPerformance(name, duration);
    return duration;
  };

  return { startTimer, endTimer };
};

// Component render performance tracking
export const withPerformanceTracking = <P extends object>(
  Component: React.ComponentType<P>,
  componentName: string
) => {
  return React.memo((props: P) => {
    const { startTimer, endTimer } = usePerformanceTimer(`${componentName} render`);
    
    startTimer();
    const result = <Component {...props} />;
    endTimer();
    
    return result;
  });
};

// Memory usage tracking
export const trackMemoryUsage = (label: string) => {
  if ('memory' in performance) {
    const memory = (performance as any).memory;
    console.log(`🧠 ${label}:`, {
      used: `${Math.round(memory.usedJSHeapSize / 1024 / 1024)}MB`,
      total: `${Math.round(memory.totalJSHeapSize / 1024 / 1024)}MB`,
      limit: `${Math.round(memory.jsHeapSizeLimit / 1024 / 1024)}MB`
    });
  }
};

// Bundle size tracking
export const trackBundleSize = () => {
  if (process.env.NODE_ENV === 'development') {
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;
    
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src && src.includes('chunk')) {
        // This is a rough estimation - in production you'd want to use webpack bundle analyzer
        console.log(`📦 Chunk loaded: ${src}`);
      }
    });
  }
};