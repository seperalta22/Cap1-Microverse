/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './**/*.{js,html}'],
	theme: {
		colors: {
			naranja: '#ec5242',
			gris: '#d3d3d3',
			negro: '#272a31',
			white: '#fff',
			grey: '#f7f7f7',
		},
		extend: {
			backgroundImage: {
				mb_bg_img: 'url(../assets/img/bg_main_mobile.png)',
			},
		},
	},
	plugins: [],
};
