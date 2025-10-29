# Sales Analytics Application - Design System

## Overview
This design system provides the foundation for building a consistent, accessible, and scalable Sales Analytics Application that serves Sales Representatives and Sales Managers across desktop and mobile platforms.

---

## Brand Foundation

### Color Palette
```css
/* Primary Colors */
--primary-blue: #0B5FFF;        /* Primary brand color */
--accent-green: #00C49A;        /* Success, conversion indicators */

/* Neutral Colors */
--gray-50: #F8FAFC;            /* Background light */
--gray-100: #F1F5F9;           /* Background subtle */
--gray-200: #E2E8F0;           /* Border light */
--gray-300: #CBD5E1;           /* Border default */
--gray-400: #94A3B8;           /* Text muted */
--gray-500: #64748B;           /* Text secondary */
--gray-600: #475569;           /* Text primary */
--gray-900: #0F172A;           /* Text emphasis */

/* Semantic Colors */
--success: #10B981;            /* Positive metrics, completed tasks */
--warning: #F59E0B;            /* Attention needed, pending items */
--error: #EF4444;              /* Errors, critical alerts */
--info: #3B82F6;               /* Information, tooltips */
```

### Typography
**Font Family**: Inter (16px base size)
```css
/* Font Weights */
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px - Labels, captions */
--text-sm: 0.875rem;   /* 14px - Body small, secondary text */
--text-base: 1rem;     /* 16px - Body text, buttons */
--text-lg: 1.125rem;   /* 18px - Subheadings */
--text-xl: 1.25rem;    /* 20px - Card titles */
--text-2xl: 1.5rem;    /* 24px - Section headers */
--text-3xl: 1.875rem;  /* 30px - Page titles */
--text-4xl: 2.25rem;   /* 36px - Dashboard headers */

/* Line Heights */
--leading-tight: 1.25;   /* Headlines */
--leading-normal: 1.5;   /* Body text */
--leading-relaxed: 1.625; /* Large text blocks */
```

---

## Component Specifications

### Buttons
```css
/* Primary Button */
.btn-primary {
  background: var(--primary-blue);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: var(--font-medium);
  min-height: 44px; /* Touch target */
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: var(--primary-blue);
  border: 2px solid var(--primary-blue);
  padding: 10px 22px;
  border-radius: 8px;
}

/* Success Button */
.btn-success {
  background: var(--accent-green);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
}
```

### Cards
```css
.card {
  background: white;
  border: 1px solid var(--gray-200);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.card-metric {
  background: white;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  padding: 20px;
  min-height: 120px;
}
```

### Form Elements
```css
.form-input {
  border: 2px solid var(--gray-300);
  border-radius: 8px;
  padding: 12px 16px;
  font-size: var(--text-base);
  min-height: 44px;
}

.form-input:focus {
  border-color: var(--primary-blue);
  outline: 2px solid rgba(11, 95, 255, 0.2);
}

.form-label {
  font-weight: var(--font-medium);
  margin-bottom: 8px;
  color: var(--gray-600);
}
```

---

## Layout System

### Grid Structure
```css
/* Desktop-First Responsive Grid */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.grid-dashboard {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
}

.grid-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

/* Mobile Breakpoints */
@media (max-width: 768px) {
  .grid-dashboard {
    grid-template-columns: 1fr;
  }
  
  .container {
    padding: 0 16px;
  }
}
```

### Spacing Scale
```css
--space-xs: 4px;     /* Tight spacing */
--space-sm: 8px;     /* Small gaps */
--space-md: 16px;    /* Default spacing */
--space-lg: 24px;    /* Section spacing */
--space-xl: 32px;    /* Large sections */
--space-2xl: 48px;   /* Page sections */
--space-3xl: 64px;   /* Hero sections */
```

---

## User Scenario-Based Components

