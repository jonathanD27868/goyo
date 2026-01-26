module.exports = {
    "goyo-dark": {
        "color-scheme": "dark",

        /* Ashen monochrome (matches old-main night overrides) */
        "--color-primary": "#9ca3af", /* 156 163 175 */
        "--color-secondary": "#6b7280", /* 107 114 128 */
        "--color-accent": "#94a3b8", /* 148 163 184 */
        "--color-neutral": "#1e293b", /* 30 41 59 */

        "--color-base-100": "#0f172a", /* 15 23 42 */
        "--color-base-200": "#1e293b", /* 30 41 59 */
        "--color-base-300": "#334155", /* 51 65 85 */
        "--color-base-content": "#e2e8f0", /* 226 232 240 */

        "--color-info": "#64748b", /* 100 116 139 */
        "--color-success": "#6b7280", /* 107 114 128 */
        "--color-warning": "#a1a1aa", /* 161 161 170 */
        "--color-error": "#7f1d1d", /* 127 29 29 */

        /* content colors (kept close to old look) */
        "--color-primary-content": "#111827",
        "--color-secondary-content": "#f8fafc",
        "--color-accent-content": "#0f172a",
        "--color-neutral-content": "#f1f5f9",
        "--color-info-content": "#0f172a",
        "--color-success-content": "#0f172a",
        "--color-warning-content": "#0f172a",
        "--color-error-content": "#fee2e2",

        /* radius tokens (keep your current feel) */
        "--radius-selector": "0.5rem",
        "--radius-field": "0.375rem",
        "--radius-box": "0.5rem",

        /* OPTIONAL: theme-specific helper vars for gradients (used below) */
        "--goyo-bg-from": "#0f172a",
        "--goyo-bg-to": "#1e293b",
        "--goyo-hero-from": "#0f172a",
        "--goyo-hero-mid": "#1e293b",
        "--goyo-hero-to": "#334155",
    },
    "goyo-light": {
        "color-scheme": "light",

        /* Lofi-ish (matches old-main lofi overrides) */
        "--color-primary": "#2563eb", /* 37 99 235 */
        "--color-secondary": "#4b5563", /* 75 85 99 */
        "--color-accent": "#4f46e5", /* 79 70 229 */
        "--color-neutral": "#f3f4f6", /* 243 244 246 */

        "--color-base-100": "#ffffff",
        "--color-base-200": "#f8fafc",
        "--color-base-300": "#f1f5f9",
        "--color-base-content": "#111827",

        "--color-info": "#3b82f6",
        "--color-success": "#22c55e",
        "--color-warning": "#f59e0b",
        "--color-error": "#ef4444",

        "--color-primary-content": "#ffffff",
        "--color-secondary-content": "#ffffff",
        "--color-accent-content": "#ffffff",
        "--color-neutral-content": "#111827",
        "--color-info-content": "#ffffff",
        "--color-success-content": "#052e16",
        "--color-warning-content": "#111827",
        "--color-error-content": "#ffffff",

        "--radius-selector": "0.5rem",
        "--radius-field": "0.375rem",
        "--radius-box": "0.5rem",

        /* OPTIONAL helper vars */
        "--goyo-bg-from": "#ffffff",
        "--goyo-bg-to": "#f8fafc",
        "--goyo-hero-from": "#f8fafc",
        "--goyo-hero-mid": "#e2e8f0",
        "--goyo-hero-to": "#cbd5e1",
    },
    "my-theme": {
        "color-scheme": "light",

        "--color-base-100": "oklch(97% 0.021 166.113)",
        "--color-base-200": "oklch(95% 0.052 163.051)",
        "--color-base-300": "oklch(90% 0.093 164.15)",
        "--color-base-content": "oklch(37% 0.077 168.94)",

        "--color-primary": "oklch(86% 0.005 56.366)",
        "--color-primary-content": "oklch(98% 0.001 106.423)",

        "--color-secondary": "oklch(62% 0.194 149.214)",
        "--color-secondary-content": "oklch(98% 0.018 155.826)",

        "--color-accent": "oklch(60% 0.118 184.704)",
        "--color-accent-content": "oklch(98% 0.014 180.72)",

        "--color-neutral": "oklch(59% 0.145 163.225)",
        "--color-neutral-content": "oklch(97% 0.021 166.113)",

        "--color-info": "oklch(78% 0.154 211.53)",
        "--color-info-content": "oklch(30% 0.056 229.695)",

        "--color-success": "oklch(76% 0.177 163.223)",
        "--color-success-content": "oklch(26% 0.051 172.552)",

        "--color-warning": "oklch(85% 0.199 91.936)",
        "--color-warning-content": "oklch(28% 0.066 53.813)",

        "--color-error": "oklch(70% 0.191 22.216)",
        "--color-error-content": "oklch(25% 0.092 26.042)",

        "--radius-selector": "0.25rem",
        "--radius-field": "0rem",
        "--radius-box": "0.5rem",

        "--size-selector": "0.25rem",
        "--size-field": "0.25rem",

        "--border": "1px",
        "--depth": "1",
        "--noise": "1"
    }
};