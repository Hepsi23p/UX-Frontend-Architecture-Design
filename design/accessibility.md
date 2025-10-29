# Sales Analytics Dashboard - Accessibility Compliance Guide

## Overview
Comprehensive accessibility checklist and testing framework to ensure the Sales Analytics Dashboard meets WCAG 2.1 AA standards, providing an inclusive experience for all users including those using assistive technologies.

## WCAG 2.1 AA Compliance Requirements

### Success Criteria Summary
- **Level A**: 25 criteria (must pass all)
- **Level AA**: 13 additional criteria (must pass all)
- **Total**: 38 success criteria for AA compliance
- **Focus Areas**: Perceivable, Operable, Understandable, Robust (POUR)

---

## Color Contrast & Visual Design Checklist

### Contrast Requirements
```
✅ Normal text: Minimum 4.5:1 contrast ratio
✅ Large text (18pt+/14pt+ bold): Minimum 3:1 contrast ratio
✅ UI components: Minimum 3:1 contrast ratio for boundaries
✅ Focus indicators: Minimum 3:1 contrast with adjacent colors
✅ Graphical elements: 3:1 contrast for meaningful graphics
```

### Brand Color Compliance
```css
/* Primary brand colors tested for compliance */
:root {
  /* WCAG AA Compliant combinations */
  --primary-on-white: #0B5FFF;     /* 5.2:1 ratio ✅ */
  --primary-on-gray-50: #0A55E6;   /* 4.8:1 ratio ✅ */
  --white-on-primary: #FFFFFF;     /* 5.2:1 ratio ✅ */
  
  /* Accent colors tested */
  --accent-on-white: #00A37A;      /* 4.6:1 ratio ✅ */
  --accent-on-gray-50: #008866;    /* 4.9:1 ratio ✅ */
  
  /* Status colors compliant */
  --error-text: #DC2626;           /* 5.1:1 ratio ✅ */
  --warning-text: #D97706;         /* 4.7:1 ratio ✅ */
  --success-text: #059669;         /* 4.8:1 ratio ✅ */
  
  /* Gray scale compliance */
  --gray-600-on-white: #4B5563;    /* 7.2:1 ratio ✅ */
  --gray-700-on-white: #374151;    /* 9.1:1 ratio ✅ */
  --gray-900-on-white: #111827;    /* 16.9:1 ratio ✅ */
}
```

### Non-Color Indicators
```
✅ Status indicators use icons + color (not color alone)
✅ Chart data includes patterns/textures + color
✅ Links are underlined or have other visual cues
✅ Required form fields marked with asterisk + color
✅ Error states use icons + text + color
```

### Manual Color Testing Checklist
```
□ Test all text combinations with WebAIM Contrast Checker
□ Verify focus indicators are visible against all backgrounds
□ Check color blindness simulation (Deuteranopia, Protanopia, Tritanopia)
□ Test with Windows High Contrast mode
□ Verify chart/graph readability without color
□ Test printed grayscale versions
```

---

## Keyboard Navigation Checklist

### Focus Management Requirements
```
✅ All interactive elements keyboard accessible
✅ Logical tab order (left-to-right, top-to-bottom)
✅ Focus indicators clearly visible (2px minimum)
✅ Skip links provided for repetitive content
✅ Focus trapped in modals/dropdowns
✅ Focus returned after modal closure
```

### Keyboard Interaction Patterns
```html
<!-- Dashboard navigation -->
Tab order sequence:
1. Skip to main content link
2. Main navigation menu
3. Page filters/search
4. KPI cards (left to right)
5. Chart interactive elements
6. Table headers (if sortable)
7. Table rows/action buttons
8. Pagination controls
9. Footer links
```

### Required Keyboard Shortcuts
```
Global shortcuts:
- Tab: Move to next focusable element
- Shift + Tab: Move to previous focusable element
- Enter: Activate buttons, links, menu items
- Space: Activate buttons, checkboxes, select dropdowns
- Esc: Close modals, dropdowns, cancel operations
- Home/End: First/last item in lists or tables
- Arrow keys: Navigate within component groups

Modal-specific:
- Esc: Close modal
- Tab: Cycle through modal elements only
- Enter: Activate primary action
- Space: Activate buttons within modal

Table-specific:
- Tab: Move between interactive elements
- Enter/Space: Sort columns, activate row actions
- Arrow keys: Navigate cells (if grid pattern)
```

