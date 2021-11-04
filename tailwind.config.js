module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#222",
        secondary: "#323232",
        tertiary: "#14FFEC",
        quaternary: "#fff",
        lightBlack: "#111",
      }),
      textColor: {
        primary: "#222",
        secondary: "#323232",
        tertiary: "#14FFEC",
        quaternary: "#fff",
      },
      fontFamily: {
        Roboto: ["Roboto"],
        Nunito: ["Nunito"],
        Montserrat: ["Montserrat"],
      },
      height: {
        primary: "86vh",
        secondary: "83vh",
        tertiary: "77vh",
      },
      boxShadow: {
        primary: "rgba(20, 255, 236, 0.24) 0px 3px 8px",
        secondary: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "2.7rem",
      },
      borderColor: {
        primary: "#14FFEC",
      },
      stroke: {
        primary: "#14FFEC",
      },
      ringColor: {
        primary: "#14FFEC",
      },
      screens: {
        mobile: "350px",
      },
    },
  },
  variants: {
    extend: {
      stroke: ["hover", "focus"],
    },
  },
  plugins: [],
};
