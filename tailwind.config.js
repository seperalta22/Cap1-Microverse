/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './**/*.{js,html}'],
  theme: {
    colors: {
      naranja: '#ec5242',
      gris_one: '#d3d3d3',
      gris_darker: '#585858',
      negro: '#272a31',
      white: '#fff',
      grey: '#f7f7f7',
    },
    extend: {
      backgroundImage: {
        mb_bg_img: 'url(../assets/img/bg_main_mobile.png)',
        dt_bg_img: 'url(../assets/img/desktop_bg.png)',
        mb_program: 'url(../assets/img/bg_program.png)',
        bg_about: 'url(../assets/img/about_bg.png)',
        evan: 'url(../assets/img/evan.svg)',
        sarah: 'url(../assets/img/sarah.svg)',
      },
    },
  },
  plugins: [],
};
