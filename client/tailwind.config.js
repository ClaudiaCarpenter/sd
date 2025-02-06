import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend:  {
      colors: {
        "info": "--color-gray-600",
      },
    },
  },
  plugins: [
    typography,
    forms,
    aspectRatio
  ]
}
