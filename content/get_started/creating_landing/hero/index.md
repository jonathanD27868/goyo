+++
title = "Hero Section"
description = "Configure the main banner at the top of your landing page."
weight = 2
taxonomies = { tags = ["goyo", "landing-page", "hero"], categories = ["guide"] }
+++

The hero section is the main banner displayed at the top of your landing page. It includes a title, optional badge, description, background image, and call-to-action buttons.

## Configuration

```toml
[extra.hero]
title = "Welcome to Goyo!"
badge = "Clean Theme, Tranquil Feel"
description = "A simple and clean Zola theme for documentation."
image = "/images/landing.jpg"                # Background image
image_mobile = "/images/landing-mobile.webp" # Smaller background image for mobile
gradient_opacity = 20                        # Opacity of the animated gradient background (0-100, default: 20)
image_opacity = 20                           # Opacity of the background image (0-100, default: 20)
cta_buttons = [
    { text = "Get Started", url = "/get-started/installation/", style = "primary" },
    { text = "View on GitHub", url = "https://github.com/your/repo", style = "secondary" },
]
```

## Properties

- **`title`** (required): Main heading text
- **`badge`** (optional): Small badge text displayed above the title
- **`description`** (required): Descriptive text below the title
- **`image`** (optional): Path to background image
- **`image_mobile`** (optional): Path to smaller background image for mobile (@media max-width: 576px)
- **`gradient_opacity`** (optional): Opacity of the animated gradient background. Valid values: 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100 (default: 20)
- **`image_opacity`** (optional): Opacity of the background image. Valid values: 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100 (default: 20)
- **`cta_buttons`** (optional): Array of call-to-action buttons
  - `text`: Button label
  - `url`: Link destination
  - `style`: Button style (`primary` or `secondary`)
