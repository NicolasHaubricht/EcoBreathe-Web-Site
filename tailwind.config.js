/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          1: "#214001",
          2: "#688C32",
          3: "#AED952",
          4: "#BED984",
        },
        "off-white": "#F2F2F2",
      },
    },
  },
  plugins: [],
}
