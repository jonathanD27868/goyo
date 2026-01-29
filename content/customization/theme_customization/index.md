+++
title = "Custom Themes & Overrides"
description = "How to customize Goyo, switch between the different DaisyUI themes and add your own custom DaisyUI theme."
weight = 1
sort_by = "weight"
taxonomies = { tags = ["goyo", "customization", "zola", "theme"], categories = ["guide"] }

[extra]
+++

Goyo is built on top of **Tailwind CSS + daisyUI**.
You can either **override the existing styles** or **define your own daisyUI theme**.

This guide explains both approaches.

---

## 1. Overriding the theme styles (quick & simple)

If you only want to tweak colors, spacing, or components **without defining a new theme**, create the following file in your site:

```
static/css/custom-main.css
```

This file is already loaded by the theme (via `head.html`), **after** the main CSS.

You can safely add any custom CSS here:

```css
/* static/css/custom-main.css */

.hero-title {
  letter-spacing: 0.02em;
}

.btn-primary {
  border-radius: 9999px;
}
```

No build step is required for this approach.

---

## 2. Switching Between Built-in Themes

GOYO is built on top of **daisyUI**, which means you can use **all built-in daisyUI themes** (such as `abyss`, `retro`, `cupcake`, `dracula`, etc.) without creating a custom theme.

You only need to select which themes GOYO should use for **dark mode** and **light mode**.


### Available built-in themes

The full and up-to-date list of available themes is maintained by daisyUI:

