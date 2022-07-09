module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        tree: "url('./components/assets/images/character-logo.jpg)",
      },
    },
  },
  plugins: [require("daisyui")],
};
