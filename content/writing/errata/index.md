+++
title = "Errata & updates"
description = "How to use the errata & updates feature"
weight = 2
template = "page.html"
taxonomies = { tags = ["errata", "syntax", "writing"], categories = ["guide"] }
+++

## Errata Section

Goyo supports an optional **Errata & Updates** section at the end of a page.
This is useful to document corrections, clarifications, or updates made after publication.

The section is **automatically rendered** only when errata entries are defined in the page front-matter.
If no errata is provided, nothing is displayed.

Errata entries are defined per page and are not inherited from sections.


### Basic Usage

Define one or more errata entries using `[[extra.errata]]` in your page front-matter:

```toml
[extra]

[[extra.errata]]
date = "2024-01-25"
message = "Fixed the database port number."
credit = "Thanks to @username for spotting this!"

[[extra.errata]]
date = "2024-01-26"
message = "Clarified step 3."
credit = "Thanks to John Doe."
```

Each entry is displayed as a collapsible item, numbered automatically (`Errata 1`, `Errata 2`, …).


### Optional Long Content

For longer explanations, code snippets, or archived content, you can use the optional `content` field.

Multi-line content must be written using triple quotes (`"""`) and supports Markdown:

````toml
[[extra.errata]]
date = "2024-01-28"
message = "Clarified step 3."
credit = "Thanks to John Doe."
content = """
### Archived Incorrect Content

The previous code used port 3000:

``` rust
const PORT = 3000;
```
"""

````

If `content` is omitted or empty, the errata item will be shown without a dropdown.

### Linking to the Errata Section

You can link to the start of the errata section from anywhere in the page using a standard Markdown link:

```md
See [Errata 1](@/devops/devops.md#errata).
```

To support this, you should provide a fixed anchor at the beginning of the errata section.  
This anchor is placed at the **bottom of the page**, just before the *Errata & Updates* section, allowing links to scroll directly to it.

```html
<span id="errata"></span>
```

#### Why this is required

Zola validates internal links at build time.
If a Markdown link points to an anchor that only exists inside a template (for example, defined in `page.html`), Zola will raise an error.

To avoid this, the errata anchor must be declared **inside the page content itself**, ensuring:

* The link target exists in the Markdown file
* Zola’s link checker passes
* The user is redirected to the start of the errata section

This approach allows safe, explicit references to errata entries without relying on template-only anchors.

### Badge Customization (Light / Dark)

You can customize the appearance of the errata badge using **DaisyUI badge classes**.

Two optional settings are available under `[extra]` in `config.toml`:

```toml
[extra]
errata_badge_light = "badge-soft badge-accent"
errata_badge_dark  = "badge-soft badge-accent"
````

* These values follow DaisyUI’s badge syntax
* Refer to the DaisyUI documentation for available styles:
  [https://daisyui.com/components/badge/](https://daisyui.com/components/badge/)
* If not specified, `badge-soft badge-accent` is used by default


### Behavior Summary

* The errata section is rendered **only if** `page.extra.errata` exists
* Entries are ordered as defined in the front-matter
* Each entry shows:

    * Date
    * Message
    * Optional credit
    * Optional collapsible content
* Badge style automatically adapts to light and dark themes

## Integration with Contribution Hub

The Errata system works best when paired with the **Contribution Hub**.

* **If you use Errata**: You should enable the Contribution Hub (cf. `Configuration > Edit URL & Contribution Hub` doc) in your configuration. This gives your readers a clear path to report the errors you intend to document.
* **Workflow**:
  1.  A reader clicks "Report an Issue" in the Contribution Hub.
  2.  You verify the error and update the content.
  3.  You add an entry to the **Errata** section, crediting the user (see `credit` field above).
