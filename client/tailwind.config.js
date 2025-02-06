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
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [
    typography,
    forms,
    aspectRatio,
    daisyui
  ],
  daisyui: {
    themes: [
      {
        light: {
          // importing the built-in 'light' theme
          // and setting the color values for '--primary-muted'
          // (numbers are OKLCH values)
          ...require("daisyui/src/theming/themes")["light"],
          "--primary-muted": "65% 0.2 295",
        },
      },
    ],
  },
}
