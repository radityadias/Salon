const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'main-text': '#2A3335',
        'primary': '#77CDFF', 
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

