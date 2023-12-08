module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      main: ["Josefin Sans"],
    },
    extend: {
      colors: {
        "main-color": "#0A0908",
        "hover-color": "#8A6745",
        "button-color": "#59458A",
      },
      backgroundImage: {
        landingBg: "url('/src/assets/background.png')",
        shoesBg: "url('/src/assets/shoes-category.png')",
        headphoneBg: "url('/src/assets/headphones-category.png')",
        kitchenBg: "url('/src/assets/kitchen-category.png')",
      },
      boxShadow: {
        "3xl": "2px 0px 3px 0px rgba(0, 0, 0, 0.2)",
        bt: "0px 4px 3px 0px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
