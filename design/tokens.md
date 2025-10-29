# Sales Analytics Application - Design Tokens

## Overview
This document defines the design tokens for the Sales Analytics Application. Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values to maintain a scalable and consistent visual system.

---

## Color Tokens

### Primary Brand Colors
```css
:root {
  /* Primary Brand */
  --color-primary-50: #EBF4FF;
  --color-primary-100: #DBEAFE;
  --color-primary-200: #BFDBFE;
  --color-primary-300: #93C5FD;
  --color-primary-400: #60A5FA;
  --color-primary-500: #0B5FFF;  /* Primary brand color */
  --color-primary-600: #0A56E6;
  --color-primary-700: #1D4ED8;
  --color-primary-800: #1E40AF;
  --color-primary-900: #1E3A8A;
  
  /* Accent Green */
  --color-accent-50: #ECFDF5;
  --color-accent-100: #D1FAE5;
  --color-accent-200: #A7F3D0;
  --color-accent-300: #6EE7B7;
  --color-accent-400: #34D399;
  --color-accent-500: #00C49A;  /* Accent brand color */
  --color-accent-600: #059669;
  --color-accent-700: #047857;
  --color-accent-800: #065F46;
  --color-accent-900: #064E3B;
}
```

### Semantic Colors
```css
:root {
  /* Success States */
  --color-success-50: #F0FDF4;
  --color-success-100: #DCFCE7;
  --color-success-200: #BBF7D0;
  --color-success-300: #86EFAC;
  --color-success-400: #4ADE80;
  --color-success-500: #10B981;  /* Success primary */
  --color-success-600: #059669;
  --color-success-700: #047857;
  --color-success-800: #065F46;
  --color-success-900: #064E3B;
  
  /* Warning States */
  --color-warning-50: #FFFBEB;
  --color-warning-100: #FEF3C7;
  --color-warning-200: #FDE68A;
  --color-warning-300: #FCD34D;
  --color-warning-400: #FBBF24;
  --color-warning-500: #F59E0B;  /* Warning primary */
  --color-warning-600: #D97706;
  --color-warning-700: #B45309;
  --color-warning-800: #92400E;
  --color-warning-900: #78350F;
  
  /* Error States */
  --color-error-50: #FEF2F2;
  --color-error-100: #FEE2E2;
  --color-error-200: #FECACA;
  --color-error-300: #FCA5A5;
  --color-error-400: #F87171;
  --color-error-500: #EF4444;  /* Error primary */
  --color-error-600: #DC2626;
  --color-error-700: #B91C1C;
  --color-error-800: #991B1B;
  --color-error-900: #7F1D1D;
  
  /* Info States */
  --color-info-50: #EFF6FF;
  --color-info-100: #DBEAFE;
  --color-info-200: #BFDBFE;
  --color-info-300: #93C5FD;
  --color-info-400: #60A5FA;
  --color-info-500: #3B82F6;  /* Info primary */
  --color-info-600: #2563EB;
  --color-info-700: #1D4ED8;
  --color-info-800: #1E40AF;
  --color-info-900: #1E3A8A;
}
```

### Neutral Colors
```css
:root {
  /* Gray Scale */
  --color-gray-50: #F8FAFC;   /* Background light */
  --color-gray-100: #F1F5F9;  /* Background subtle */
  --color-gray-200: #E2E8F0;  /* Border light */
  --color-gray-300: #CBD5E1;  /* Border default */
  --color-gray-400: #94A3B8;  /* Text muted */
  --color-gray-500: #64748B;  /* Text secondary */
  --color-gray-600: #475569;  /* Text primary */
  --color-gray-700: #334155;  /* Text emphasis */
  --color-gray-800: #1E293B;  /* Text strong */
  --color-gray-900: #0F172A;  /* Text maximum */
  
  /* Pure Colors */
  --color-white: #FFFFFF;
  --color-black: #000000;
}
```

---

## Spacing Tokens

### Base Spacing Scale (4px base unit)
```css
:root {
  /* Spacing Scale */
  --space-0: 0px;         /* 0 */
  --space-1: 4px;         /* 1 unit */
  --space-2: 8px;         /* 2 units */
  --space-3: 12px;        /* 3 units */
  --space-4: 16px;        /* 4 units - Base */
  --space-5: 20px;        /* 5 units */
  --space-6: 24px;        /* 6 units */
  --space-8: 32px;        /* 8 units */
  --space-10: 40px;       /* 10 units */
  --space-12: 48px;       /* 12 units */
  --space-16: 64px;       /* 16 units */
  --space-20: 80px;       /* 20 units */
  --space-24: 96px;       /* 24 units */
  --space-32: 128px;      /* 32 units */
  --space-40: 160px;      /* 40 units */
  --space-48: 192px;      /* 48 units */
  --space-56: 224px;      /* 56 units */
  --space-64: 256px;      /* 64 units */
}
```

