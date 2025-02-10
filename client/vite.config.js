import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import requireTransform from 'vite-plugin-require-transform';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(),
  requireTransform({
    fileRegex: /.js$|.vue$/,
    importPrefix: '_vite_plugin_require_transform_'
  }),],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  }
})
