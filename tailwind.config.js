// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      light: '#f2f2f2',
      black: '#333333',
      accent: '#c83c3a'
    },
    fontSize: {
      largeH: ['5.8rem', {
        lineHeight: '5rem',
        fontWeight: '900'
      }],
      mediumH: ['2rem', {
        lineHeight: '3rem',
        fontWeight: '800'
      }],
      smallH: ['1.3rem', {
        lineHeight: '1.75rem',
        fontWeight: '700'
      }],
      smallP: ['0.7rem', {
        lineHeight: '1.25rem',
        fontWeight: '300'
      }],
      mediumP: ['1.1rem', {
        lineHeight: '1.5rem',
        fontWeight: '300'
      }],
      sm: '0.6rem',
      base: '1rem',
      xl: '1.1rem',
    },
    fontFamily: {
      sans: ['Archivo', 'sans-serif'],
      mono: ['IBM Plex Mono', 'monospace']
    }
  },
  plugins: []
}
