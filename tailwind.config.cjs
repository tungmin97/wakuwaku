/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      sans: [
        "Overpass",
        "-apple-system",
        "Segoe UI",
        "Ubuntu",
        "Helvetica Neue",
        "sans-serif",
      ],
    },
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "2040px",
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("tailwindcss-themer")({
      themes: [
        {
          name: "theme-dark",
          extend: {
            colors: {
              textPrimary: "#cbd5e1", //text-slate-300
              textSecondary: "#94a3b8", //text-slate-400
              textHeader: "#e2e8f0", //text-slate-200
              textTitle: "#e2e8f0", //text-slate-200
              colorTheme: "#fb7185", //text-teal-500
              backgroundPrimary: "#0f172a", //bg-slate-800
              backgroundSecondary: "#1e293b", //bg-slate-700
              backgroundWatched: "#64748b", //bg-slate-500
            },
          },
        },
        {
          name: "theme-light",
          extend: {
            colors: {
              textPrimary: "#1e293b", //text-slate-800
              textSecondary: "#64748b", //text-slate-500
              textHeader: "#0f172a", //text-slate-200
              textTitle: "#94a3b8", //text-slate-200
              colorTheme: "#e11d48", //text-teal-500
              backgroundPrimary: "#e2e8f0", //bg-slate-200
              backgroundSecondary: "#cbd5e1", //bg-slate-300
              backgroundWatched: "#cbd5e1", //bg-slate-300
            },
          },
        },
      ],
    }),
  ],
};
