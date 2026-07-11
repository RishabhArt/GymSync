---
name: Aetheric Athleticism
colors:
  surface: '#0d1515'
  surface-dim: '#0d1515'
  surface-bright: '#333b3b'
  surface-container-lowest: '#080f10'
  surface-container-low: '#151d1e'
  surface-container: '#192122'
  surface-container-high: '#232b2c'
  surface-container-highest: '#2e3637'
  on-surface: '#dce4e4'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dce4e4'
  inverse-on-surface: '#2a3232'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#c2c6db'
  on-secondary: '#2b3040'
  secondary-container: '#414658'
  on-secondary-container: '#b0b4c9'
  tertiary: '#ddffef'
  on-tertiary: '#003829'
  tertiary-container: '#71f1c7'
  on-tertiary-container: '#006d53'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#dee1f7'
  secondary-fixed-dim: '#c2c6db'
  on-secondary-fixed: '#161b2b'
  on-secondary-fixed-variant: '#414658'
  tertiary-fixed: '#79f9ce'
  tertiary-fixed-dim: '#5adcb3'
  on-tertiary-fixed: '#002117'
  on-tertiary-fixed-variant: '#00513d'
  background: '#0d1515'
  on-background: '#dce4e4'
  surface-variant: '#2e3637'
typography:
  hero-display:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
  metric-xl:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: -0.04em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-margin: 24px
  gutter: 16px
  card-padding: 24px
  section-gap: 48px
---

## Brand & Style

The design system is engineered to evoke a sense of "Aetheric Athleticism"—a fusion of high-performance data and premium physical wellness. The target audience consists of tech-forward athletes who value precision, clarity, and an elevated lifestyle. 

The aesthetic draws heavily from **Minimalism** and **Glassmorphism**, specifically referencing the spatial depth found in VisionOS. By utilizing large expansive whitespace (or "darkspace"), the UI feels uncrowded and expensive. Key characteristics include:
- **Spatial Depth:** Using Z-axis layering to separate data visualization from background environments.
- **Luminosity:** Elements should appear to emit a soft glow or reflect ambient light, rather than feeling flat.
- **Precision:** Thin strokes and meticulous typography alignment suggest the accuracy of the underlying AI.
- **Fluidity:** Motion and transitions should mimic physical inertia, providing a tactile feel to digital interactions.

## Colors

This design system utilizes a "Deep Dark" foundation to prioritize contrast and legibility of vibrant bio-metrics. 

- **Primary & Secondary:** Electric Cyan serves as the "action" color for primary buttons and active states, while Deep Navy provides the base canvas depth.
- **Functional Accents:** Colors are semantically assigned to physiological states:
    - **Aqua Mint:** Stability and endurance.
    - **Recovery Purple:** Sleep and muscle repair.
    - **Energy Lime:** High-intensity zones and peak performance.
    - **Coral:** Alerts, heart-rate warnings, or missed goals.
- **Adaptive Surface Logic:** In Dark Mode, surfaces use Onyx and Charcoal. In Light Mode, surfaces transition to pure White with ultra-soft Graphite shadows.
- **Glass Tinting:** Glass components use a 10% opacity white fill with a 40px backdrop blur to maintain legibility over moving backgrounds.

## Typography

The typography strategy emphasizes a hierarchy of performance. 

- **Display & Headlines:** Use **Plus Jakarta Sans** for its modern, slightly rounded geometric forms that echo Apple’s SF Pro Rounded while feeling more contemporary.
- **Body:** **Inter** is used for maximum readability in data-dense areas.
- **Metrics:** **Geist** is utilized for numerical data and labels to provide a "technical" and "monospaced" feel that suggests AI-driven precision.

**Style Rules:**
- **Letter Spacing:** Headlines should have slight negative tracking (-1% to -2%) for a tighter, premium editorial look. 
- **Caps:** Use uppercase Geist for all secondary labels to distinguish them from actionable body text.

## Layout & Spacing

The design system adheres to a strict **8pt Grid System** to ensure mathematical harmony across all screen sizes.

- **Grid Model:** A 12-column fluid grid for desktop and a 4-column grid for mobile.
- **The "Breathe" Principle:** Use generous vertical spacing (`section-gap`) to separate distinct data clusters.
- **Safe Zones:** High-frequency interactions (like start/stop workout) must maintain a minimum 44pt hit target and 24px margin from the screen edge.
- **Adaptation:** On mobile, horizontal card carousels are preferred over vertical lists to preserve vertical "thumb-space" for primary metrics.

## Elevation & Depth

Depth is the primary navigator of hierarchy. This design system eschews traditional heavy shadows in favor of **Tonal Layering** and **Glassmorphism**.

- **Level 0 (Base):** Deep Navy or Onyx.
- **Level 1 (The Glass Plate):** Background blur (40px-60px), 1px solid border (White @ 10% opacity), and a 12% fill (White or Primary Color).
- **Level 2 (Floating Elements):** Elements like "Active Workout" timers use a subtle 0px 10px 30px shadow with a 20% tint of the Primary Cyan to suggest a "glow" rather than a shadow.
- **Depth Masking:** Use radial gradients on the background to create a "spotlight" effect behind the primary content card.

## Shapes

The shape language is defined by **Continuous Curvature** (squicles). 

- **Primary Cards:** Always use a minimum of 24px (`rounded-xl` and above) to create a friendly, approachable high-end feel.
- **Interactive Elements:** Buttons and input fields use 12px-16px radius to feel distinct from the structural containers.
- **Progress Rings:** Use rounded caps for all circular strokes to maintain the soft, futuristic aesthetic.

## Components

### Glass Cards
The signature component. Must feature a `1px` inner-stroke in White at 15% opacity to catch "light" at the edges. Padding is locked to `24px`.

### Progress Rings
Multi-layered concentric rings. Use the **Energy Lime** for the outermost (highest priority) ring. Use a track color of the same hue at 10% opacity.

### Segmented Controls
iOS-native style but with a translucent glass background. The "selected" state should be a solid white or cyan pill that physically slides behind the text.

### Buttons
- **Primary:** Solid Electric Cyan with black text. No shadow, but a subtle outer glow on hover/active.
- **Secondary:** Ghost style with a thin white border and glass blur background.

### Input Fields
Underline style or fully enclosed glass fields. Use **Geist** for input text to reinforce the "data-entry" feel.

### Navigation Bar
A floating "Island" style bottom bar or a top bar with `backdrop-filter: blur(20px)`. Text and icons should be pure white or Primary Cyan when active.