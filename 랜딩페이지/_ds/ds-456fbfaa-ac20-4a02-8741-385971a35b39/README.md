# Apple-Style Design System

A faithful, reusable recreation of Apple's web design language — *"a photography-first interface that turns marketing into a museum gallery."* Edge-to-edge product tiles alternate light and dark canvases, framed by tightly-tracked SF Pro headlines and a single Action Blue accent. UI chrome recedes so the product can speak: no decorative gradients, no shadows on chrome, exactly one drop-shadow in the entire system — under product imagery.

This system gives a design agent everything needed to build on-brand Apple-style interfaces and assets: the type ramp, the color and surface system, spacing/radius/elevation foundations, reusable React component primitives, and a full interactive Apple.com UI kit.

> **Brand & trademark note.** "애플 스타일 / Apple style" is a design-language recreation for reference and prototyping. It ships **no Apple logo, no SF Symbols, and no Apple product photography** — brand marks are neutral placeholders and product renders are gradient stand-ins. Not affiliated with or endorsed by Apple Inc.

---

## Source

This system was distilled from a single, thorough design analysis:

- **GitHub:** [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) — `design-md/apple/DESIGN.md` (analysis of apple.com homepage, environment, store, iPhone 17 Pro buy page, and accessories index).

Explore that repository to deepen or extend this system. The analysis documents tokens, component specs, responsive behavior, and do's/don'ts in far more detail than is reproduced here.

---

## Content Fundamentals

Apple's copy is the verbal equivalent of its whitespace — confident, minimal, and product-reverent.

- **Tone:** Declarative and aspirational, never salesy. Short. Often a single noun phrase as a headline.
- **Casing:** Sentence case everywhere except product names. Headlines are full sentences ending in a period — the period is a deliberate, assertive full-stop ("Think different." "The most powerful iPhone ever."). Never ALL-CAPS, never title-case marketing.
- **Person:** Third-person about the product ("It's the most…"), shifting to second-person "you" only for benefits ("Built for you."). Rarely first-person "we".
- **Structure:** Headline (noun phrase or short claim) → one-line tagline → two tiny CTAs ("Learn more" / "Buy"). That's the whole content unit.
- **Superlatives, earned:** "most powerful," "brightest," "thinnest ever" — used liberally but always attached to a concrete spec.
- **Punctuation rhythm:** The full stop is a design element. Fragments-as-sentences are normal ("Mind-blowing. Head-turning.").
- **No emoji. No exclamation marks** (the period carries the emphasis). No ampersands in body copy.
- **Numbers:** Spelled-out for drama in headlines occasionally, but specs are numeric. Prices read "From $999".

Examples: *"iPhone 17 Pro. The most powerful iPhone ever."* · *"Designed to last."* · *"Smarter. Brighter. Mightier."* · *"From $999 or $41.62/mo. for 24 mo."*

---

## Visual Foundations

**Color.** A single brand accent — **Action Blue `#0066cc`** — carries *every* interactive element (links, pill CTAs, focus). There is no second brand color. Surfaces are pure **white `#fff`**, signature off-white **parchment `#f5f5f7`**, and micro-stepped **near-black tiles** (`#272729 / #2a2a2c / #252527`) with true black `#000` reserved for the global nav and video. One near-black ink **`#1d1d1f`** voices all text on light surfaces. On dark tiles, in-copy links brighten to **Sky Link Blue `#2997ff`** (Action Blue would vanish).

**Type.** SF Pro Display for headlines (≥19px), SF Pro Text for body/UI. The weight ladder is **300 / 400 / 600 / 700 — weight 500 is deliberately absent**. Headlines sit at 600 with **negative letter-spacing** (`-0.28 → -0.374px`) for the signature "Apple tight" cadence. Body runs at **17px, not 16px**, at 1.47 leading. Weight 300 is real but rare (large airy reads, store-hero CTAs). Footer link columns use an intentionally relaxed 2.41 leading.

**Spacing & layout.** 8px base unit; structural layout snaps to 8/12/17/24/32/48. Product tiles carry **80px** vertical section padding and stack **edge-to-edge with zero gap** — the surface-color change IS the divider. Content locks at 980px (text) / 1440px (grids). Tiles are full-bleed; the page is a vertical stack of roughly one-viewport sections.

