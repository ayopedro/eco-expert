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
        hero: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/industrial-cleaning.webp')",
        contact:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/contact.webp')",
        about:
          'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/assets/conference-room.webp)',
        services:
          'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/assets/hero.webp)',
        faqs: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/assets/faqs.webp')",
      },
    },
  },
  plugins: [forms],
};
export default config;
