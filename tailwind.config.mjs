/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,php,svelte,ts,tsx,vue}'],
    theme: {
        colors: {
            ...colors,
            'sb-green': {
                DEFAULT: '#05a37d',
                550: '#059371',
                600: '#048264',
                650: '#047258',
                700: '#03624b',
                750: '#03523f',
                800: '#024132',
                850: '#013125',
                900: '#012119',
                950: '#00100c',
                500: '#05a37d',
                450: '#1eac8a',
                400: '#37b597',
                350: '#50bfa4',
                300: '#69c8b1',
                250: '#82d1be',
                200: '#9bdacb',
                150: '#b4e3d8',
                100: '#cdede5',
                50: '#e6f6f2',
            },
            'sb-pear': {
                DEFAULT: '#c2e812',
                550: '#afd110',
                600: '#9bba0e',
                650: '#88a20d',
                700: '#748b0b',
                750: '#617409',
                800: '#4e5d07',
                850: '#3a4605',
                900: '#272e04',
                950: '#131702',
                500: '#c2e812',
                450: '#c8ea2a',
                400: '#ceed41',
                350: '#d4ef59',
                300: '#daf171',
                250: '#e1f489',
                200: '#e7f6a0',
                150: '#edf8b8',
                100: '#f3fad0',
                50: '#f9fde7',
            },
            'sb-jasmine': {
                DEFAULT: '#f4d06f',
                550: '#dcbb64',
                600: '#c3a659',
                650: '#ab924e',
                700: '#927d43',
                750: '#7a6838',
                800: '#62532c',
                850: '#493e21',
                900: '#312a16',
                950: '#18150b',
                500: '#f4d06f',
                450: '#f5d57d',
                400: '#f6d98c',
                350: '#f7de9a',
                300: '#f8e3a9',
                250: '#fae8b7',
                200: '#fbecc5',
                150: '#fcf1d4',
                100: '#fdf6e2',
                50: '#fefaf1',
            },
            'sb-tangerine': {
                DEFAULT: '#f49d6e',
                550: '#dc8d63',
                600: '#c37e58',
                650: '#ab6e4d',
                700: '#925e42',
                750: '#7a4f37',
                800: '#623f2c',
                850: '#492f21',
                900: '#311f16',
                950: '#18100b',
                500: '#f49d6e',
                450: '#f5a77d',
                400: '#f6b18b',
                350: '#f7ba9a',
                300: '#f8c4a8',
                250: '#faceb7',
                200: '#fbd8c5',
                150: '#fce2d4',
                100: '#fdebe2',
                50: '#fef5f1',
            },
            'sb-orange': {
                DEFAULT: '#ff4e00',
                550: '#e64600',
                600: '#cc3e00',
                650: '#b33700',
                700: '#992f00',
                750: '#802700',
                800: '#661f00',
                850: '#4c1700',
                900: '#331000',
                950: '#190800',
                500: '#ff4e00',
                450: '#ff601a',
                400: '#ff7133',
                350: '#ff834d',
                300: '#ff9566',
                250: '#ffa780',
                200: '#ffb899',
                150: '#ffcab3',
                100: '#ffdccc',
                50: '#ffede6',
            },
            'sb-pink': {
                DEFAULT: '#f7d6e0',
                550: '#dec1ca',
                600: '#c6abb3',
                650: '#ad969d',
                700: '#948086',
                750: '#7c6b70',
                800: '#63565a',
                850: '#4a4043',
                900: '#312b2d',
                950: '#191516',
                500: '#f7d6e0',
                450: '#f8dae3',
                400: '#f9dee6',
                350: '#f9e2e9',
                300: '#fae6ec',
                250: '#fbebf0',
                200: '#fceff3',
                150: '#fdf3f6',
                100: '#fdf7f9',
                50: '#fefbfc',
            },
            'sb-aero-blue': {
                DEFAULT: '#5bc0eb',
                550: '#52add4',
                600: '#499abc',
                650: '#4086a5',
                700: '#37738d',
                750: '#2e6076',
                800: '#244d5e',
                850: '#1b3a46',
                900: '#12262f',
                950: '#091317',
                500: '#5bc0eb',
                450: '#6bc6ed',
                400: '#7ccdef',
                350: '#8cd3f1',
                300: '#9dd9f3',
                250: '#ade0f5',
                200: '#bde6f7',
                150: '#ceecf9',
                100: '#def2fb',
                50: '#eff9fd',
            },
            'sb-indigo': {
                DEFAULT: '#284b63',
                550: '#244459',
                600: '#203c4f',
                650: '#1c3545',
                700: '#182d3b',
                750: '#142632',
                800: '#101e28',
                850: '#0c161e',
                900: '#080f14',
                950: '#04070a',
                500: '#284b63',
                450: '#3e5d73',
                400: '#536f82',
                350: '#698192',
                300: '#7e93a1',
                250: '#94a5b1',
                200: '#a9b7c1',
                150: '#bfc9d0',
                100: '#d4dbe0',
                50: '#eaedef',
            },
            'sb-space-blue': {
                DEFAULT: '#34344a',
                550: '#2f2f43',
                600: '#2a2a3b',
                650: '#242434',
                700: '#1f1f2c',
                750: '#1a1a25',
                800: '#15151e',
                850: '#101016',
                900: '#0a0a0f',
                950: '#050507',
                500: '#34344a',
                450: '#48485c',
                400: '#5d5d6e',
                350: '#717180',
                300: '#858592',
                250: '#9a9aa5',
                200: '#aeaeb7',
                150: '#c2c2c9',
                100: '#d6d6db',
                50: '#ebebed',
            },
            'sb-jet-black': {
                DEFAULT: '#353535',
                550: '#303030',
                600: '#2a2a2a',
                650: '#252525',
                700: '#202020',
                750: '#1b1b1b',
                800: '#151515',
                850: '#101010',
                900: '#0b0b0b',
                950: '#050505',
                500: '#353535',
                450: '#494949',
                400: '#5d5d5d',
                350: '#727272',
                300: '#868686',
                250: '#9a9a9a',
                200: '#aeaeae',
                150: '#c2c2c2',
                100: '#d7d7d7',
                50: '#ebebeb',
            },
            'sb-foam': {
                DEFAULT: '#f8f4e3',
                550: '#dfdccc',
                600: '#c6c3b6',
                650: '#aeab9f',
                700: '#959288',
                750: '#7c7a72',
                800: '#63625b',
                850: '#4a4944',
                900: '#32312d',
                950: '#191817',
                500: '#f8f4e3',
                450: '#f9f5e6',
                400: '#f9f6e9',
                350: '#faf7eb',
                300: '#fbf8ee',
                250: '#fcfaf1',
                200: '#fcfbf4',
                150: '#fdfcf7',
                100: '#fefdf9',
                50: '#fefefc',
            },
            'sb-platinum': {
                DEFAULT: '#d9d9d9',
                550: '#c3c3c3',
                600: '#aeaeae',
                650: '#989898',
                700: '#828282',
                750: '#6d6d6d',
                800: '#575757',
                850: '#414141',
                900: '#2b2b2b',
                950: '#161616',
                500: '#d9d9d9',
                450: '#dddddd',
                400: '#e1e1e1',
                350: '#e4e4e4',
                300: '#e8e8e8',
                250: '#ececec',
                200: '#f0f0f0',
                150: '#f4f4f4',
                100: '#f7f7f7',
                50: '#fbfbfb',
            },
        },
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                archivo: ['Archivo', 'sans-serif'],
                'archivo-italic': ['Archivo Italic', 'sans-serif'],
                'archivo-black': ['Archivo Black', 'Archivo', 'sans-serif'],
                'archivo-expanded': [
                    'Archivo Expanded',
                    'Archivo Black',
                    'Archivo',
                    'sans-serif',
                ],
                karla: ['Karla', 'sans-serif'],
            },
        },
    },
    plugins: ['prettier-plugin-tailwindcss'],
}
