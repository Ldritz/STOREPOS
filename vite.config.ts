import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              // Separate vendor chunks for better caching
              vendor: ['react', 'react-dom'],
              // Separate recharts as it's a large library
              charts: ['recharts'],
            },
            // Optimize chunk naming
            chunkFileNames: () => `js/[name]-[hash].js`,
            entryFileNames: 'js/[name]-[hash].js',
            assetFileNames: 'assets/[name]-[hash].[ext]'
          }
        },
        // Enable source maps for debugging
        sourcemap: mode === 'development',
        // Optimize chunk size warnings
        chunkSizeWarningLimit: 1000,
        // Enable minification
        minify: 'esbuild',
        esbuild: {
          drop: mode === 'production' ? ['console', 'debugger'] : []
        }
      },
      // Optimize development server
      server: {
        hmr: true,
        // Enable faster refresh
        watch: {
          usePolling: false
        }
      },
      // Optimize dependencies
      optimizeDeps: {
        include: ['react', 'react-dom'],
        exclude: ['recharts'] // Let recharts be lazy loaded
      }
    };
});
