import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F6F4EB',
        foreground: '#0B240B',
        lemon: '#04FF00',
        mint: '#E0EBE0',
      },
      backgroundImage: {
        hero: "url('/assets/hero.png')",
      },
    },
  },
  plugins: [forms],
};
export default config;
