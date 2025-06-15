
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';
  const isAnalyze = mode === 'analyze';

  // Only push the plugin if it should be active, avoiding any accidental undefineds
  const plugins = [
    react(),
    isDev ? componentTagger() : null,
    isAnalyze ? visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: 'dist/stats.html'
    }) : null
  ].filter(Boolean);

  return {
    server: {
      host: "::",
      port: 8080,
      watch: {
        // Reduce watcher "pressure" to help prevent EMFILE
        usePolling: false,
        interval: 1000,
        awaitWriteFinish: {
          stabilityThreshold: 2000,
          pollInterval: 100,
        },
        ignored: ['**/node_modules/**', '**/.git/**', '**/dist/**'],
      },
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
            ui: ['@radix-ui/react-dialog', '@radix-ui/react-select', '@radix-ui/react-tabs'],
            forms: ['react-hook-form', '@hookform/resolvers'],
            query: ['@tanstack/react-query'],
            icons: ['lucide-react'],
            utils: ['lodash-es', 'clsx', 'tailwind-merge'],
          },
        },
      },
      chunkSizeWarningLimit: 1000,
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
    },
  };
});
