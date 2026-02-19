+++
template = "landing.html"
title = "Goyo"

[extra]
version = "v0.1.0"

# Section order configuration - customize the order of landing page sections
# Available sections: "hero", "features", "trust", "easy_command", "showcase", "social_proof", "final_cta"
# If not specified, default order is used: hero -> features -> trust -> easy_command -> showcase -> social_proof -> final_cta
section_order = ["hero", "features", "trust", "easy_command", "showcase", "social_proof", "final_cta"]

[extra.hero]
title = "Welcome to Goyo!"
badge = "Clean Theme, Tranquil Feel"
description = "Inspired by the Korean word \"Goyo\" (고요), meaning calm or serene, Goyo is a Zola theme that aims for simplicity and clean documentation. With Goyo, you can easily create beautiful and practical documentation pages."
image = "/images/landing.webp"
image_mobile = "/images/landing-mobile.webp"
gradient_opacity = 30
image_opacity = 25
cta_buttons = [
    { text = "Get Started", url = "/introduction", style = "primary" },
    { text = "View on GitHub", url = "https://github.com/hahwul/goyo", style = "secondary" },
]

[extra.features_section]
title = "Essential Features"
description = "Clean, minimal, and focused on content"

[[extra.features_section.features]]
title = "Documentation Friendly"
desc = "Provides a clean writing experience for documentation."
icon = "book"

[[extra.features_section.features]]
title = "Simple Design"
desc = "A theme that pursues minimalism."
icon = "minimize"

[[extra.features_section.features]]
title = "Customization and Elegant Landing Page"
desc = "Highly customizable with a beautiful landing page."
icon = "palette"

[[extra.features_section.features]]
title = "SEO Optimized"
desc = "Provides a structure optimized for search engines."
icon = "magnifying-glass-chart"

[[extra.features_section.features]]
title = "Various Shortcodes"
desc = "Offers a variety of useful shortcodes."
icon = "code"

[[extra.features_section.features]]
title = "Dark & Light Mode"
desc = "Supports both dark and light modes."
icon = "circle-half-stroke"

[extra.trust_section]
title = "Tech Stack"
logos = [
    { src = "/resources/zola.svg", alt = "Zola" },
    { src = "/resources/tailwindcss.svg", alt = "Tailwindcss" },
    { src = "/resources/daisyui.svg", alt = "DaisyUI"},
]

[extra.easy_command_section]
title = "Easy Installation"
description = "Get started with Goyo in seconds using your preferred method"

[[extra.easy_command_section.tabs]]
name = "Git Clone"
command = "git clone https://github.com/hahwul/goyo.git themes/goyo"

[[extra.easy_command_section.tabs]]
name = "Git Submodule"
command = "git submodule add https://github.com/hahwul/goyo.git themes/goyo"

[[extra.easy_command_section.tabs]]
name = "Download"
command = "curl -sL https://github.com/hahwul/goyo/archive/refs/heads/main.zip -o goyo.zip"

[[extra.easy_command_section.tabs]]
name = "More"
link = "/get_started/installation"

[extra.showcase_section]
title = "Theme Showcase"
subtitle = "Explore different aspects of Goyo theme"

[[extra.showcase_section.tabs]]
name = "Documentation"
title = "Clean Documentation"
description = "Experience beautiful and readable documentation pages with Goyo's minimalist design approach."
image = "/writing/shortcodes/gallery/images/image5.jpeg"

[[extra.showcase_section.tabs]]
name = "Customization"
title = "Easy Customization"
description = "Customize your site with simple configuration options. Change colors, fonts, and layout with ease."
image = "/writing/shortcodes/gallery/images/image1.jpeg"

[[extra.showcase_section.tabs]]
name = "Multilingual"
title = "Multilingual Support"
description = "Built-in support for multiple languages. Create content in different languages and let users switch between them seamlessly."
image = "/writing/shortcodes/gallery/images/image6.jpeg"

[extra.social_proof_section]
title = "What Our Users Say"
testimonials = [
    { author = "KSG", role = "Security Developer / OWASP Noir", quote = "Without extra tools, it includes practical features like search, multilingual support, and comments out of the box", avatar = "/resources/ksg.jpg" },
    { author = "Lina", role = "Security Engineer", quote = "It's so simple and fast, yet I can apply an incredibly beautiful theme, which I absolutely love! I'm ready to embark on a journey to find the calm in my heart with this theme!", avatar = "/resources/lina.jpg" },
    { author = "Bori Bae", role = "Security Engineer", quote = "The theme is clean and the settings are intuitive, so even first-time users can easily use it!", avatar = "/resources/bori.png" },
]

[extra.final_cta_section]
title = "Contributing"
description = "Goyo is an open-source project made with ❤️. If you want to contribute to this project, please see CONTRIBUTING.md and submit a pull request with your cool content!"
button = { text = "View Contributing Guide", url = "/contributing" }
+++