* [https://daisyui.com/docs/themes/?lang=en#list-of-themes](https://daisyui.com/docs/themes/?lang=en#list-of-themes)

You can freely pick any of these theme names in GOYO.


### Configuring the active themes

Theme selection is done in your `config.toml`, under the `[extra.theme]` section.

By default, GOYO uses:

* `goyo-dark` for dark mode
* `goyo-light` for light mode

You can replace them with **any daisyUI built-in theme**.

Example:

```toml
[extra.theme]
colorset = "dark"
default_theme_dark = "abyss"
default_theme_light = "cupcake"
```

In this example:

* The site starts in **dark mode**
* The dark theme uses `abyss`
* The light theme uses `cupcake`


### ⚠️ Important: dark vs light theme coherence

When choosing themes, it is **important to respect their intended color scheme**:

* `default_theme_dark` should point to a **dark** theme
* `default_theme_light` should point to a **light** theme

This matters for two reasons:

1. **Visual coherence**
   Using a light theme as `default_theme_dark` (or the opposite) can result in unreadable contrast or unexpected colors.

2. **Logo switching compatibility**
   GOYO supports different logos for dark and light themes via:

```toml
[extra.logo]
dark_image_path = "images/logo-dark.png"
light_image_path = "images/logo-light.png"
```

GOYO decides which logo to display based on whether the active theme is the configured **dark** or **light** theme.
If themes are mixed incorrectly, the wrong logo may be shown.


### Minimal example

```toml
[extra.theme]
colorset = "light"
default_theme_dark = "dracula"
default_theme_light = "retro"
```

```toml
[extra.logo]
dark_image_path = "images/logo-dark.png"
light_image_path = "images/logo-light.png"
```

This setup ensures:

* Correct theme switching
* Correct logo switching
* Predictable behavior of brightness and theme toggle


### Notes

* Switching between built-in themes **does not require rebuilding CSS**
* Rebuilding with `just theme-css` is only needed when:

    * adding or modifying custom themes
    * updating the GOYO theme submodule
* Built-in daisyUI themes are available immediately

---

## 3. Creating a custom daisyUI theme

If you want a **real theme** (light/dark aware, reusable, switchable), follow the steps below.

### Prerequisite

#### `just` is required

GOYO uses **`just`** to simplify the Tailwind build process.

Make sure `just` is installed on your system before running:

```bash
just theme-css
```

Installation instructions are available at:
[https://github.com/casey/just](https://github.com/casey/just)

### Step 1 — Generate a daisyUI theme

1. Go to the official generator:
   👉 [https://daisyui.com/theme-generator](https://daisyui.com/theme-generator)
2. Customize the colors.
3. Copy the generated theme object.


### Step 2 — Format the theme for Goyo

Goyo expects themes in a **strict format**:

* All **keys and values must be double-quoted**
* The theme must be an **object keyed by the theme name**

Example:
#### `src/goyo-themes.custom.js`
```js
/* src/goyo-themes.custom.js */

module.exports = {
  "my-theme": {
    "color-scheme": "light",
    "--color-base-100": "oklch(98% 0.02 250)",
    "--color-base-200": "oklch(95% 0.03 250)",
    "--color-base-300": "oklch(92% 0.04 250)",
    "--color-base-content": "oklch(20% 0.02 250)",

    "--color-primary": "oklch(65% 0.18 250)",
    "--color-primary-content": "oklch(98% 0.01 250)",

    "--radius-box": "0.75rem",
    "--border": "1px",
    "--noise": "0"
  }
};
```

💡 Tip: you can paste the daisyUI output into ChatGPT and ask it to
“**format this like the `my-theme` example used in themes/goyo/src/goyo-themes.js, with all keys and values double-quoted**”.


### Step 3 — Create the required project files

Goyo does **not** assume you already use Tailwind.
You must add the following files to your site.


#### `src/tailwind.config.js`

```js
// src/tailwind.config.js
/** @type {import('tailwindcss').Config} */

// Import plugins from the theme submodule
const daisyui = require("../themes/goyo/src/daisyui.js");
const daisyTheme = require("../themes/goyo/src/daisyui-theme.js");

// Import theme variables
const goyoThemes = require("../themes/goyo/src/goyo-themes.js");
const customThemes = require("./goyo-themes.custom.js");

// Handle default exports vs CJS (same pattern as theme config)
const daisyuiPlugin = daisyui.default || daisyui;
const themePlugin = daisyTheme.default || daisyTheme;

// Merge built-in + user themes
const allThemes = { ...goyoThemes, ...customThemes };

module.exports = {
    content: [
        // Site
        "../templates/**/*.html",
        "../content/**/*.md",
        "../src/**/*.js",

        // Theme templates/content/scripts (so Tailwind sees classes used by the theme)
        "../themes/goyo/templates/**/*.html",
        "../themes/goyo/content/**/*.md",
        "../themes/goyo/static/**/*.js",
    ],

    plugins: [
        // daisyUI core
        daisyuiPlugin({ themes: "all" }),

        // Always include the built-in goyo themes
        themePlugin({
            name: "goyo-dark",
            "color-scheme": "dark",
            ...allThemes["goyo-dark"],
        }),

        themePlugin({
            name: "goyo-light",
            "color-scheme": "light",
            ...allThemes["goyo-light"],
        }),

        // Auto-register every user custom theme from src/goyo-themes.custom.js
        ...Object.entries(customThemes).map(([name, vars]) =>
            themePlugin({
                name,
                "color-scheme": vars["color-scheme"] || "light",
                ...vars,
            })
        ),
    ],
};
```


#### `src/main.css`

```css
/* src/main.css */
@config "./tailwind.config.js";
@import "../themes/goyo/src/main.css";
```

That’s all — Goyo handles the rest.


#### `justfile` (project root)

```make
theme-css:
    @test -x src/tailwindcss || (echo "❌ Tailwind not installed. Run: just setup-tailwind-linux"; exit 1)
    src/tailwindcss -c src/tailwind.config.js -i src/main.css -o themes/goyo/static/css/main.css --minify

setup-tailwind-linux:
    curl -sLo src/tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64
    chmod +x src/tailwindcss

setup-tailwind-macos:
    curl -sLo src/tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-arm64
    chmod +x src/tailwindcss

```


### Step 4 — Build the theme CSS

Run:

```bash
just theme-css
```

If Tailwind is not installed yet:

```bash
just setup-tailwind-linux
# or
just setup-tailwind-macos
```


### Step 5 — Activate your theme

In `config.toml`:

```toml
[extra.theme]
default_theme_light = "my-theme"
# or
default_theme_dark = "my-theme"
```

---

## Notes

#### About generated CSS and git submodules

When you run:

```bash
just theme-css
```

Tailwind generates CSS and **overwrites** the following file:

```
themes/goyo/static/css/main.css
```

Because GOYO is installed as a **git submodule**, this may cause Git to report the submodule as *dirty* (modified), even though this is expected behavior.

To avoid seeing this change every time you rebuild CSS, you can tell Git to ignore generated files inside the GOYO submodule.

Add the following line to your `.gitmodules` file:

```ini
[submodule "themes/goyo"]
    path = themes/goyo
    url = https://github.com/jonathanD27868/goyo.git
    branch = test-daisyUI-themes
    ignore = dirty
```

Then run once:

```bash
git submodule sync
```

This will prevent Git from reporting CSS rebuilds as submodule changes, while still tracking real updates to the GOYO theme.


### Important reminder

Any time you:

* add or modify a custom daisyUI theme
* update the GOYO theme submodule
* change Tailwind or theme-related files

you **must** run:

```bash
just theme-css
```

This ensures the generated CSS stays in sync with your configuration.


### Why this approach?

* Keeps the GOYO theme **self-contained**
* Avoids committing generated CSS in your site repository
* Makes theme updates explicit and predictable
* Matches how GOYO is designed to be extended

---

## Summary

| Goal            | What to do                                  |
| --------------- | ------------------------------------------- |
| Override styles | `static/css/custom-main.css`                |
| Create a theme  | daisyUI generator → `goyo-themes.custom.js` |
| Build CSS       | `just theme-css`                            |
| Update Goyo     | `git submodule update` → `just theme-css`   |
