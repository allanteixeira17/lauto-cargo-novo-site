---
name: L'auto Cargo Global
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#44474e'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#495f84'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#001b3d'
  on-primary-container: '#6f84ac'
  inverse-primary: '#b1c7f2'
  secondary: '#a04100'
  on-secondary: '#ffffff'
  secondary-container: '#fe6b00'
  on-secondary-container: '#572000'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#171c20'
  on-tertiary-container: '#7f8489'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b1c7f2'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#31476b'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#ffb693'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#7a3000'
  tertiary-fixed: '#dee3e8'
  tertiary-fixed-dim: '#c2c7cc'
  on-tertiary-fixed: '#171c20'
  on-tertiary-fixed-variant: '#42474c'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1440px
  gutter: 24px
  margin-edge: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The brand personality is authoritative, high-performance, and technologically advanced. It targets enterprise-level logistics partners and high-value cargo clients who prioritize precision and reliability. The UI evokes a sense of "premium motion"—the feeling of a sophisticated global network moving with absolute certainty.

The design style is **Corporate / Modern** with a **Minimalist** foundation. It leverages high-density information layouts balanced by generous white space to maintain a premium feel. Unlike standard logistics platforms, this design system introduces subtle technical motifs: hairline borders, precision-aligned micro-interactions, and a sophisticated layering system that suggests depth and data transparency. The aesthetic is clean and sharp, avoiding excessive softness to maintain a "heavy-duty" professional edge.

## Colors

The palette is anchored by **Deep Navy Blue**, used for core structural elements, navigation, and primary headings to establish immediate trust. **Vibrant Orange** is reserved strictly for high-priority actions, critical status updates, and interactive CTAs, ensuring it retains its "signal" value against the corporate backdrop.

**White and Light Gray** form the canvas, providing a clinical, modern environment for data-heavy interfaces. To achieve a premium touch, a "Cool Slate" neutral is used for secondary text and borders, avoiding pure blacks to keep the interface feeling airy and sophisticated. Gradients should be used sparingly, primarily as a 5% vertical tint on primary buttons to simulate a subtle metallic or high-end plastic finish.

## Typography

This design system utilizes **Inter** for its systematic clarity and modern corporate feel. Headlines are set with tight letter-spacing and bold weights to convey strength and architectural stability. 

**Work Sans** is introduced for labels and data points; its slightly wider apertures and robust construction ensure legibility at small sizes, particularly in tracking numbers, timestamps, and logistics manifests. For premium editorial moments, use the Display-XL weight with a Navy-to-Slate subtle gradient. Maintain high contrast between headlines and body text to ensure a clear information hierarchy.

## Layout & Spacing

The layout utilizes a **Fixed Grid** model for desktop, centered on a 12-column structure with a 1440px maximum width. This provides a controlled, "executive" viewing experience. For dashboard views, a **Fluid Grid** may be used for the internal content area to maximize data visualization real estate.

The spacing rhythm is based on a **4px base unit**. Margins are generous (40px+) to prevent the interface from feeling cluttered, reinforcing the premium positioning. Components should use an "optical alignment" approach where related data points are grouped with tight 8px stacks, while distinct sections are separated by 48px or 64px blocks of negative space to allow the layout to breathe.

## Elevation & Depth

Hierarchy is established through **Ambient Shadows** and **Tonal Layers**. Instead of heavy dropshadows, this design system uses "Precision Shadows"—multi-layered, ultra-low opacity (4-8%) blurs that make cards appear as if they are floating just millimeters above the surface.

Depth is further enhanced by using **Low-Contrast Outlines**. Secondary containers use a 1px border in a light slate color rather than a shadow. High-priority cards (like a "Live Shipment" card) may combine a subtle shadow with a white background to lift it above the light gray workspace. Background blurs are used exclusively for modal overlays and sticky navigation bars to maintain the technological, glass-like precision.

## Shapes

The shape language is defined by **Soft** (0.25rem) corners. This choice strikes a balance between the rigid "sharp" borders associated with traditional industrial logistics and the over-rounded "bubble" aesthetics of consumer apps. 

The resulting "Semi-Sharp" look conveys technological precision and architectural integrity. Buttons and input fields use the base 0.25rem radius, while larger containers like cards may use 0.5rem (rounded-lg) to soften the overall composition. Strictly avoid pill-shaped buttons; rectangles with subtle rounding maintain a more professional, high-performance tone.

## Components

- **Buttons:** Primary buttons are solid Deep Navy with white text. For the "Cargo Action" (e.g., Book Now), use the Vibrant Orange. Buttons feature a 1px inset top border to create a subtle 3D "machined" effect.
- **Input Fields:** Use a white background with a 1px Slate-200 border. On focus, the border shifts to Deep Navy with a 2px outer glow in a translucent navy tint.
- **Cards:** White surfaces with a 1px Light Gray border. Active or hovered cards receive a "Level 1" ambient shadow.
- **Chips/Status Indicators:** Use a "Light Fill" style. For example, a "Delivered" status uses a very pale green background with dark green text and a small 4px circular dot icon.
- **Lists:** Data lists use hairline horizontal dividers and alternating row tints (White / 50% Gray) for high-density legibility.
- **Logistics Specials:**
    - **Timeline/Tracker:** A vertical or horizontal "stepper" using a thin 2px line. Completed stages are Navy, active stages are Orange, and upcoming stages are Light Gray.
    - **Telemetry Gauges:** Small, minimalist circular or bar charts in Navy and Orange to show capacity, fuel, or time-to-destination metrics.