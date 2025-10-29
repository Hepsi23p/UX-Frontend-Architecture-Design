# Sales Analytics Dashboard - Component Documentation

## Overview
This document provides detailed specifications for core components used in the Sales Analytics Dashboard, with emphasis on accessibility, interaction states, and testing requirements to ensure WCAG 2.1 AA compliance.

---

## Button Component

### Props Interface
```typescript
interface ButtonProps {
  // Content
  children: React.ReactNode;
  
  // Variants
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  
  // States
  disabled?: boolean;
  loading?: boolean;
  
  // Interaction
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  
  // Accessibility
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-controls'?: string;
  
  // HTML attributes
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  className?: string;
  tabIndex?: number;
}
```

### Default Values
```typescript
const defaultProps = {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  loading: false,
  tabIndex: 0
};
```

### Visual States
```css
/* Base styles */
.btn-primary {
  /* Default: Primary brand background with white text */
  background-color: var(--color-primary-500);
  color: var(--color-white);
  height: 44px; /* Touch-friendly */
  padding: 0 24px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 150ms ease-out;
}

/* Hover state */
.btn-primary:hover:not(:disabled) {
  background-color: var(--color-primary-600);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(11, 95, 255, 0.3);
}

/* Active/pressed state */
.btn-primary:active:not(:disabled) {
  background-color: var(--color-primary-700);
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(11, 95, 255, 0.2);
}

/* Focus state (keyboard navigation) */
.btn-primary:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(11, 95, 255, 0.2);
}

/* Disabled state */
.btn-primary:disabled {
  background-color: var(--color-gray-300);
  color: var(--color-gray-500);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Loading state */
.btn-primary.loading {
  cursor: wait;
  position: relative;
}

.btn-primary.loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

### Keyboard Behaviors
- **Enter Key**: Activates button action
- **Space Key**: Activates button action  
- **Tab**: Moves focus to next focusable element
- **Shift + Tab**: Moves focus to previous focusable element
- **Escape**: Dismisses associated dropdown/modal (if applicable)

### ARIA Roles & Labels
```html
<!-- Basic button -->
<button type="button" role="button" aria-label="Export team report">
  Export Report
</button>

<!-- Toggle button -->
<button 
  type="button" 
  role="button" 
  aria-pressed="false" 
  aria-label="Toggle auto-refresh"
>
  Auto Refresh
</button>

<!-- Button controlling expandable content -->
<button 
  type="button" 
  role="button" 
  aria-expanded="false" 
  aria-controls="dropdown-menu"
  aria-haspopup="true"
>
  Filter Options
</button>

<!-- Loading button -->
<button 
  type="button" 
  role="button" 
  aria-label="Saving report..." 
  aria-disabled="true"
  aria-busy="true"
>
  <span aria-hidden="true">Saving...</span>
</button>
```

### Accessibility Tests
**Automated Tests (axe-core rules):**
- `button-name`: Buttons must have discernible text
- `color-contrast`: Text contrast ratio ≥ 4.5:1
- `focus-order-semantics`: Focus order follows DOM order
- `keyboard`: Interactive elements are keyboard accessible
- `aria-valid-attr-value`: ARIA attributes have valid values
- `aria-required-attr`: Required ARIA attributes are present

**Manual Tests:**
- Keyboard navigation works without mouse
- Screen reader announces button purpose clearly
- Focus indicator is visible at minimum 3:1 contrast
- Touch target minimum 44x44px on mobile
- Loading/disabled states are announced properly

---

## RepsTable Component

### Props Interface
```typescript
interface RepsTableProps {
  // Data
  data: RepPerformanceData[];
  
  // Sorting
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
  onSort?: (column: string) => void;
  
  // Interaction
  onRepClick?: (repId: string) => void;
  onQuickAction?: (repId: string, action: string) => void;
  
  // States
  loading?: boolean;
  error?: string | null;
  
  // Display
  itemsPerPage?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  
  // Accessibility
  'aria-label'?: string;
  'aria-describedby'?: string;
  caption?: string;
}

