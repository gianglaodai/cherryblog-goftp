import { globSync } from 'glob';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: './web/views',
  build: {
    manifest: true,
    outDir: '../public/js',
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(
        globSync(['web/assets/js/*.js', 'web/views/pages/**/*.js']).map(
          (file) => [
            path.basename(file, path.extname(file)),
            fileURLToPath(new URL(file, import.meta.url)),
          ],
        ),
      ),
      output: {
        entryFileNames: 'pages/[name]/[name].[hash].js',
      },
    },
  },
  server: {
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, 'web/assets/icons/*'),
          dest: '../icons',
        },
      ],
    }),
  ],
});
