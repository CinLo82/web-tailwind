/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './*.{html,js}',
        './src/**/*.{html,js,jsx,ts,tsx}', 
    ],
    theme: {
        extend: {
            screens: {
                'xs': { 'max': '768px' },
            },
            boxShadow:{
                Header3D: '0px 1px 0px #393d3f, 1px 2px 0px #393d3f, 2px 3px 0px #393d3f, 3px 4px 0px #393d3f'
            },
            backgroundImage: {
                'body-pattern': "url('../img/pattern.png')",
                'banner': "url('../img/bakbaner.png')"
            },
            backgroundPosition: {
                'banner-position': '-200px -200px'
            },
            colors: {
                'azul-claro': '#37bcf9',
                'azul-oscuro': '#0370b9'
            },
            animation: {
                'spin-slow': 'spin 2s linear infinite',
                'from-bellow': 'fromBellow 500ms linear',
                'from-right': 'fromRight 300ms linear',
                'bg-banner': 'backBanner 10s linear',   
                'text-banner': 'showBannerText 10s linear',
                'show-card-icon': 'showCardIcon 300ms linear',
                'show-card-category': 'showCardCategory 400ms linear',
                'show-card-des': 'showCardDes 500ms linear',
            },
            keyframes: {
                fromBellow: {
                    '0%': { transform: 'translateY(0%)' },
                    '50%': { transform: 'translateY(200%)' },
                    '100%': { transform: 'translateY(0%)' },
                },
                fromRight: {
                    '0%': { transform: 'translateX(200%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
                backBanner: {
                    '0%': { backgroundPosition: '0% 0%' },
                    '100%': { backgroundPosition: '-200% -200%' },
                },
                showBannerText: {
                    '0%': { 
                        transform: 'translateX(-600%) scale(5.5)',
                        opacity: '1' 
                    },
                    '50%': { 
                        transform: 'translateX(600%) scale(5.5)',
                        opacity: '1' 
                    },
                    '75%': { 
                        transform: 'translateX(-600%) scale(5.5)',
                        'text-shadow': 'none',
                        color: 'transparent',
                        opacity: '0' 
                    },
                    '100%': { 
                        transform: 'translateX(-600%) scale(5.5)',
                        'text-shadow': '2px 2px 1px black',
                        color: 'white',
                        opacity: '1'  
                    },
                },
                showCardIcon: {
                    'from': { transform: 'translateY(-200%)' },
                    'to': { transform: 'translateY(0%)' },
                },
                showCardCategory: {
                    'from': { transform: 'translateY(-300%)' },
                    'to': { transform: 'translateY(0%)' },
                },
                showCardDes: {
                    'from': { transform: 'translateX(-300%)' },
                    'to': { transform: 'translateX(0%)' },
                },
                
            },
        },
    },
    variants: {
        animation: ['responsive', 'hover', 'group-hover'],
        animate:['responsive', 'hover', 'group-hover'],
        fontSize:['responsive', 'hover', 'group-hover'],
        scale:['responsive', 'hover', 'group-hover'],
        padding:['responsive', 'hover', 'group-hover'],
        margin:['responsive', 'hover', 'group-hover'],
    },
    plugins: [],
}