interface RepPerformanceData {
  id: string;
  name: string;
  conversionRate: number;
  conversionTrend: { direction: 'up' | 'down' | 'neutral'; value: string };
  pipelineValue: string;
  activitiesThisWeek: number;
  dealsAtRisk: number;
  status: 'needs-coaching' | 'watch' | 'excelling' | 'on-track';
  quickActions: string[];
}
```

### Default Values
```typescript
const defaultProps = {
  sortBy: 'conversionRate',
  sortDirection: 'desc' as const,
  loading: false,
  error: null,
  itemsPerPage: 10,
  currentPage: 1,
  'aria-label': 'Sales representative performance data'
};
```

### Visual States
```css
/* Table container */
.reps-table {
  background: white;
  border: 1px solid var(--color-gray-200);
  border-radius: 12px;
  overflow: hidden;
}

/* Header row */
.table-header {
  background-color: var(--color-gray-50);
  border-bottom: 1px solid var(--color-gray-200);
}

/* Sortable column headers */
.sortable-header {
  cursor: pointer;
  transition: background-color 150ms ease-out;
}

.sortable-header:hover {
  background-color: var(--color-gray-100);
}

.sortable-header:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: -2px;
}

/* Data rows */
.table-row {
  border-bottom: 1px solid var(--color-gray-200);
  transition: background-color 150ms ease-out;
}

.table-row:hover {
  background-color: var(--color-gray-50);
}

.table-row:focus-within {
  background-color: var(--color-primary-50);
  outline: 2px solid var(--color-primary-500);
  outline-offset: -2px;
}

/* Status indicators */
.status-needs-coaching {
  color: var(--color-error-600);
  background-color: var(--color-error-50);
  border: 1px solid var(--color-error-200);
}

.status-watch {
  color: var(--color-warning-600);
  background-color: var(--color-warning-50);
  border: 1px solid var(--color-warning-200);
}

.status-excelling {
  color: var(--color-success-600);
  background-color: var(--color-success-50);
  border: 1px solid var(--color-success-200);
}

/* Loading state */
.table-loading {
  opacity: 0.6;
  pointer-events: none;
}

.loading-skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}
```

### Keyboard Behaviors
- **Tab/Shift+Tab**: Navigate between interactive elements (sortable headers, action buttons)
- **Enter/Space**: Activate sort on column headers, trigger row actions
- **Arrow Keys**: Navigate between cells in grid navigation mode
- **Home/End**: Jump to first/last sortable column
- **Page Up/Page Down**: Navigate pagination (if implemented)
- **Escape**: Cancel any active sorting or filtering operations

### ARIA Roles & Labels
```html
<!-- Table structure -->
<div role="region" aria-labelledby="table-heading" aria-describedby="table-description">
  <h3 id="table-heading">Sales Representative Performance</h3>
  <p id="table-description">
    Performance metrics for 12 sales representatives, sortable by conversion rate, pipeline value, and activities.
  </p>
  
  <table role="table" aria-label="Sales rep performance data">
    <caption class="sr-only">
      Sales team performance metrics with sorting and quick actions
    </caption>
    
    <!-- Sortable headers -->
    <thead>
      <tr role="row">
        <th 
          role="columnheader" 
          aria-sort="descending"
          tabindex="0"
          aria-label="Rep name, not sortable"
        >
          Name
        </th>
        <th 
          role="columnheader" 
          aria-sort="descending"
          tabindex="0"
          aria-label="Conversion rate, currently sorted descending, activate to sort ascending"
        >
          Conversion Rate
          <span aria-hidden="true">▼</span>
        </th>
        <!-- Additional headers... -->
      </tr>
    </thead>
    
    <!-- Data rows -->
    <tbody>
      <tr role="row" tabindex="0" aria-labelledby="rep-1-name" aria-describedby="rep-1-metrics">
        <td role="gridcell">
          <span id="rep-1-name">Sarah Chen</span>
        </td>
        <td role="gridcell" id="rep-1-metrics">
          <span aria-label="8.2 percent conversion rate, decreased by 4.1 percent">
            8.2% ▼ -4.1%
          </span>
        </td>
        <!-- Additional cells... -->
        <td role="gridcell">
          <button 
            aria-label="Call Sarah Chen"
            title="Call Sarah Chen"
          >
            📞
          </button>
          <button 
            aria-label="Schedule 1-on-1 with Sarah Chen"
            title="Schedule 1-on-1"
          >
            📅
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Mobile card alternative -->
<div role="list" aria-label="Sales rep performance cards" class="md:hidden">
  <div role="listitem" tabindex="0" aria-labelledby="card-1-name" aria-describedby="card-1-details">
    <h4 id="card-1-name">Sarah Chen</h4>
    <p id="card-1-details">8.2% conversion rate, $185K pipeline, 4 deals at risk</p>
    <!-- Action buttons... -->
  </div>
