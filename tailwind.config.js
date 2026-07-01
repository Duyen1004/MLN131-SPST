/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(41 42% 82%)",
        input: "hsl(41 42% 82%)",
        ring: "hsl(39 83% 56%)",
        background: "hsl(42 100% 97%)",
        foreground: "hsl(31 41% 22%)",
        primary: {
          DEFAULT: "hsl(40 81% 53%)",
          foreground: "hsl(30 45% 18%)"
        },
        secondary: {
          DEFAULT: "hsl(46 56% 92%)",
          foreground: "hsl(31 41% 22%)"
        },
        muted: {
          DEFAULT: "hsl(45 56% 93%)",
          foreground: "hsl(34 25% 43%)"
        },
        accent: {
          DEFAULT: "hsl(198 82% 88%)",
          foreground: "hsl(205 50% 28%)"
        },
        card: {
          DEFAULT: "hsla(0 0% 100% / 0.84)",
          foreground: "hsl(31 41% 22%)"
        }
      },
      borderRadius: {
        lg: "1.25rem",
        md: "1rem",
        sm: "0.75rem"
      },
      boxShadow: {
        glow: "0 22px 60px rgba(176, 133, 53, 0.18)",
        soft: "0 16px 38px rgba(146, 112, 49, 0.12)"
      },
      fontFamily: {
        title: ["Merriweather", "serif"],
        sans: ["Be Vietnam Pro", "sans-serif"]
      },
      backgroundImage: {
        "hero-light":
          "radial-gradient(circle at 82% 18%, rgba(255,239,181,0.55) 0%, rgba(255,214,107,0.20) 18%, transparent 42%), radial-gradient(circle at 18% 22%, rgba(255,255,255,0.65) 0%, transparent 28%), linear-gradient(135deg, #fffdf7 0%, #fbf1db 42%, #efcf95 100%)",
        "map-light":
          "radial-gradient(circle at 20% 18%, rgba(255,250,232,0.98), transparent 18%), radial-gradient(circle at 84% 16%, rgba(255,234,181,0.72), transparent 20%), linear-gradient(180deg, rgba(251,245,222,0.98) 0%, rgba(246,231,187,0.94) 48%, rgba(236,209,142,0.92) 100%)"
      }
    }
  },
  plugins: []
};
