import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        /* Approved Dark Premium AI Color Tokens */
        ai: {
          base: "#05070B",
          deep: "#080C12",
          secondary: "#0A0F17",
          surface1: "#0D131C",
          surface2: "#111923",
          surface3: "#16212D",
          borderSubtle: "#1B2835",
          borderDefault: "#263747",
          purple: "#7C5CFF",
          purpleSoft: "#A78BFA",
          cyan: "#38BDF8",
          cyanSoft: "#7DD3FC",
          gold: "#C9A45A",
        },

        /* Seamless mapped palette ensuring zero broken component styles */
        cyber: {
          bg: "#05070B",
          "bg-elevated": "#080C12",
          surface: "#0D131C",
          "surface-elevated": "#111923",
          "surface-highlight": "#16212D",
          border: "#1B2835",
          "border-bright": "#263747",
          primary: "#7C5CFF",
          "primary-dark": "#5D3CE0",
          secondary: "#38BDF8",
          success: "#34D399",
          warning: "#EABF55",
          danger: "#E06C75",
          text: "#F1F5F9",
          "text-muted": "#A8B3C2",
          "text-dim": "#718096",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "ai-subtle": "0 4px 20px -2px rgba(0, 0, 0, 0.5)",
        "ai-glow-purple": "0 0 30px -5px rgba(124, 92, 255, 0.3)",
        "ai-glow-cyan": "0 0 30px -5px rgba(56, 189, 248, 0.3)",
        "cyber-glow": "0 0 25px -5px rgba(124, 92, 255, 0.3)",
        "cyber-glow-sm": "0 0 12px -2px rgba(124, 92, 255, 0.25)",
        "cyber-glow-emerald": "0 0 20px -3px rgba(52, 211, 153, 0.3)",
        "cyber-glow-danger": "0 0 20px -3px rgba(224, 108, 117, 0.3)",
        "cyber-card": "0 10px 30px -10px rgba(0, 0, 0, 0.7)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", filter: "drop-shadow(0 0 8px rgba(124, 92, 255, 0.6))" },
          "50%": { opacity: "0.5", filter: "drop-shadow(0 0 2px rgba(124, 92, 255, 0.2))" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 3s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
