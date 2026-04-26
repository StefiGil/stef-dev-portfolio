---
name: Ethereal Gallery
colors:
  surface: '#fdf7ff'
  surface-dim: '#ded8e0'
  surface-bright: '#fdf7ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f2fa'
  surface-container: '#f2ecf4'
  surface-container-high: '#ece6ee'
  surface-container-highest: '#e6e0e9'
  on-surface: '#1d1b20'
  on-surface-variant: '#494551'
  inverse-surface: '#322f35'
  inverse-on-surface: '#f5eff7'
  outline: '#7a7582'
  outline-variant: '#cbc4d2'
  surface-tint: '#6750a4'
  primary: '#4f378a'
  on-primary: '#ffffff'
  primary-container: '#6750a4'
  on-primary-container: '#e0d2ff'
  inverse-primary: '#cfbcff'
  secondary: '#63597c'
  on-secondary: '#ffffff'
  secondary-container: '#e1d4fd'
  on-secondary-container: '#645a7d'
  tertiary: '#765b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#c9a74d'
  on-tertiary-container: '#503d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#cfbcff'
  on-primary-fixed: '#22005d'
  on-primary-fixed-variant: '#4f378a'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#cdc0e9'
  on-secondary-fixed: '#1f1635'
  on-secondary-fixed-variant: '#4b4263'
  tertiary-fixed: '#ffdf93'
  tertiary-fixed-dim: '#e7c365'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#594400'
  background: '#fdf7ff'
  on-background: '#1d1b20'
  surface-variant: '#e6e0e9'
typography:
  display-2xl:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-xl:
    fontFamily: Inter
    fontSize: 60px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  heading-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  heading-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 0.5rem
  sm: 1rem
  md: 2rem
  lg: 4rem
  xl: 8rem
  gutter: 24px
  container-max: 1440px
---

## Brand & Style

This design system is built for high-end creative professionals who require a digital environment that recedes to let the work speak. The brand personality is disciplined, sophisticated, and confident. It leverages **Minimalism** with a heavy emphasis on cinematic whitespace and rigorous alignment, punctuated by a single high-chroma accent.

The emotional response should be one of "quiet luxury"—a sense of calm, curated space where every element is intentional. The style utilizes ultra-thin borders and large-scale imagery to create a premium, editorial feel reminiscent of high-fashion monographs or modern architectural journals.

## Colors

The palette is rooted in an achromatic foundation to ensure total visual neutrality, allowing project assets to provide the dominant color. 

- **Background & Canvas:** Uses a subtle off-white to reduce eye strain and provide a softer "paper" feel than pure white.
- **Ink & Emphasis:** The primary and foreground colors use a deep, near-black charcoal for maximum legibility and structural weight.
- **The Signature:** A vibrant violet accent is reserved strictly for interactive highlights, call-to-actions, and moments of discovery.
- **Secondary Surfaces:** Used for subtle UI differentiation, such as hover states or metadata backgrounds.

## Typography

The typography system uses **Inter** exclusively to maintain a systematic, utilitarian clarity. The hierarchy is defined by dramatic scale shifts.

Large display headings are tightly tracked to create a "block" visual effect, while body copy is set with generous line heights to ensure a rhythmic, comfortable reading experience. Labels and metadata use increased letter spacing and uppercase styling to provide a distinct visual "anchor" for technical details without competing with the headlines.

## Layout & Spacing

The layout utilizes a **Fixed Grid** model for desktop, centered within the viewport to maintain an editorial balance. A 12-column grid provides the structure, but content should frequently "break" the grid with asymmetric placement to create visual interest.

Whitespace is treated as a core design element, not just a separator. Use the `xl` (128px) spacing unit between major sections to emphasize the "gallery" feel. Project demos should span 8 to 12 columns to ensure they remain the focal point of the page.

## Elevation & Depth

This design system avoids traditional drop shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**. Depth is communicated through the layering of white cards on off-white backgrounds.

- **Primary Depth:** Subtle 1px borders in the `--border` color define the boundaries of interactive areas.
- **Interaction Depth:** On hover, elements may slightly shift their background to `--secondary` or increase border weight, rather than lifting with shadows.
- **Focus:** The accent color creates a "pseudo-elevation" by drawing the eye to the highest priority layer through saturation rather than physical depth.

## Shapes

The shape language is **Soft (0.25rem)**. This slight rounding takes the "edge" off the brutalist tendencies of the grid while maintaining a professional, architectural precision. 

Large-scale media and project cards should use the `rounded-lg` (0.5rem) token to feel substantial and contained. Buttons and small UI inputs should remain strictly at the base `rounded` level to feel sharp and modern.

## Components

### Buttons
Primary buttons are solid `--primary` with `--primary-foreground` text. Secondary buttons use a ghost style with a `--border` stroke and no background. The interaction state for all buttons should involve a transition to the `--accent` color.

### Cards
Cards are the primary vehicle for project demos. They feature a `1px` border, no shadow, and use the `--card` background. The image within the card should have no internal padding, bleeding to the edges of the card container to maximize visual impact.

### Chips & Tags
Used for project categories. These are small, pill-shaped elements using the `--secondary` background with `--foreground` text in the `label-sm` typographic style.

### Input Fields
Inputs are minimalist: a bottom-border only (`2px`) that transforms into the `--accent` color when focused. Label text should float above the line in the `label-sm` style.

### Project Demos
A specialized component for this system. These should be large-format containers with an aspect ratio of 16:10, using a subtle inner-glow or "device frame" treatment to showcase digital work in a high-end context.