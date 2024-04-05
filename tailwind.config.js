/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary100: 'hsl(276, 100%, 79%)',
        primary200: 'hsl(276, 79%, 69%)',
        primary300: 'hsl(276, 53%, 49%)',
        primary400: 'hsl(276, 64%, 48%)',
        primary500: 'hsl(276, 96%, 20%)',
        secondary100: 'hsl(173, 81%, 68%)',
        secondary200: 'hsl(173, 80%, 63%)',
        secondary300: 'hsl(173, 72%, 57%)',
        secondary400: 'hsl(173, 75%, 47%)',
        secondary500: 'hsl(173, 90%, 30%)',
        neutral100: 'hsl(0 0% 100%)',
        neutral200: 'hsl(200 23% 97%)',
        neutral300: 'hsl(200 12% 95%)',
        neutral400: 'hsl(205 12% 88%)',
        neutral500: 'hsl(209 13% 83%)',
        neutral600: 'hsl(208 6% 55%)',
        neutral700: 'hsl(210 8% 31%)',
        neutral800: 'hsl(212 9% 22%)',
        neutral900: 'hsl(210 10% 14%)',
      },
    },
  },
  plugins: [],
  darkMode: ['class', '.darkmode'],
}