</div>
```

### Accessibility Tests
**Automated Tests (axe-core rules):**
- `table-headers`: Data tables have headers
- `td-headers-attr`: Table cells reference header cells
- `th-has-data-cells`: Table headers have associated data cells
- `table-duplicate-name`: Tables don't have duplicate captions/summaries
- `scope-attr-valid`: Scope attributes are used correctly
- `aria-sort`: Sort state is properly indicated
- `color-contrast`: All text meets contrast requirements
- `keyboard`: All interactive elements are keyboard accessible

**Manual Tests:**
- Screen reader announces table structure and relationships
- Sort state changes are announced
- Row selection/navigation works with keyboard only
- Status indicators have non-color differentiators
- Mobile card view maintains same accessibility features
- Focus management during loading states

---

## Modal Component

### Props Interface
```typescript
interface ModalProps {
  // Visibility
  isOpen: boolean;
  onClose: () => void;
  
  // Content
  title: string;
  children: React.ReactNode;
  
  // Actions
  primaryAction?: {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'success' | 'error';
    loading?: boolean;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  
  // Behavior
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  preventScroll?: boolean;
  
  // Size
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  
  // Accessibility
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  role?: 'dialog' | 'alertdialog';
  
  // Advanced
  initialFocus?: React.RefObject<HTMLElement>;
  returnFocus?: React.RefObject<HTMLElement>;
}
```

### Default Values
```typescript
const defaultProps = {
  closeOnOverlayClick: true,
  closeOnEscape: true,
  preventScroll: true,
  size: 'md' as const,
  role: 'dialog' as const
};
```

### Visual States
```css
/* Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: var(--z-index-modal);
  
  /* Animation */
  opacity: 0;
  transition: opacity 300ms ease-out;
}

.modal-overlay.open {
  opacity: 1;
}

/* Modal container */
.modal-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.95);
  background: white;
  border-radius: 12px;
  box-shadow: var(--elevation-modal);
  max-height: 90vh;
  max-width: 90vw;
  overflow-y: auto;
  z-index: var(--z-index-modal);
  
  /* Animation */
  transition: transform 300ms ease-out, opacity 300ms ease-out;
  opacity: 0;
}

.modal-container.open {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}

/* Focus trap */
.modal-container:focus {
  outline: none;
}

/* Size variants */
.modal-sm { width: 400px; }
.modal-md { width: 500px; }
.modal-lg { width: 600px; }
.modal-xl { width: 800px; }
.modal-full { width: 95vw; height: 95vh; }

/* Header */
.modal-header {
  padding: 24px 24px 16px 24px;
  border-bottom: 1px solid var(--color-gray-200);
}

.modal-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-gray-900);
  margin: 0;
}

.modal-close-button {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 150ms ease-out;
}

.modal-close-button:hover {
  background-color: var(--color-gray-100);
}

.modal-close-button:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

/* Body */
.modal-body {
  padding: 16px 24px 24px 24px;
  color: var(--color-gray-700);
  line-height: 1.5;
}

