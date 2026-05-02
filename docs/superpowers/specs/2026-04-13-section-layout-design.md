# Section Layout Design
_Date: 2026-04-13_

## Goal

- **Desktop (≥ 993px):** Every section fills exactly one viewport height. Clicking a nav link makes only that section visible on screen.
- **Responsive (< 993px):** Clean, consistent spacing between sections. No full-screen requirement.
- **Z-Fold fix:** Revert the `height: 30rem` workaround on `.i-right` and use `overflow: hidden` on `.intro` in the responsive breakpoint instead — cleanly clips the overflowing floating badge.

---

## Desktop Changes (≥ 993px, base styles)

All sections get `min-height: 100vh` so they fill the screen. All inter-section `margin-top` / `margin-bottom` values are removed — they create gaps that break the full-screen layout. Each section centers its content vertically.

| File | Current | Change |
|------|---------|--------|
| `Intro.css` | `height: 90vh` | `min-height: calc(100vh - 64px)` (accounts for fixed 64px navbar) |
| `Services.css` | `min-height: 70vh; margin: 5rem auto` | `min-height: 100vh; margin: 0 auto` |
| `Experience.css` | `height: 85vh; margin-top: 8rem; margin-bottom: 4rem` | `min-height: 100vh; margin: 0` |
| `Hobbies.css` | `height: 50rem; margin-top: 2rem; scroll-margin-top: 10px` | `min-height: 100vh; margin: 0; scroll-margin-top: 64px` |
| `Portfolio.css` | `height: auto; margin-top: 10rem; padding-bottom: 6rem` | `min-height: 100vh; margin: 0 auto; padding: 4rem 0` |
| `Testimonial.css` | `height: 80vh; margin-top: 2rem` | `min-height: 100vh; margin: 0` |
| `Contact.css` | `min-height: 60vh; margin-top: 6rem` | `min-height: 100vh; margin: 0; justify-content: center` |

All sections that don't already have `scroll-margin-top: 64px` get it added so nav anchor clicks land just below the navbar.

---

## Responsive Changes (each section's existing breakpoint)

Remove `min-height: 100vh` from all responsive media queries. Remove `margin-top` / `margin-bottom` inter-section gaps. Ensure every section has `padding-top: 4rem` in its responsive block so there's a consistent gap from the section above. Bottom padding stays per-section (some need extra room for their content, e.g. Contact has dog images that need space). Set `height: auto` everywhere.

Sections to update (responsive block only):
- `Services.css` (max-width: 993px) — remove `min-height: 100vh`; `margin: 0 auto`; `padding-top: 4rem`
- `Experience.css` (max-width: 768px) — remove `min-height: 100vh`; `margin: 0 auto`; `padding-top: 4rem`
- `Hobbies.css` (max-width: 962px) — remove `min-height: 100vh`; `margin: 0 auto`; `padding-top: 4rem`
- `Portfolio.css` (max-width: 900px) — remove `min-height: 100vh`; `margin-top: 0`; `padding-top: 4rem`
- `Testimonial.css` (max-width: 780px) — remove `min-height: 100vh`; `margin: 0 auto`; `padding-top: 4rem`
- `Contact.css` (max-width: 768px) — remove `min-height: 100vh`; `margin-top: 0`; keep existing bottom padding

---

## Z-Fold (882px) Fix

**Problem:** The "Scalable Systems" floating badge in `.i-right` is absolutely positioned at `top: 30rem` inside a `height: 26rem` container. After `transform: scale(0.8)`, it visually extends ~26px beyond the container. On a Z-Fold (~882 × 900px), the intro's content height exceeds its `min-height`, so there's no buffer — the badge bleeds into the Services section.

**Fix:**
1. In `Intro.css` at `max-width: 962px`: revert `.i-right` height from `30rem` → `26rem`.
2. In `Intro.css` at `max-width: 962px`: add `overflow: hidden` to `.intro`. This clips any content that escapes the intro's layout bounds. On taller viewports the badge stays within bounds and is unaffected; on Z-Fold viewports where the intro is content-sized it gets clipped cleanly.

---

## What Is Not Changing

- Footer: not full-screen, keeps its wave/auto-height layout.
- All section internal layouts, colors, animations — untouched.
- 480px breakpoint overrides — kept as-is.
- Navbar — no changes.
