import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import tailwindTypography from '@tailwindcss/typography';

export default {
  plugins: [
    tailwind({
      content: ['./content/.vitepress/**/*.vue'],
      theme: {
        extend: {},
      },
      plugins: [tailwindTypography],
    }),
    autoprefixer(),
  ],
};
