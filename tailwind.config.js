module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppinsFont: "'Poppins', sans-serif",
        assintantFont: "'Assistant', sans-serif",
      },

      textColor: {
        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          inverted: "var(--color-text-inverted)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          "button-accent": "var(--color-button-accent)",
          "button-accent-hover": "var(--color-button-accent-hover)",
          "button-muted": "var(--color-button-muted)",
        },
      },
      gradientColorStops: {
        skin: {
          hue: "var(--color-fill)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