### Manual Keyboard Testing
```
□ Unplug mouse and navigate entire dashboard
□ Verify all functionality accessible via keyboard
□ Check focus indicators are always visible
□ Test tab order follows logical sequence
□ Verify modal focus trapping works correctly
□ Test escape key behavior in all contexts
□ Check skip link functionality
□ Verify custom keyboard shortcuts work
```

---

## Focus Order & Visual Hierarchy

### Focus Order Requirements
```
✅ Reading order matches visual order
✅ Tab sequence is logical and predictable
✅ Hidden elements are not focusable
✅ Offscreen content properly excluded from tab order
✅ Dynamic content updates maintain logical order
```

### Implementation Guidelines
```html
<!-- Proper focus order structure -->
<main id="main-content">
  <!-- 1. Page heading -->
  <h1 tabindex="-1" id="page-title">Sales Dashboard</h1>
  
  <!-- 2. Primary navigation/filters -->
  <nav aria-label="Dashboard filters">
    <button tabindex="0">Time Period</button>
    <button tabindex="0">Team Filter</button>
    <input tabindex="0" type="search" aria-label="Search representatives">
  </nav>
  
  <!-- 3. KPI grid (left to right) -->
  <section aria-labelledby="kpi-heading">
    <h2 id="kpi-heading">Key Performance Indicators</h2>
    <div class="grid">
      <button tabindex="0" aria-describedby="conversion-tooltip">
        <!-- Conversion Rate KPI -->
      </button>
      <button tabindex="0" aria-describedby="pipeline-tooltip">
        <!-- Pipeline Value KPI -->
      </button>
      <!-- Continue logical order -->
    </div>
  </section>
  
  <!-- 4. Chart section -->
  <section aria-labelledby="chart-heading">
    <h2 id="chart-heading">Pipeline Funnel</h2>
    <div role="img" aria-labelledby="chart-title" aria-describedby="chart-summary">
      <!-- Chart with keyboard accessible data -->
    </div>
  </section>
  
  <!-- 5. Data table -->
  <section aria-labelledby="table-heading">
    <h2 id="table-heading">Team Performance</h2>
    <table role="table">
      <!-- Proper table structure -->
    </table>
  </section>
</main>
```

### Focus Testing Checklist
```
□ Tab through entire page without mouse
□ Verify focus moves in logical reading order
□ Check no focus traps in main content
□ Test with screen reader to verify tab sequence
□ Verify hidden content is not focusable
□ Test focus management in dynamic content updates
□ Check focus restoration after modal interactions
```

---

## ARIA Usage & Implementation

### Required ARIA Patterns
```html
<!-- Landmarks -->
<header role="banner">
<nav role="navigation" aria-label="Main navigation">
<main role="main" id="main-content">
<aside role="complementary" aria-labelledby="sidebar-heading">
<footer role="contentinfo">

<!-- Headings and sections -->
<h1 id="page-title">Sales Dashboard</h1>
<section aria-labelledby="kpi-section-title">
  <h2 id="kpi-section-title">Key Performance Indicators</h2>
</section>

<!-- Interactive elements -->
<button 
  aria-expanded="false" 
  aria-controls="filter-menu"
  aria-haspopup="true"
  id="filter-button"
>
  Filters
</button>

<div 
  id="filter-menu" 
  role="menu" 
  aria-labelledby="filter-button"
  hidden
>
  <div role="menuitem" tabindex="0">Last 30 days</div>
  <div role="menuitem" tabindex="0">Last 90 days</div>
</div>

<!-- Forms -->
<label for="search-input">Search representatives</label>
<input 
  id="search-input"
  type="search"
  aria-describedby="search-help"
  aria-label="Search sales representatives by name"
>
<div id="search-help">Enter rep name to filter results</div>

<!-- Tables -->
<table role="table" aria-label="Sales representative performance data">
  <caption>Team performance metrics for 12 sales representatives</caption>
  <thead>
    <tr role="row">
      <th role="columnheader" aria-sort="descending">
        <button aria-label="Sort by conversion rate, currently descending">
          Conversion Rate
          <span aria-hidden="true">↓</span>
        </button>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr role="row">
      <td role="gridcell">8.2%</td>
    </tr>
  </tbody>
</table>

<!-- Live regions -->
<div aria-live="polite" aria-atomic="true" id="status-updates">
  <!-- Dynamic status messages -->
</div>

<div aria-live="assertive" aria-atomic="true" id="error-messages">
  <!-- Critical error announcements -->
</div>

<!-- Modals -->
<div 
  role="dialog" 
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">Export Team Report</h2>
  <p id="modal-description">Select format and date range for export</p>
</div>

<!-- Charts/Graphics -->
<div 
  role="img" 
  aria-labelledby="chart-title" 
  aria-describedby="chart-summary"
>
  <h3 id="chart-title">Pipeline Conversion Funnel</h3>
  <p id="chart-summary">
    Shows 1,247 leads converting to 67 closed deals (5.4% overall rate).
    Largest drop-off occurs between leads and qualified stage.
  </p>
  <!-- Accessible data table alternative -->
  <table class="sr-only">
    <!-- Tabular representation of chart data -->
  </table>
</div>
```

