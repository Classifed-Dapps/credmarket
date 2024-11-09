import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			inter: 'var(--font-inter)',
  			mansalva: 'var(--font-mansalva)',
  			manrope: 'var(--font-manrope)',
  			roboto: 'var(--font-roboto)',
  			poppins: 'var(--font-poppins)'
  		},
  		colors: {
  			primary: {
  				'1': '#ffffff',
  				'2': '#1d1d1d',
  				'3': '#1D2026'
  			},
  			current: {
  				'100': '#057E72',
  				'200': '#03645A',
  				'300': '#15B4A4',
  				'400': '#40E0D0',
  				'500': '#307687',
  				'600': '#2e5d6f',
  				'700': '#2a4858'
  			},
  			gray: {
  				'1': '#4B4B4B'
  			},
  			secondary: {
  				'100': '#40e0d0',
  				'200': ' #31d5d1',
  				'300': '#31d5d1',
  				'400': '#3093a1',
  				'500': '#307687',
  				'600': '#2e5d6f',
  				'700': '#2a4858'
  			},
  			tertiary: {
  				'1': '#0B225A',
  				'2': '#6B89B7',
  				'3': '#8C94A3',
  				'4': '#363B47'
  			},
  			orange: '#F97316'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