**Backgrounds.** No gradients, no patterns, no textures. Atmosphere comes from **photography**, never CSS. Rhythm comes from alternating light ↔ dark tiles. Imagery is crisp, neutral-to-warm, photographic-realistic, often shot on a tinted surface that becomes the tile background.

**Elevation.** **Exactly one shadow exists**: `rgba(0,0,0,0.22) 3px 5px 30px`, applied only to product renders resting on a surface — never to cards, buttons, or text. UI elevation comes from (a) surface-color change and (b) `backdrop-filter: saturate(180%) blur(20px)` frosted glass on sticky bars and the sub-nav.

**Borders & corners.** Strict radius grammar with no in-between values: `sm 8px` (compact utility buttons), `md 11px` (rare pearl capsules), `lg 18px` (utility cards), **`pill 9999px`** (CTAs, search, chips — the pill IS the "action" signal). Full-bleed tiles are unrounded (`0`). Hairlines are 1px `#e0e0e0` or `rgba(0,0,0,0.08)`; the secondary-button "border" is a soft ring, not a hard line.

**Cards.** White, 1px hairline, 18px radius, 24px padding, **no shadow by default** — the product image inside carries the only shadow.

**Animation & states.** Restrained. The system-wide press micro-interaction is **`transform: scale(0.95)`** on every button. Apple documents *no hover color shifts* — default and pressed states only. Transitions are short ease fades (~0.18s). No bounces, no decorative looping motion.

**Transparency & blur.** Used functionally, not decoratively: translucent gray control chips (`rgba(210,210,215,0.64)`) over photography, and parchment-at-80% + backdrop blur for floating bars.

---

## Iconography

- **Apple uses SF Symbols** — its proprietary, system-native icon set, which is **not available for web use**. This system therefore ships a small set of **thin-stroke geometric SVG glyphs** (`ui_kits/apple-com/icons.jsx`: search, bag, chevrons, plus, check, sparkle) at stroke ~1.6–1.8 to approximate SF Symbols' light, precise feel. **This is a flagged substitution** — see Caveats.
- **No icon font, no PNG icon sprite** in the source system. Icons are inline SVG.
- **Emoji is never used.** Unicode is used for one affordance: the trailing **"›" chevron** in "Learn more ›" links (rendered as a glyph for fidelity).
- For a closer match in production, consider a thin-stroke CDN set (e.g. **Lucide** at reduced stroke-width) or license SF Symbols for native Apple-platform apps only.

---

## Index / Manifest

**Root**
- `styles.css` — global entry point (consumers link this); `@import` list only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `base.css`.
- `README.md` (this file) · `SKILL.md` — portable Agent-Skill manifest.

**Components** (`components/`) — read via `window.AppleStyleDesignSystem_456fbf`
- `buttons/` — **Button** (primary / secondary / dark / pearl / storeHero), **IconButton**, **TextLink**
- `forms/` — **Input** (pill / rect), **OptionChip** (configurator)
- `surfaces/` — **Card** (utility card), **ProductTile** (full-bleed hero), **Badge**
- `navigation/` — **GlobalNav**, **SubNav** (frosted), **Footer**

Each directory has a `.jsx` + `.d.ts` + `.prompt.md` per component, and one `@dsCard` showcase HTML.

**Foundation cards** (`guidelines/`) — populate the Design System tab: color (accent, light, dark, text), type (display, body, weights), spacing, radius, elevation.

**UI Kit** (`ui_kits/apple-com/`) — interactive home → iPhone buy → store click-through. See its `README.md`.

---

## Using this system

1. Link `styles.css` and use the semantic CSS custom properties (`var(--accent)`, `var(--text-body)`, `var(--surface-dark)`, `var(--radius-pill)`).
2. Compose pages from `ProductTile` stacks — alternate tones for rhythm.
3. Keep the one-accent rule: every "click me" is Action Blue. Reserve the pill for actions. Apply the single shadow to imagery only. Press = `scale(0.95)`.
4. Set headlines in Display at 600 with negative tracking; body at 17px/400.