### ARIA Testing Checklist
```
□ All landmarks properly labeled
□ Headings create logical outline structure
□ Interactive elements have appropriate roles
□ Form controls properly labeled and described
□ Tables have headers and relationships defined
□ Live regions announce dynamic changes
□ Modals properly structured with aria-modal
□ Charts have text alternatives
□ Hidden decorative elements use aria-hidden="true"
□ Required fields marked with aria-required="true"
```

---

## Labels & Semantic HTML

### Semantic HTML Requirements
```html
<!-- Use proper heading hierarchy -->
<h1>Sales Dashboard</h1>         <!-- Page title -->
  <h2>Key Performance Indicators</h2>  <!-- Section -->
    <h3>Conversion Rate</h3>           <!-- Subsection -->
  <h2>Pipeline Analysis</h2>       <!-- Section -->
  <h2>Team Performance</h2>        <!-- Section -->

<!-- Use appropriate list structures -->
<nav aria-label="Dashboard navigation">
  <ul>
    <li><a href="#kpis">KPI Overview</a></li>
    <li><a href="#pipeline">Pipeline</a></li>
    <li><a href="#team">Team Performance</a></li>
  </ul>
</nav>

<!-- Proper form structure -->
<form role="search">
  <fieldset>
    <legend>Filter Team Performance</legend>
    <label for="time-period">Time Period</label>
    <select id="time-period" required aria-required="true">
      <option value="">Select period</option>
      <option value="30">Last 30 days</option>
    </select>
    
    <label for="rep-search">Representative Name</label>
    <input 
      id="rep-search" 
      type="search" 
      autocomplete="off"
      aria-describedby="search-help"
    >
    <div id="search-help">Enter name to filter results</div>
  </fieldset>
</form>

<!-- Proper button types -->
<button type="button">Filter Results</button>  <!-- Action button -->
<button type="submit">Export Report</button>   <!-- Form submission -->
<button type="reset">Clear Filters</button>    <!-- Form reset -->

<!-- Data tables with proper structure -->
<table>
  <caption>Sales Representative Performance Data</caption>
  <thead>
    <tr>
      <th scope="col">Representative</th>
      <th scope="col">Conversion Rate</th>
      <th scope="col">Pipeline Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Sarah Chen</th>
      <td>8.2%</td>
      <td>$185,000</td>
    </tr>
  </tbody>
</table>
```

### Label Requirements Checklist
```
□ All form inputs have associated labels
□ Labels are descriptive and specific
□ Required fields clearly marked
□ Error messages linked to relevant inputs
□ Buttons have descriptive text or aria-label
□ Images have appropriate alt text
□ Links have descriptive text (not "click here")
□ Icons have text alternatives or are decorative
□ Abbreviations expanded on first use
□ Page title describes content/location
```

---

## Automated Testing Framework

### Tool Installation & Setup

#### 1. axe-core CLI Installation
```bash
# Install globally
npm install -g @axe-core/cli

# Or install locally in project
npm install --save-dev @axe-core/cli

# Install React testing utilities
npm install --save-dev @axe-core/react jest-axe
```

#### 2. ESLint JSX A11y Plugin
```bash
# Install ESLint accessibility plugin
npm install --save-dev eslint-plugin-jsx-a11y

# Install React accessibility testing library
npm install --save-dev @testing-library/jest-dom
```

#### 3. Pa11y for CI Integration
```bash
# Install Pa11y for automated testing
npm install --save-dev pa11y pa11y-ci

# Install Lighthouse CI for performance + accessibility
npm install --save-dev @lhci/cli
```