### Semantic Spacing
```css
:root {
  /* Component Spacing */
  --space-xs: var(--space-1);     /* 4px - Tight spacing */
  --space-sm: var(--space-2);     /* 8px - Small gaps */
  --space-md: var(--space-4);     /* 16px - Default spacing */
  --space-lg: var(--space-6);     /* 24px - Section spacing */
  --space-xl: var(--space-8);     /* 32px - Large sections */
  --space-2xl: var(--space-12);   /* 48px - Page sections */
  --space-3xl: var(--space-16);   /* 64px - Hero sections */
  
  /* Layout Spacing */
  --space-container-padding: var(--space-6);     /* 24px */
  --space-section-gap: var(--space-8);           /* 32px */
  --space-component-gap: var(--space-4);         /* 16px */
  --space-element-gap: var(--space-2);           /* 8px */
}
```

---

## Typography Tokens

### Font Families
```css
:root {
  /* Font Stacks */
  --font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-family-mono: 'SF Mono', Monaco, Inconsolata, 'Roboto Mono', 'Source Code Pro', monospace;
}
```

### Font Sizes (16px base)
```css
:root {
  /* Font Size Scale */
  --font-size-xs: 0.75rem;      /* 12px - Labels, captions */
  --font-size-sm: 0.875rem;     /* 14px - Body small, secondary text */
  --font-size-base: 1rem;       /* 16px - Body text, buttons */
  --font-size-lg: 1.125rem;     /* 18px - Subheadings */
  --font-size-xl: 1.25rem;      /* 20px - Card titles */
  --font-size-2xl: 1.5rem;      /* 24px - Section headers */
  --font-size-3xl: 1.875rem;    /* 30px - Page titles */
  --font-size-4xl: 2.25rem;     /* 36px - Dashboard headers */
  --font-size-5xl: 3rem;        /* 48px - Hero text */
  --font-size-6xl: 3.75rem;     /* 60px - Display text */
}
```

### Font Weights
```css
:root {
  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-normal: 400;     /* Default body text */
  --font-weight-medium: 500;     /* Emphasis text */
  --font-weight-semibold: 600;   /* Subheadings */
  --font-weight-bold: 700;       /* Headings */
  --font-weight-extrabold: 800;  /* Display text */
}
```

### Line Heights
```css
:root {
  /* Line Heights */
  --line-height-none: 1;         /* 1.0 - Tight headlines */
  --line-height-tight: 1.25;     /* 1.25 - Headlines */
  --line-height-snug: 1.375;     /* 1.375 - Subheadings */
  --line-height-normal: 1.5;     /* 1.5 - Body text */
  --line-height-relaxed: 1.625;  /* 1.625 - Large text blocks */
  --line-height-loose: 2;        /* 2.0 - Captions */
}
```

---

## Border Radius Tokens

```css
:root {
  /* Border Radius */
  --radius-none: 0px;
  --radius-sm: 4px;              /* Small elements */
  --radius-default: 6px;         /* Default buttons, inputs */
  --radius-md: 8px;              /* Cards, containers */
  --radius-lg: 12px;             /* Large cards */
  --radius-xl: 16px;             /* Modal, major containers */
  --radius-2xl: 20px;            /* Hero sections */
  --radius-3xl: 24px;            /* Large hero sections */
  --radius-full: 9999px;         /* Pills, avatars */
}
```

---

## Elevation Tokens (Box Shadows)

```css
:root {
  /* Shadow/Elevation Scale */
  --elevation-none: none;
  --elevation-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);                                    /* Subtle hint */
  --elevation-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);  /* Small elements */
  --elevation-default: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* Default cards */
  --elevation-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);    /* Raised elements */
  --elevation-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);  /* Modals */
  --elevation-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);                              /* Major overlays */
  --elevation-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.4);                             /* Maximum depth */
  
  /* Inner Shadows */
  --elevation-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);                          /* Inset elements */
  --elevation-inner-lg: inset 0 4px 6px 0 rgba(0, 0, 0, 0.1);                       /* Deep inset */
}
```

---

## Z-Index Scale

