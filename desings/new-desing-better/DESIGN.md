---
name: Modern Developer Portfolio
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#464554'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#767586'
  outline-variant: '#c7c4d7'
  surface-tint: '#494bd6'
  primary: '#4648d4'
  on-primary: '#ffffff'
  primary-container: '#6063ee'
  on-primary-container: '#fffbff'
  inverse-primary: '#c0c1ff'
  secondary: '#006591'
  on-secondary: '#ffffff'
  secondary-container: '#39b8fd'
  on-secondary-container: '#004666'
  tertiary: '#904900'
  on-tertiary: '#ffffff'
  tertiary-container: '#b55d00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#c9e6ff'
  secondary-fixed-dim: '#89ceff'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#004c6e'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  h1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.75'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  code:
    fontFamily: monospace
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  section-padding: 80px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The design system is anchored in a "Technical Minimalist" aesthetic. It prioritizes clarity, precision, and high-density information without sacrificing visual breathing room. The brand personality is professional, innovative, and highly focused, aimed at a sophisticated technical audience such as recruiters, CTOs, and fellow engineers. 

The style blends **Minimalism** with **Corporate Modern** influences. It utilizes a vast amount of white space to isolate key projects, while using vibrant indigo accents to signal interactivity and "electric" energy. The interface should feel like a high-end IDE or a premium SaaS dashboard—utility-driven but polished to a mirror finish.

## Colors
The palette is dominated by a clean, paper-white background and deep slate neutrals to ensure maximum readability. The **Electric Indigo** primary color serves as the "source of light" within the interface, used exclusively for primary actions, active states, and critical highlights.

- **Primary (Electric Indigo):** Used for CTA buttons, active navigation links, and progress indicators.
- **Secondary (Cyan/Sky):** Used sparingly for code highlights or secondary tags to provide a tech-forward gradient feel when paired with the indigo.
- **Neutral (Slate):** A range of grays from `#F8FAFC` (background tints) to `#0F172A` (headings) to provide depth and structure.

## Typography
This design system utilizes **Inter** for all UI elements to maintain a utilitarian and systematic feel. The typographic hierarchy is aggressive; large, bold headings are used to create clear entry points, while body text is set with generous line height (1.6x+) to ensure long-form project descriptions remain legible.

Letter spacing is tightened slightly for headings to create a "locked-in" professional look, while labels use increased tracking and uppercase styling to differentiate metadata from content.

## Layout & Spacing
The layout follows a **Fixed Grid** model for desktop, centering content within a 1200px max-width container to prevent line lengths from becoming unreadable on ultrawide monitors. A strict 8px rhythm governs all padding and margins.

Internal layouts use a 12-column grid. For portfolio pieces, content should span 6 or 8 columns to maintain focus, while grid-based project galleries should utilize 4-column spans (3 items per row). Section vertical spacing is generous (80px+) to emphasize the minimalist "gallery" feel.

## Elevation & Depth
The design system employs **Ambient Shadows** to create a sense of organized layers without the heaviness of traditional skeuomorphism. Shadows are highly diffused and use a slight indigo tint (`rgba(99, 102, 241, 0.08)`) rather than pure black to keep the UI feeling "electric" and clean.

- **Level 1 (Flat):** Used for the main background and secondary inputs.
- **Level 2 (Subtle):** Used for cards and tooltips. A 1px border of `#E2E8F0` is often paired with this shadow to define the edge.
- **Level 3 (Elevated):** Used for hover states on project cards, creating a "lifting" effect that signals interactivity.

## Shapes
In line with the request, the primary shape language is defined by a **12px (0.75rem)** corner radius for all major containers and cards. This specific roundedness strikes a balance between the "friendly" nature of fully rounded corners and the "engineered" precision of sharp edges.

Buttons and input fields should follow this 12px standard to maintain consistency, while smaller elements like "chips" or "tags" may use a fully pill-shaped (capsule) radius to distinguish them as secondary metadata.

## Components
- **Buttons:** Primary buttons feature a solid Electric Indigo background with white text. Hover states should involve a slight darkening of the indigo and a subtle lift via shadow. Ghost buttons use a 1px indigo border and no fill.
- **Cards:** Project cards are the core of the portfolio. They must have a 12px border radius, a subtle border, and a Level 2 shadow. On hover, the shadow intensifies and the card shifts 4px upward.
- **Chips/Tags:** Used for "Tech Stack" indicators. These are small, pill-shaped elements with a light indigo tint (`#EEF2FF`) and Indigo text.
- **Input Fields:** Minimalist design with a 1px border. On focus, the border color changes to Indigo and a soft 4px indigo "glow" (outer shadow) appears.
- **Code Blocks:** A specialized component for a developer portfolio. These should use a dark slate background (`#1E293B`) even in light mode, with syntax highlighting that mirrors the indigo/cyan accent palette.
- **Lists:** Bullet points should be replaced by custom SVG icons (like small indigo chevrons) to reinforce the tech-forward aesthetic.