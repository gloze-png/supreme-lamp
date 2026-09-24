/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Design tokens lifted 1:1 from the original theme's :root CSS
      // variables (assets/css/style.css) so nothing visually shifts.
      colors: {
        base: "#0457aa", // accent dark-blue
        ink: "#121212", // near-black
        muted: "#797E88", // body copy gray
        surface: "#F8F8F8", // light section background
        border: "#D8DDE1",
      },
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
        serif: ['"Marcellus"', "serif"],
      },
      keyframes: {
        // Ported verbatim from assets/js vendor animate.min.css / custom-animate.css
        // so the reveal animations are pixel-identical to the original.
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-20px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(20px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        floatBobY: {
          "0%": { transform: "translateY(-20px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(-20px)" },
        },
        rotateMe: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        bouncing: {
          "0%, 100%": { transform: "translateY(0) scale(1, 1)" },
          "45%": { transform: "translateY(50px) scale(1, 1)" },
          "50%": { transform: "translateY(50px) scale(1.5, 0.5)" },
          "55%": { transform: "translateY(50px) scale(1, 1)" },
        },
        wobbleHorizontal: {
          "16.65%": { transform: "translateX(5px)" },
          "33.3%": { transform: "translateX(-3px)" },
          "49.95%": { transform: "translateX(4px)" },
          "66.6%": { transform: "translateX(-2px)" },
          "83.25%": { transform: "translateX(1px)" },
          "100%": { transform: "translateX(0)" },
        },
        portfolioFadeIn: {
          from: { opacity: 0, transform: "scale(1.03)" },
          to: { opacity: 1, transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in-left": "fadeInLeft 1s ease forwards",
        "fade-in-right": "fadeInRight 1s ease forwards",
        "fade-in-up": "fadeInUp 1s ease forwards",
        "float-bob-y": "floatBobY 2s ease-in-out infinite",
        "rotate-me": "rotateMe 24s linear infinite",
        bouncing: "bouncing 1.4s linear infinite",
        wobble: "wobbleHorizontal 1s ease-in-out 1",
        "portfolio-fade-in": "portfolioFadeIn 0.5s ease both",
      },
      boxShadow: {
        header: "0px 10px 60px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