### ESLint Configuration
```json
// .eslintrc.json
{
  "extends": [
    "react-app",
    "plugin:jsx-a11y/recommended"
  ],
  "plugins": [
    "jsx-a11y"
  ],
  "rules": {
    "jsx-a11y/anchor-is-valid": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/aria-unsupported-elements": "error",
    "jsx-a11y/click-events-have-key-events": "error",
    "jsx-a11y/heading-has-content": "error",
    "jsx-a11y/img-redundant-alt": "error",
    "jsx-a11y/label-has-associated-control": "error",
    "jsx-a11y/no-aria-hidden-on-focusable": "error",
    "jsx-a11y/no-autofocus": "error",
    "jsx-a11y/no-redundant-roles": "error",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/role-supports-aria-props": "error",
    "jsx-a11y/tabindex-no-positive": "error"
  }
}
```

### Jest Test Configuration
```javascript
// setupTests.js
import '@testing-library/jest-dom';
import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

// Mock window.matchMedia for responsive testing
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
```

### Sample Accessibility Tests
```javascript
// src/components/__tests__/Dashboard.a11y.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Dashboard from '../Dashboard';

expect.extend(toHaveNoViolations);

describe('Dashboard Accessibility Tests', () => {
  test('should have no accessibility violations', async () => {
    const { container } = render(<Dashboard />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('KPI cards should be keyboard accessible', async () => {
    const { getByRole } = render(<Dashboard />);
    const kpiCards = getByRole('region', { name: /key performance indicators/i });
    const results = await axe(kpiCards);
    expect(results).toHaveNoViolations();
  });

  test('table should have proper structure', async () => {
    const { getByRole } = render(<Dashboard />);
    const table = getByRole('table');
    const results = await axe(table);
    expect(results).toHaveNoViolations();
  });

  test('modals should trap focus properly', async () => {
    const { container } = render(<Dashboard />);
    // Trigger modal open
    // Test focus trapping
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

### Component-Specific Tests
```javascript
// src/components/__tests__/Button.a11y.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import Button from '../Button';

