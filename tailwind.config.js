module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: { max: '500px' },
      mm: { max: '790px' },
      lm: { max: '990px' },
      mmin: { min: '500px' },
    },
    extend: {
      minWidth: {
        '234px': '234px',
        '16px': '16px',
      },
      colors: {
        'dark-blue': '#0D1E4B',
      },
      margin: {
        cmar: '0 -1px -1px 0',
      },
      boxShadow: {
        '1px': 'inset 0 0 0 1px',
      },
      backgroundImage: {
        pilots: "url('/src/pilots.jpg')",
        shadow:
          'radial-gradient(50% 50% at 50% 50%, #000000 0%, rgba(0, 0, 0, 0) 100%)',
      },
    },
  },
  plugins: [],
}
