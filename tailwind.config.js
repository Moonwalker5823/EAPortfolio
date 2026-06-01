/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink:     '#080808',
        surface: '#111111',
        card:    '#161616',
        border:  'rgba(255,255,255,0.06)',
        gold: {
          DEFAULT: '#F5C518',
          dark:    '#C9A000',
          light:   '#FFE066',
        },
        stamp: '#E03131',
        ink2: '#1a1400',
      },
      fontFamily: {
        bebas:  ['"Bebas Neue"', 'sans-serif'],
        barlow: ['"Barlow Condensed"', 'sans-serif'],
        dm:     ['"DM Sans"', 'sans-serif'],
        gumela: ['Gumela', 'cursive'],
      },
      keyframes: {
        'marquee-l': { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        'marquee-r': { '0%': { transform: 'translateX(-50%)' }, '100%': { transform: 'translateX(0)' } },
        float:       { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-22px)' } },
        'float-s':   { '0%,100%': { transform: 'translateY(0) rotate(0deg)' }, '50%': { transform: 'translateY(-32px) rotate(6deg)' } },
        'bounce-y':  { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(9px)' } },
        'fade-down': { '0%': { opacity: '0', transform: 'translateY(-14px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        'marquee-l': 'marquee-l 24s linear infinite',
        'marquee-r': 'marquee-r 30s linear infinite',
        float:       'float 6s ease-in-out infinite',
        'float-s':   'float-s 10s ease-in-out infinite',
        'bounce-y':  'bounce-y 1.5s ease-in-out infinite',
        'fade-down': 'fade-down 0.7s ease both',
      },
    },
  },
  plugins: [],
}
