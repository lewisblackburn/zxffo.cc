const defaultSans = [
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  '"Noto Sans"',
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
];

const defaultSerif = [
  "Georgia",
  "Cambria",
  '"Times New Roman"',
  "Times",
  "serif",
];

module.exports = {
  purge: ["./**/{pages,components,tailwind}/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      colors: {
        "accent": '#00BFA6',
        "variant": '#635bfb',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        default: 'var(--color-bg-default)',
        inverse: 'var(--color-bg-inverse)',
      },
      borderColor: {
        primary: 'var(--color-border-primary)'
      },
      fontSize: {
        "7xl": "4.5rem",
      },
      spacing: {
        14: "3.375rem",
      },
    },
    // typography: (theme) => ({
    //   default: {
    //     css: {
    //       color: theme("colors.gray.900"),
    //       blockquote: {
    //         borderLeftColor: theme("colors.gray.700"),
    //       },
    //       "ol > li::before": {
    //         color: theme("colors.gray.700"),
    //       },
    //       "ul > li::before": {
    //         backgroundColor: theme("colors.gray.700"),
    //       },
    //       a: {
    //         color: "#f92300",
    //       },
    //     },
    //   },
    // }),
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
};
