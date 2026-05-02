import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      none: "0px",
      sm: "4px",
      DEFAULT: "8px",
      md: "10px",
      lg: "12px",
      xl: "14px",
      "2xl": "16px",
      full: "9999px",
    },
    extend: {
      colors: {
        brand: {
          red:    "#FF4D4D",
          orange: "#FF7A1F",
          yellow: "#FFD84D",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          subtle:  "#F8F8F8",
        },
        ink: {
          DEFAULT:   "#1A1A1A",
          secondary: "#6F6F6F",
          tertiary:  "#9F9F9F",
          disabled:  "#C8C8C8",
        },
        line: {
          DEFAULT: "var(--color-line)",
          strong:  "var(--color-line-strong)",
          subtle:  "var(--color-line-subtle)",
        },
        paid: {
          DEFAULT: "#FF7A1F",
        },
        accent: {
          DEFAULT: "#3B82F6",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        display: ["2.5rem",    { lineHeight: "1.08", letterSpacing: "-0.022em", fontWeight: "700" }],
        h1:      ["1.75rem",   { lineHeight: "1.18", letterSpacing: "-0.018em", fontWeight: "700" }],
        h2:      ["1.25rem",   { lineHeight: "1.3",  letterSpacing: "-0.012em", fontWeight: "600" }],
        h3:      ["1rem",      { lineHeight: "1.4",  letterSpacing: "-0.006em", fontWeight: "500" }],
        h4:      ["0.875rem",  { lineHeight: "1.4",  letterSpacing: "-0.003em", fontWeight: "500" }],
        body:    ["0.875rem",  { lineHeight: "1.6",  letterSpacing: "0em",      fontWeight: "400" }],
        caption: ["0.75rem",   { lineHeight: "1.4",  letterSpacing: "0.01em",   fontWeight: "400" }],
        label:   ["0.6875rem", { lineHeight: "1",    letterSpacing: "0.06em",   fontWeight: "600" }],
      },
      boxShadow: {
        card:         "0 1px 3px rgba(0,0,0,0.06), 0 2px 10px rgba(0,0,0,0.04)",
        "card-hover": "0 2px 8px rgba(0,0,0,0.08), 0 4px 20px rgba(0,0,0,0.06)",
        subtle:       "0 1px 2px rgba(0,0,0,0.04)",
        overlay:      "0 8px 30px rgba(0,0,0,0.10)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      animation: {
        "fade-in":  "fade-in 200ms ease forwards",
        "slide-up": "slide-up 200ms ease forwards",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(6px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
