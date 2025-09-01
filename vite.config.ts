import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  build: {
    outDir: 'extension/dist',
    rollupOptions: {
      input: {
        'background': 'src/background/service-worker.ts',
        'content': 'src/content/content.ts',
        'popup': 'src/popup/popup.ts',
        'options': 'src/options/options.ts'
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    minify: false,
    sourcemap: true
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'extension/manifest.json',
          dest: '.'
        },
        {
          src: 'extension/public/**/*',
          dest: '.'
        }
      ]
    })
  ]
})