```css
:root {
  /* Z-Index Scale */
  --z-index-hide: -1;
  --z-index-auto: auto;
  --z-index-base: 0;
  --z-index-docked: 10;          /* Docked elements */
  --z-index-dropdown: 1000;      /* Dropdown menus */
  --z-index-sticky: 1100;        /* Sticky elements */
  --z-index-banner: 1200;        /* Banners */
  --z-index-overlay: 1300;       /* Overlays */
  --z-index-modal: 1400;         /* Modal dialogs */
  --z-index-popover: 1500;       /* Popovers */
  --z-index-skiplink: 1600;      /* Skip links */
  --z-index-toast: 1700;         /* Toast notifications */
  --z-index-tooltip: 1800;       /* Tooltips */
}
```

---

## Animation Tokens

```css
:root {
  /* Animation Duration */
  --duration-instant: 0ms;
  --duration-fast: 150ms;         /* Quick transitions */
  --duration-normal: 300ms;       /* Standard transitions */
  --duration-slow: 500ms;         /* Slow transitions */
  --duration-slower: 1000ms;      /* Very slow transitions */
  
  /* Animation Easing */
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

---

## Breakpoint Tokens

```css
:root {
  /* Responsive Breakpoints */
  --breakpoint-xs: 320px;        /* Small phones */
  --breakpoint-sm: 640px;        /* Large phones */
  --breakpoint-md: 768px;        /* Tablets */
  --breakpoint-lg: 1024px;       /* Small desktops */
  --breakpoint-xl: 1280px;       /* Large desktops */
  --breakpoint-2xl: 1536px;      /* Extra large screens */
}
```

---

## Component-Specific Tokens

### Form Elements
```css
:root {
  /* Form Elements */
  --form-input-height: 44px;               /* Touch-friendly height */
  --form-input-padding-x: var(--space-4);  /* 16px horizontal padding */
  --form-input-padding-y: var(--space-3);  /* 12px vertical padding */
  --form-input-border-width: 2px;
  --form-input-border-radius: var(--radius-default);
  --form-input-focus-ring-width: 2px;
  --form-input-focus-ring-offset: 2px;
}
```

### Buttons
```css
:root {
  /* Button Tokens */
  --button-height-sm: 36px;      /* Small buttons */
  --button-height-default: 44px; /* Default buttons (touch-friendly) */
  --button-height-lg: 52px;      /* Large buttons */
  --button-padding-x-sm: var(--space-3);   /* 12px */
  --button-padding-x-default: var(--space-6); /* 24px */
  --button-padding-x-lg: var(--space-8);   /* 32px */
  --button-border-radius: var(--radius-default);
  --button-border-width: 2px;
}
```

### Cards
```css
:root {
  /* Card Tokens */
  --card-padding: var(--space-6);          /* 24px */
  --card-padding-sm: var(--space-4);       /* 16px */
  --card-border-radius: var(--radius-lg);  /* 12px */
  --card-border-width: 1px;
  --card-elevation: var(--elevation-sm);
  --card-elevation-hover: var(--elevation-default);
}
```

---

## Usage Instructions

### 1. Global CSS Import
Add these tokens to your global CSS file:

```css
/* globals.css or app.css */
@import './tokens.css';

/* Apply base styles */
html {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  color: var(--color-gray-900);
}

body {
  background-color: var(--color-gray-50);
  margin: 0;
  padding: 0;
}

/* Focus styles for accessibility */
*:focus-visible {
  outline: var(--form-input-focus-ring-width) solid var(--color-primary-500);
  outline-offset: var(--form-input-focus-ring-offset);
}
```

### 2. Component Usage Examples
```css
/* Using tokens in component styles */
.dashboard-card {
  padding: var(--card-padding);
  border-radius: var(--card-border-radius);
  box-shadow: var(--card-elevation);
  background-color: var(--color-white);
  border: var(--card-border-width) solid var(--color-gray-200);
  transition: box-shadow var(--duration-fast) var(--ease-out);
}

.dashboard-card:hover {
  box-shadow: var(--card-elevation-hover);
}

.primary-button {
  height: var(--button-height-default);
  padding-left: var(--button-padding-x-default);
  padding-right: var(--button-padding-x-default);
  background-color: var(--color-primary-500);
  color: var(--color-white);
  border-radius: var(--button-border-radius);
  font-weight: var(--font-weight-medium);
  transition: background-color var(--duration-fast) var(--ease-out);
}

.primary-button:hover {
  background-color: var(--color-primary-600);
}
```

### 3. CSS Custom Properties with Fallbacks
```css
/* Always provide fallbacks for critical properties */
.component {
  color: var(--color-gray-900, #0F172A);
  font-size: var(--font-size-base, 1rem);
  padding: var(--space-md, 16px);
}
```

---

*Document Version: 1.0*  
*Created: October 28, 2025*  
*Project: Sales Analytics Application*  
*Token System: CSS Custom Properties*