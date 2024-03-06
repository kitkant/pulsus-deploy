import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/features/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			letterSpacing: {
				'6': '3px',
			},
			keyframes: {
				animateStroke: {
					'0%': {
						fill: 'transparent',
						stroke: '#fff',
						strokeWidth: '3',
						strokeDashoffset: '25%',
						strokeDasharray: '0 32%',
					},
					'50%': {
						fill: 'transparent',
						stroke: '#fff',
						strokeWidth: '3',
					},
					'80%, 100%': {
						fill: '#fff',
						stroke: 'transparent',
						strokeWidth: '0',
						strokeDashoffset: '-25%',
						strokeDasharray: '32% 0',
					},
				},
				animateDot: {
					'0%, 60%': {
						opacity: '0',
					},
					'100%': {
						opacity: '1',
					},
				},
			},
			animation: {
				animateStroke: 'animateStroke 4s alternate',
				animateDot: 'animateDot 4s alternate',
			},
			colors: {
				'regal-blue': '#243c5a',
			},
		},
	},
	darkMode: 'class',
	plugins: [nextui()],
}
export default config
