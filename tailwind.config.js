/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        royalblue1: "#144dc1",
        royalblue: {
          "100": "#3b73e8",
          "200": "#144dc1",
          "300": "rgba(59, 115, 232, 0.09)",
        },
        gray: {
          "100": "rgba(0, 0, 0, 0.5)",
          "200": "rgba(0, 0, 0, 0.1)",
        },
        lightgray: "#d5d5d5",
        whitesmoke: "#eee",
        forestgreen: "#169e24",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        roboto: "Roboto",
      },
      borderRadius: {
        "31xl": "50px",
        "6xl": "25px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
