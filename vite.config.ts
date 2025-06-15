
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
        interval: 1500,
        depth: 2, // Watch only up to 2 folder levels deep
        awaitWriteFinish: {
          stabilityThreshold: 3000,
          pollInterval: 250,
        },
        ignored: [
          '**/node_modules/**',
          '**/.git/**',
          '**/dist/**',
          '**/public/**',
          '**/.cache/**',
          '**/.pnpm/**',
          '**/.next/**',
          '**/.output/**'
        ],
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
    fs: {
      strict: true,
      allow: [path.resolve(__dirname, './src'), path.resolve(__dirname)]
    },
  };
});

