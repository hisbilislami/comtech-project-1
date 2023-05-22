/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hmi-papaya-whip": "#feefd0",
        "hmi-black": "#070606",
        "hmi-caf-noir": "#4b3822",
        "hmi-dun": "#c2bbab",
        "hmi-timberwolf": "#d7d7d3",
        "hmi-black2": "#010102",
        "hmi-isabelline": "#efe8e2",
        "hmi-reseda-green": "#5e7e65",
        "hmi-white": "#fefefeff",
        "hmi-battleship-gray": "#9f968bff",
        "hmi-bg-history": "#F1F0EB",
      },
    },
  },
  plugins: [],
};
