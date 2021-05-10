// vite.config.js
const path = require('path');
import vue from '@vitejs/plugin-vue';
/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  plugins: [vue()],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'content/.vitepress/theme/index.ts'),
      name: 'vite-theme-rengoku',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', 'vitepress'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
};
