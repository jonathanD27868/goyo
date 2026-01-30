+++
title = "Configuration"
description = "Learn how to configure Goyo."
weight = 4
sort_by = "weight"
taxonomies = { tags = ["goyo", "configuration", "customization"], categories = ["guide"] }

[extra]
toc_expand = true
+++

Configure Goyo theme in `config.toml`.

## Design & Branding

### Logo

Configure your site's logo using the structured format:

```toml
[extra.logo]
text = "Goyo"                              # Text when no logo image
image_path = "images/goyo.png"             # Default logo image path
image_padding = "5px"                      # Optional padding
dark_image_path = "images/goyo-dark.png"   # Logo for dark theme (optional)
light_image_path = "images/goyo-light.png" # Logo for light theme (optional)
```

**Theme-specific logos:** When you specify `dark_image_path` and/or `light_image_path`, the logo will automatically switch when users toggle between dark and light themes. If not specified, the `image_path` will be used for both themes.

**Legacy format (still supported):**
```toml
[extra]
logo_text = "Goyo"                    # Text when no image
logo_image_path = "images/goyo.png"   # Logo image path
logo_image_padding = "5px"            # Optional padding
```

### Footer

```toml
[extra]
footer_html = "Powered by <a href='https://www.getzola.org'>Zola</a>"
```

### Favicon

Configure favicon settings using the structured format. Default path is `/icons/` for all favicon files:

```toml
[extra.favicon]
base_path = "/icons/"                              # Base path for all favicon files (default: /icons/)
favicon_96x96 = "/icons/favicon-96x96.png"         # Override path for 96x96 PNG favicon
favicon_svg = "/icons/favicon.svg"                 # Override path for SVG favicon
favicon_ico = "/icons/favicon.ico"                 # Override path for ICO favicon
apple_touch_icon = "/icons/apple-touch-icon.png"   # Override path for Apple touch icon
site_webmanifest = "/icons/site.webmanifest"       # Override path for site manifest
```

Place your favicon files in `static/icons/` directory:
- `favicon-96x96.png` - 96x96 PNG favicon
- `favicon.svg` - SVG favicon
- `favicon.ico` - ICO favicon
- `apple-touch-icon.png` - 180x180 Apple touch icon
- `site.webmanifest` - Web app manifest file

**Generated HTML:**
```html
<link rel="icon" type="image/png" href="/icons/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
<link rel="shortcut icon" href="/icons/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
<link rel="manifest" href="/icons/site.webmanifest" />
```

## SEO & Social

### Thumbnail

```toml
[extra]
default_thumbnail = "images/default_thumbnail.jpg"
```

### Twitter

Configure Twitter meta tags using the structured format:

```toml
[extra.twitter]
site = "@hahwul"
creator = "@hahwul"
```

**Legacy format (still supported):**
```toml
[extra]
twitter_site = "@hahwul"
twitter_creator = "@hahwul"
```

### Google Tag

```toml
[extra]
gtag = "G-XXXXXXXXXX"
```

## Navigation & UI

### Theme

Configure theme settings using the structured format:

```toml
[extra.theme]
colorset = "dark"           # Options: "dark" or "light"
brightness = "normal"       # Common brightness: "darker", "normal", "lighter"
dark_brightness = "darker"  # Override brightness for dark theme (optional)
light_brightness = "normal" # Override brightness for light theme (optional)
disable_toggle = false      # Hides dark/light mode toggle
```

**Per-theme brightness:** You can set `dark_brightness` and `light_brightness` to use different brightness levels for each theme. If not specified, the common `brightness` value will be used for both themes.

{{ image_diff(src1="images/dark.png" src2="images/light.png" alt="Dark and Light") }}

{{ carousel(images=["images/darker.png", "images/normal.png", "images/lighter.png"]) }}

**Legacy format (still supported):**
```toml
[extra]
default_colorset = "dark"
brightness = "normal"
disable_theme_toggle = false
```

### Font

Configure font settings using the structured format:

```toml
[extra.font]
enabled = true
name = "MyCustomFont"
path = "fonts/mycustomfont.woff"
```

Default: **Pretendard** (optimized for Korean and English)

**Google Fonts:**
```toml
[extra.font]
enabled = true
name = "Roboto"
path = "https://fonts.googleapis.com/css2?family=Roboto&display=swap"
```

**Legacy format (still supported):**
```toml
[extra]
custom_font_enabled = true
custom_font_name = "MyCustomFont"
custom_font_path = "fonts/mycustomfont.woff"
```

### Sidebar

Configure sidebar settings using the structured format:

```toml
[extra.sidebar]
expand_depth = 2         # 1-5, default expansion depth
disable_root_hide = false # Show sidebar on landing page
enable_desktop_menu = false # integrate the navigation into the sidebar
```

{{ image_diff(src1="/images/side-home.jpg", src2="/images/wide-home.jpg", alt="goyo") }}

**Legacy format (still supported):**
```toml
[extra]
sidebar_expand_depth = 2
disable_root_sidebar_hide = false
```

### Navigation

```toml
[extra]
nav = [
    { name = "Documents", url = "/introduction", type = "url", icon = "fa-solid fa-book" },
    { name = "GitHub", url = "https://github.com/hahwul/goyo", type = "url" },
    { name = "Links", type = "dropdown", members = [
        { name = "Blog", url = "https://www.hahwul.com", type = "url" },
    ] },
]

# Language-specific (optional)
nav_ko = [
    { name = "문서", url = "/ko/introduction", type = "url" },
]
```

### Language Aliases

Configure language display names using the structured format:

```toml
[extra.lang]
aliases = { en = "English", ko = "한국어", ja = "日本語" }
```

**Legacy format (still supported):**
```toml
[extra]
lang_aliases = { en = "English", ko = "한국어", ja = "日本語" }
```

### Language Configuration

Configure RTL (Right-to-Left) language support:

```toml
[extra.lang]
rtl = ["ar", "he"]  # List of RTL languages
```

## Content & Sharing

### Edit URL

```toml
[extra]
edit_url = "https://github.com/hahwul/goyo/edit/main"
```

Adds "Edit this page" link to each page.

### Share Buttons

Configure share button settings using the structured format:

```toml
[extra.share]
copy_url = true  # Copy URL button
x = true         # Share on X button
```

**Legacy format (still supported):**
```toml
[extra]
enable_copy_url = true
enable_share_x = true
```

### Comments

```toml
[extra.comments]
enabled = true
system = "giscus"  # or "utterances"
repo = "hahwul/goyo"
repo_id = "R_kgDOPHnqwg"
category = "General"
category_id = "DIC_kwDOPHnqws4CspmC"
```
