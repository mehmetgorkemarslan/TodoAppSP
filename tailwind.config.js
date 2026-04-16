/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pageBg: '#020617',
        sidebarBg: '#111827',
        cardBg: '#1A2332',
        innerBg: '#243447',
        inputBg: '#15202E',
        crimsonStart: '#B71C1C',
        crimsonEnd: '#7F0000',
        success: '#00C853',
        successBg: 'rgba(0, 200, 83, 0.1)',
        warning: '#FFD600',
        warningBg: 'rgba(255, 214, 0, 0.1)',
        danger: '#FF1744',
        dangerBg: 'rgba(255, 23, 68, 0.1)',
        info: '#2979FF',
        infoBg: 'rgba(41, 121, 255, 0.1)',
        glassBorder: 'rgba(255, 255, 255, 0.06)',
      },
      boxShadow: {
        glow: '0 4px 14px 0 rgba(183, 28, 28, 0.3)',
      },
      borderRadius: {
        'card': '16px',
        'input': '10px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