### Sales Rep Mobile Interface
```css
/* Touch-Optimized Navigation */
.mobile-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  border-top: 1px solid var(--gray-200);
  padding: 12px 0;
}

.mobile-nav-item {
  min-height: 56px;
  min-width: 56px;
  padding: 8px;
  border-radius: 12px;
}

/* Quick Action Cards */
.quick-action-card {
  background: linear-gradient(135deg, var(--primary-blue), #2563EB);
  color: white;
  border-radius: 16px;
  padding: 20px;
  min-height: 120px;
  touch-action: manipulation;
}
```

### Sales Manager Dashboard
```css
/* Metric Visualization */
.metric-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  border-left: 4px solid var(--accent-green);
}

.metric-value {
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  color: var(--gray-900);
}

.metric-trend {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}

.trend-positive {
  color: var(--success);
}

.trend-negative {
  color: var(--error);
}
```

---

## Accessibility Standards (WCAG 2.1 AA)

### Color Contrast
- **Normal Text**: Minimum 4.5:1 contrast ratio
- **Large Text**: Minimum 3:1 contrast ratio
- **Interactive Elements**: 3:1 contrast ratio for focus indicators

### Focus Management
```css
.focus-visible {
  outline: 2px solid var(--primary-blue);
  outline-offset: 2px;
}

.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--primary-blue);
  color: white;
  padding: 8px;
  text-decoration: none;
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}
```

### Touch Targets
- Minimum 44px x 44px for all interactive elements
- 8px minimum spacing between touch targets
- Swipe gestures for mobile navigation

### Screen Reader Support
```html
<!-- ARIA Labels for Dashboard Metrics -->
<div role="region" aria-labelledby="metrics-heading">
  <h2 id="metrics-heading">Sales Performance Metrics</h2>
  <div role="group" aria-label="Conversion rate 15.3%, increased by 2.1%">
    <!-- Metric content -->
  </div>
</div>

<!-- Loading States -->
<div aria-live="polite" aria-label="Loading dashboard data">
  <!-- Loading indicator -->
</div>
```

---

## Component States

### Interactive States
```css
/* Hover States */
.btn-primary:hover {
  background: #0A56E6;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(11, 95, 255, 0.3);
}

/* Loading States */
.loading-skeleton {
  background: linear-gradient(90deg, var(--gray-200) 25%, var(--gray-100) 50%, var(--gray-200) 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Error States */
.error-state {
  border: 2px solid var(--error);
  background: rgba(239, 68, 68, 0.05);
}
```

---

## Data Visualization

### Chart Colors
```css
/* Primary Chart Palette */
--chart-primary: var(--primary-blue);
--chart-secondary: var(--accent-green);
--chart-tertiary: #8B5CF6;
--chart-quaternary: #F59E0B;

/* Conversion Funnel */
--funnel-leads: #3B82F6;
--funnel-qualified: #8B5CF6;
--funnel-opportunity: #F59E0B;
--funnel-closed: var(--accent-green);
```

### Performance Indicators
```css
.kpi-positive {
  color: var(--success);
  font-weight: var(--font-semibold);
}

.kpi-negative {
  color: var(--error);
  font-weight: var(--font-semibold);
}

.kpi-neutral {
  color: var(--gray-500);
  font-weight: var(--font-medium);
}
```

---

## Implementation Guidelines

### Performance Considerations
- Lazy load dashboard components below the fold
- Implement virtual scrolling for large data lists
- Use CSS animations over JavaScript for smooth interactions
- Optimize images with WebP format and responsive sizing

### Mobile-First Approach
1. Design for 320px minimum width
2. Use relative units (rem, em, %) for scalability
3. Implement touch-friendly swipe gestures
4. Progressive enhancement for desktop features

### Design Tokens Integration
```javascript
// CSS Custom Properties for dynamic theming
const designTokens = {
  colors: {
    primary: '#0B5FFF',
    accent: '#00C49A',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  }
};
```

---

*Document Version: 1.0*  
*Last Updated: October 28, 2025*  
*Project: Sales Analytics Application*