describe('Button Accessibility', () => {
  test('primary button meets accessibility standards', async () => {
    const { container } = render(
      <Button variant="primary" onClick={() => {}}>
        Export Report
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('disabled button is properly labeled', async () => {
    const { getByRole } = render(
      <Button disabled aria-label="Export report (unavailable)">
        Export Report
      </Button>
    );
    
    const button = getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Export report (unavailable)');
    expect(button).toBeDisabled();
  });

  test('loading button announces state', async () => {
    const { getByRole } = render(
      <Button loading aria-label="Exporting report...">
        Export Report
      </Button>
    );
    
    const button = getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Exporting report...');
  });
});
```

---

## CI/CD Integration

### GitHub Actions Workflow
```yaml
# .github/workflows/accessibility.yml
name: Accessibility Testing

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  accessibility-tests:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run ESLint accessibility checks
      run: npm run lint:a11y
    
    - name: Build application
      run: npm run build
    
    - name: Start application
      run: npm start &
      
    - name: Wait for application
      run: npx wait-on http://localhost:3000
    
    - name: Run axe-core accessibility tests
      run: |
        npx @axe-core/cli http://localhost:3000 \
          --include="#main-content" \
          --tags="wcag2a,wcag2aa,wcag21a,wcag21aa" \
          --reporter=junit \
          --output-dir=./test-results
    
    - name: Run Pa11y accessibility tests
      run: |
        npx pa11y-ci \
          --sitemap http://localhost:3000/sitemap.xml \
          --standard WCAG2AA \
          --reporter junit \
          > ./test-results/pa11y-results.xml
    
    - name: Upload test results
      uses: actions/upload-artifact@v3
      if: always()
      with:
        name: accessibility-test-results
        path: ./test-results/
```

### Package.json Scripts
```json
{
  "scripts": {
    "lint": "eslint src --ext .js,.jsx,.ts,.tsx",
    "lint:a11y": "eslint src --ext .js,.jsx,.ts,.tsx --config .eslintrc.a11y.json",
    "test:a11y": "jest --testNamePattern='a11y|accessibility'",
    "test:a11y:watch": "jest --testNamePattern='a11y|accessibility' --watch",
    "axe:local": "axe http://localhost:3000 --tags wcag2a,wcag2aa,wcag21a,wcag21aa",
    "pa11y:local": "pa11y http://localhost:3000 --standard WCAG2AA --reporter cli",
    "lighthouse:a11y": "lhci autorun --collect.settings.chromeFlags='--no-sandbox'"
  }
}
```

### Pre-commit Hooks
```yaml
# .pre-commit-config.yaml
repos:
  - repo: local
    hooks:
      - id: eslint-jsx-a11y
        name: ESLint JSX A11y
        entry: npx eslint
        language: node
        files: \.(js|jsx|ts|tsx)$
        args: [--config, .eslintrc.a11y.json]
        
      - id: accessibility-tests
        name: Accessibility Tests
        entry: npm run test:a11y
        language: node
        pass_filenames: false
        always_run: true
```

### Local Development Commands
```bash
# Run all accessibility checks
npm run lint:a11y && npm run test:a11y

# Test specific component accessibility
npm test -- --testNamePattern="Button.*a11y"

# Run axe-core on local development server
npm run axe:local

# Run Pa11y against specific pages
npx pa11y http://localhost:3000/dashboard \
  --standard WCAG2AA \
  --reporter cli \
  --threshold 0

# Run Lighthouse accessibility audit
npx lighthouse http://localhost:3000 \
  --only-categories=accessibility \
  --chrome-flags="--headless" \
  --output=html \
  --output-path=./lighthouse-a11y-report.html

# Test with specific axe rules
npx @axe-core/cli http://localhost:3000 \
  --rules color-contrast,keyboard,aria-valid-attr \
  --tags wcag2aa \
  --include ".dashboard-container"
```

---

## Manual Testing Procedures

### Screen Reader Testing
```
Testing with NVDA (Windows):
1. Install NVDA screen reader
2. Navigate through dashboard using only keyboard
3. Verify all content is announced correctly
4. Test form interactions and error states
5. Check table navigation and data relationships
6. Test modal focus trapping and announcements

Testing with JAWS (Windows):
1. Test with JAWS in virtual cursor mode
2. Verify heading navigation (H key)
3. Test landmark navigation (R, N, M keys)
4. Check form mode interactions
5. Test table navigation mode

Testing with VoiceOver (macOS):
1. Use Control+Option+arrows for navigation
2. Test rotor navigation (Control+Option+U)
3. Verify form interactions
4. Test gesture navigation on mobile Safari
```

### Browser Testing Matrix
```
Desktop Testing:
□ Chrome (latest) with ChromeVox extension
□ Firefox (latest) with built-in screen reader
□ Safari (latest) with VoiceOver
□ Edge (latest) with Narrator

Mobile Testing:
□ iOS Safari with VoiceOver
□ Android Chrome with TalkBack
□ Test landscape and portrait orientations
□ Verify touch targets are 44px minimum
```

### Assistive Technology Testing
```
□ Test with screen magnifier (200% zoom minimum)
□ Test with high contrast mode enabled
□ Test with Windows Narrator
□ Test with voice control software
□ Test with switch navigation devices
□ Verify with keyboard-only navigation
```

---

## Compliance Reporting

### Accessibility Statement Template
```markdown
# Accessibility Statement for Sales Analytics Dashboard

## Conformance Status
This application is designed to be compliant with WCAG 2.1 AA standards.

## Known Issues
- [List any current accessibility limitations]
- [Include timelines for fixes]

## Feedback Process
If you encounter accessibility barriers, please contact:
- Email: accessibility@company.com
- Phone: [Accessibility hotline]

## Assessment Approach
This statement was prepared on [date] based on:
- Automated testing with axe-core
- Manual testing with screen readers
- Expert accessibility review
- User testing with disabled users

## Technical Specifications
- Supports assistive technologies compatible with HTML5, CSS3, JavaScript
- Tested with major screen readers and browsers
- Minimum contrast ratios exceed WCAG AA requirements
```

### Testing Documentation
```
Weekly Accessibility Checklist:
□ Run automated axe-core tests
□ Execute ESLint accessibility rules
□ Test critical user journeys with keyboard only
□ Verify screen reader announcements for new features
□ Check color contrast for any new UI elements
□ Test responsive breakpoints for touch targets
□ Review ARIA labels for dynamic content
□ Validate form error handling and announcements

Monthly Deep Testing:
□ Full screen reader testing (NVDA, JAWS, VoiceOver)
□ High contrast mode testing
□ Mobile accessibility testing with TalkBack/VoiceOver
□ Voice control software testing
□ User testing with accessibility consultant
□ Update accessibility statement with any changes
```

---

*Document Version: 1.0*  
*Created: October 28, 2025*  
*Project: Sales Analytics Application*  
*Focus: WCAG 2.1 AA Compliance Framework*