/* Footer */
.modal-footer {
  padding: 16px 24px 24px 24px;
  border-top: 1px solid var(--color-gray-200);
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
```

### Keyboard Behaviors
- **Escape**: Closes modal (if `closeOnEscape` is true)
- **Tab**: Cycles focus within modal (focus trap)
- **Shift + Tab**: Reverse cycles focus within modal
- **Enter**: Activates focused button/element
- **Space**: Activates focused button (if applicable)

### Focus Management
```typescript
// Focus trap implementation
const focusableElements = [
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'a[href]',
  '[tabindex]:not([tabindex="-1"])'
].join(', ');

// Initial focus management
useEffect(() => {
  if (isOpen) {
    // Save current focus
    const activeElement = document.activeElement as HTMLElement;
    setReturnFocus(activeElement);
    
    // Set initial focus
    if (initialFocus?.current) {
      initialFocus.current.focus();
    } else {
      const firstFocusable = modalRef.current?.querySelector(focusableElements) as HTMLElement;
      firstFocusable?.focus();
    }
    
    // Prevent body scroll
    if (preventScroll) {
      document.body.style.overflow = 'hidden';
    }
  }
  
  return () => {
    if (preventScroll) {
      document.body.style.overflow = '';
    }
  };
}, [isOpen]);
```

### ARIA Roles & Labels
```html
<!-- Modal structure -->
<div 
  role="dialog" 
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
  tabindex="-1"
>
  <!-- Header -->
  <header>
    <h2 id="modal-title">Export Team Report</h2>
    <button 
      type="button"
      aria-label="Close dialog"
      onClick={onClose}
    >
      ✕
    </button>
  </header>
  
  <!-- Body -->
  <div id="modal-description">
    <p>Select the format and date range for your team performance report.</p>
    <!-- Form content... -->
  </div>
  
  <!-- Footer -->
  <footer>
    <button type="button" onClick={onClose}>
      Cancel
    </button>
    <button 
      type="submit"
      aria-describedby="export-status"
      disabled={isLoading}
    >
      {isLoading ? 'Exporting...' : 'Export Report'}
    </button>
    <div id="export-status" aria-live="polite" aria-atomic="true">
      {statusMessage}
    </div>
  </footer>
</div>

<!-- Alert dialog variant -->
<div 
  role="alertdialog" 
  aria-modal="true"
  aria-labelledby="alert-title"
  aria-describedby="alert-description"
>
  <h2 id="alert-title">Delete Sales Data</h2>
  <p id="alert-description">
    Are you sure you want to delete this sales representative's data? 
    This action cannot be undone.
  </p>
  <button type="button">Cancel</button>
  <button type="button" data-danger="true">Delete</button>
</div>
```

### Accessibility Tests
**Automated Tests (axe-core rules):**
- `aria-dialog-name`: Dialog has accessible name
- `focus-order-semantics`: Focus order is logical
- `keyboard`: All controls are keyboard accessible
- `aria-hidden-focus`: Hidden elements don't receive focus
- `color-contrast`: All text meets contrast requirements
- `aria-valid-attr-value`: ARIA attributes have valid values

**Manual Tests:**
- Focus is trapped within modal when open
- Focus returns to trigger element when closed
- Escape key closes modal appropriately
- Screen reader announces modal opening/closing
- Background content is not accessible when modal is open
- Modal is properly labeled and described
- Loading states are announced to screen readers
- Form validation errors are announced clearly

---

## Cross-Component Accessibility Guidelines

### Color and Contrast
- Text contrast minimum 4.5:1 for normal text
- Text contrast minimum 3:1 for large text (18pt+ or 14pt+ bold)
- Interactive element contrast minimum 3:1 for boundaries
- Focus indicators minimum 3:1 contrast with background

### Touch Targets
- Minimum 44x44px for touch targets on mobile
- Minimum 8px spacing between adjacent touch targets
- Ensure targets don't overlap or create accidental activation

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Focus indicators must be clearly visible
- Focus order should follow logical reading order
- Skip links provided for repetitive navigation

### Screen Reader Support
- Meaningful names for all interactive elements
- Status changes announced via live regions
- Form errors clearly associated with inputs
- Data tables properly structured with headers

### Testing Automation
```typescript
// Example test setup for axe-core
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

// Component accessibility test
test('Button component should have no accessibility violations', async () => {
  const { container } = render(
    <Button variant="primary" aria-label="Test button">
      Click me
    </Button>
  );
  
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

// Integration test with multiple components
test('Dashboard with table and modals should be accessible', async () => {
  const { container } = render(<DashboardLayout />);
  
  const results = await axe(container, {
    rules: {
      'color-contrast': { enabled: true },
      'keyboard': { enabled: true },
      'focus-order-semantics': { enabled: true },
      'aria-valid-attr-value': { enabled: true }
    }
  });
  
  expect(results).toHaveNoViolations();
});
```

---

*Document Version: 1.0*  
*Created: October 28, 2025*  
*Project: Sales Analytics Application*  
*Focus: Accessibility-First Component Design*