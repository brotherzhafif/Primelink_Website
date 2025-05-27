/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'], // ini yang penting
      },
      fontSize: {
        'title-1': '40px',
        'title-2': '36px',
        'title-3': '32px',
        'title-4': '28px',
        'base-1': '25px',
        'base-2': '24px',
        'base-3': '20px',
        'base-4': '16px',
      },
    },
  },

  plugins: [
    daisyui,
    // Plugin Custom
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Untuk menyembunyikan scrollbar di semua browser */
          '-ms-overflow-style': 'none', // IE and Edge
          'scrollbar-width': 'none', // Firefox
          '&::-webkit-scrollbar': {
            display: 'none', // Chrome, Safari, and Opera
          },
        },
        '.complex-gradient': {
          background: `
            linear-gradient(to bottom right, rgba(113, 133, 225, 0.20) 0%, rgba(234, 244, 255, 0.20) 50%) bottom right / 50% 50% no-repeat,
            linear-gradient(to bottom left, rgba(113, 133, 225, 0.20) 0%, rgba(234, 244, 255, 0.20) 50%) bottom left / 50% 50% no-repeat,
            linear-gradient(to top left, rgba(113, 133, 225, 0.20) 0%, rgba(234, 244, 255, 0.20) 50%) top left / 50% 50% no-repeat,
            linear-gradient(to top right, rgba(113, 133, 225, 0.20) 0%, rgba(234, 244, 255, 0.20) 50%) top right / 50% 50% no-repeat,
            linear-gradient(150deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.04) 76.26%)
          `,
          filter: 'drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25))',
          'backdrop-filter': 'blur(50px)',
        },
      });
    }),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#EDF2FF",
          secondary: "#00d100",
          accent: "#191919",
          neutral: "#CFE3EE",
          "base-100": "#ffffff", // putih
          "base-200": "#ffffff", // putih
          "base-300": "#ffffff", // putih
          info: "#00e1ff",
          success: "#4DAF6E",
          warning: "#ff942e",
          error: "#E73D1C",
        },
      },
    ],
  },
};
