/** @type {import('tailwindcss').Config} */
const daisyui = require("./daisyui.js");
const daisyTheme = require("./daisyui-theme.js");
const goyoThemes = require("./goyo-themes.js");

const daisyuiPlugin = daisyui.default || daisyui;
const themePlugin = daisyTheme.default || daisyTheme;

module.exports = {
    content: [
        "../templates/**/*.html",
        "../content/**/*.md",
        "../src/**/*.js",
    ],

    plugins: [
        // daisyUI core (themes list must be STRINGS only)
        daisyuiPlugin({
            themes: "all",
        }),

        // Inject our 2 custom themes (this is what actually creates the CSS blocks)
        themePlugin({
            name: "goyo-dark",
            "color-scheme": "dark",
            ...goyoThemes["goyo-dark"],
        }),

        themePlugin({
            name: "goyo-light",
            "color-scheme": "light",
            ...goyoThemes["goyo-light"],
        }),

        themePlugin({
            name: "my-theme",
            "color-scheme": "light",
            ...goyoThemes["my-theme"],
        }),
    ],
};
