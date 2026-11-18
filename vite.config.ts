
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from 'rollup-plugin-visualizer';
import fs from "fs";

// Helper: check for accidental symlink inside src (can cause too many watchers)
const srcPath = path.resolve(__dirname, "./src");
const extraFilesToIgnore: string[] = [];
try {
  const files = fs.readdirSync(srcPath);
  files.forEach(name => {
    const abs = path.join(srcPath, name);
    // ignore symlinks
    if (fs.lstatSync(abs).isSymbolicLink()) {
      extraFilesToIgnore.push(`**/src/${name}/**`);
    }
  });
} catch (e) {
  // ignore, just a safety net
}


// ── Prévias estáticas por rota ─────────────────────────────────────────────
// Gera dist/<rota>/index.html com título, descrição e canonical próprios.
// O site continua sendo o mesmo SPA; isso só melhora prévias no WhatsApp/LinkedIn
// e o primeiro rastreamento do Google. Rotas: seo/routes.json
function staticRouteMeta() {
  return {
    name: "axis-static-route-meta",
    apply: "build" as const,
    closeBundle() {
      try {
        const cfg = JSON.parse(fs.readFileSync(path.resolve(__dirname, "seo/routes.json"), "utf8"));
        const dist = path.resolve(__dirname, "dist");
        const base = fs.readFileSync(path.join(dist, "index.html"), "utf8");
        const esc = (t: string) => t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
        for (const [route, [title, desc]] of Object.entries(cfg.routes as Record<string, [string, string]>)) {
          const url = `${cfg.domain}${route}`;
          const html = base
            .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
            .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(desc)}$2`)
            .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
            .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(desc)}$2`)
            .replace("</head>", `  <link rel="canonical" href="${url}" />\n    <meta property="og:url" content="${url}" />\n  </head>`);
          const dir = path.join(dist, route);
          fs.mkdirSync(dir, { recursive: true });
          fs.writeFileSync(path.join(dir, "index.html"), html);
        }
      } catch (e) {
        console.warn("[axis-static-route-meta] ignorado:", e);
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';
  const isAnalyze = mode === 'analyze';

  // Only push the plugin if it should be active, avoiding any accidental undefineds
  const plugins = [
    react(),
    staticRouteMeta(),
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
        usePolling: false,
        interval: 1500,
        depth: 1, // Reduce to one level deep
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
          '**/.output/**',
          '**/.vscode/**',
          '**/.DS_Store',
          ...extraFilesToIgnore
        ],
        // Watch only .ts,.tsx,.js,.jsx files in /src
        // Vite doesn't expose a "files" option, but a deep ignored is safest
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
            motion: ['framer-motion'],
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
      allow: [srcPath, path.resolve(__dirname)],
    },
  };
});
