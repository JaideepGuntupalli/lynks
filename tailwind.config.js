/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", ...defaultTheme.fontFamily.serif],
                dm: ["DM Sans", ...defaultTheme.fontFamily.serif],
            },
        },
    },
    plugins: [],
};
