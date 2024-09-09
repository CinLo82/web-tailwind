/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './*.{html,js}',
        './src/**/*.{html,js,jsx,ts,tsx}', 
    ],
    theme: {
        extend: {
            backgroundImage: {
                'body-pattern': "url('../img/pattern.png')",
            },
            colors: {
                'azul-claro': '#37bcf9',
                'azul-oscuro': '#0370b9'
            }
        },
    },
    plugins: [],
}