import type { Config } from "tailwindcss";

// Colours resolve to the CSS custom properties in src/app/globals.css,
// stored as RGB channels so Tailwind opacity modifiers (bg-accent/10) work.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: token("color-canvas"),
        subtle: token("color-subtle"),
        ink: token("color-ink"),
        muted: token("color-muted"),
        line: token("color-line"),
        accent: {
          DEFAULT: token("color-accent"),
          hover: token("color-accent-hover"),
          soft: token("color-accent-soft"),
        },
        night: {
          DEFAULT: token("color-night"),
          raised: token("color-night-raised"),
          fg: token("color-night-fg"),
          muted: token("color-night-muted"),
          accent: token("color-night-accent"),
        },
        success: token("color-success"),
        danger: token("color-danger"),
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["var(--text-display)", { lineHeight: "1.04", letterSpacing: "-0.035em" }],
        page: ["var(--text-page)", { lineHeight: "1.08", letterSpacing: "-0.032em" }],
        h2: ["var(--text-h2)", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        h3: ["var(--text-h3)", { lineHeight: "1.3", letterSpacing: "-0.015em" }],
        lead: ["var(--text-lead)", { lineHeight: "1.6", letterSpacing: "-0.005em" }],
      },
      maxWidth: {
        container: "var(--container-max)",
        prose: "38rem",
      },
      spacing: {
        section: "var(--section-y)",
        gutter: "var(--gutter)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        lg: "var(--shadow-lg)",
        focus: "var(--shadow-focus)",
      },
      transitionTimingFunction: {
        out: "var(--ease-out)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        base: "var(--duration-base)",
      },
    },
  },
  plugins: [],
};

export default config;
