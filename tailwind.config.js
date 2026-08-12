/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#000000",
          800: "#0a0a0a",
          700: "#1a1a1a",
          600: "#2a2a2a",
          500: "#3a3a3a",
          400: "#4a4a4a",
        },
        primary: {
          500: "#c0c0c0",
          600: "#a8a8a8",
          700: "#909090",
        },
        accent: {
          500: "#e8b547",
          600: "#d4a046",
        },
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-shift": "gradientShift 8s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-animated": "linear-gradient(45deg, #c0c0c0, #e8b547, #c0c0c0, #e8b547)",
      },
      backgroundSize: {
        "gradient-size": "200% 200%",
      },
      boxShadow: {
        glow: "0 0 20px rgba(192, 192, 192, 0.3)",
        "glow-lg": "0 0 40px rgba(232, 181, 71, 0.2)",
      },
    },
  },
  plugins: [],
}
