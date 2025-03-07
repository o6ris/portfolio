// tailwind.config.js
import {heroui} from "@heroui/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #701a75, #9333ea)',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()]
}

export default config;