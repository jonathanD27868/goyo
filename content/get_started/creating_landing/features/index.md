+++
title = "Features Section"
description = "Display key features in a grid layout with icons and descriptions."
weight = 3
taxonomies = { tags = ["goyo", "landing-page", "features"], categories = ["guide"] }
+++

The features section displays your project's key features in a clean grid layout. Each feature includes a title, description, and optional Font Awesome icon.

## Configuration

```toml
# Configure the section title and description
[extra.features_section]
title = "Essential Features"
description = "Clean, minimal, and focused on content"

# Add individual features
[[extra.features_section.features]]
title = "Documentation Friendly"
desc = "Provides a clean writing experience for documentation."
icon = "book"

[[extra.features_section.features]]
title = "Simple Design"
desc = "A theme that pursues minimalism."
icon = "minimize"

[[extra.features_section.features]]
title = "Fast Performance"
desc = "Built with performance in mind."
icon = "bolt"
```

## Properties

### Section Properties
- **`title`** (optional): Section heading
- **`description`** (optional): Section description

### Feature Properties
- **`title`** (required): Feature name
- **`desc`** (required): Feature description
- **`icon`** (optional): Name of the SVG icon file in `static/icons/` folder without the `.svg` extension (e.g., `book`)

## Icon Usage

You can add icons under `static/icons/` folder or add `font-awesome.min.css` under `static/css/` (resource: [Font Awesome](https://github.com/FortAwesome/Font-Awesome/releases).)  
Browse available Font Awesome icons at [fontawesome.com](https://fontawesome.com/icons).
