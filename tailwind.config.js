/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				Bebas: "'Bebas Neue', cursive;",
				Roboto: "'Roboto', sans-serif",
			},
			colors: {
				Fondo1: '#16181d',
				Fondo2: '#23262e',
				Fondo3: '#0f1115',
				Primario: '#00f260',
				Secundario: '#0575a9',
			},
			screens: {
				sm: '360px',
				md: '600px',
			},
		},
	},
	plugins: [],
};
