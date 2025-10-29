# Sales Analytics Dashboard - Responsive Design Specification

## Overview
Desktop-first responsive design approach for the Sales Analytics Dashboard, ensuring optimal user experience across all device sizes while maintaining accessibility and usability standards.

## Breakpoint System

### Tailwind CSS Breakpoints
```css
/* Mobile-first breakpoints (Tailwind default) */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices (tablets) */
lg: 1024px  /* Large devices (desktops) */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

### Project Breakpoints (Desktop-first)
```css
/* Desktop-first approach - default styles target desktop */
/* Desktop: >= 1024px (default, no prefix needed) */
/* Tablet: 768px - 1023px (use md: prefix) */
/* Mobile: < 768px (use sm: prefix and below) */

.responsive-container {
  /* Desktop (default) */
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  
  /* Tablet */
  @media (max-width: 1023px) {
    padding: 16px;
  }
  
  /* Mobile */
  @media (max-width: 767px) {
    padding: 12px;
  }
}
```

---

## Dashboard Layout Responsive Behavior

### Overall Container Structure
```html
<div class="dashboard-container">
  <!-- Desktop: 24px padding, Tablet: 16px, Mobile: 12px -->
  <div class="p-6 md:p-4 sm:p-3 max-w-7xl mx-auto">
    
    <!-- Header Section -->
    <header class="mb-8 md:mb-6 sm:mb-4">
      <!-- Header content adapts per specifications below -->
    </header>
    
    <!-- Main Content Grid -->
    <main class="space-y-8 md:space-y-6 sm:space-y-4">
      <!-- KPI Grid -->
      <!-- Pipeline Chart -->
      <!-- Reps Table -->
      <!-- Activity Feed -->
    </main>
  </div>
</div>
```

---

## Component-Specific Responsive Specifications

### 1. Header Component

#### Desktop (≥ 1024px)
```html
<header class="flex items-center justify-between mb-8">
  <!-- Left: Title and breadcrumb -->
  <div class="flex items-center space-x-4">
    <h1 class="text-2xl font-semibold text-gray-900">Sales Dashboard</h1>
    <nav class="text-sm text-gray-500">
      <!-- Breadcrumb navigation -->
    </nav>
  </div>
  
  <!-- Right: Actions and user menu -->
  <div class="flex items-center space-x-4">
    <button class="btn-secondary">Export Report</button>
    <button class="btn-primary">Quick Actions</button>
    <div class="user-menu"><!-- User avatar and dropdown --></div>
  </div>
</header>
```

#### Tablet (768px - 1023px)
```html
<header class="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 mb-6">
  <!-- Title row -->
  <div class="flex items-center justify-between">
    <h1 class="text-xl font-semibold text-gray-900">Sales Dashboard</h1>
    <div class="md:hidden user-menu"><!-- Mobile user menu --></div>
  </div>
  
  <!-- Actions row -->
  <div class="flex items-center space-x-3 md:space-x-4">
    <button class="btn-secondary text-sm px-3 py-2">Export</button>
    <button class="btn-primary text-sm px-3 py-2">Actions</button>
    <div class="hidden md:block user-menu"><!-- Desktop user menu --></div>
  </div>
</header>
```

#### Mobile (< 768px)
```html
<header class="mb-4">
  <!-- Mobile header with hamburger menu -->
  <div class="flex items-center justify-between mb-4">
    <button class="sm:block md:hidden p-2" aria-label="Open menu">
      <svg class="w-6 h-6"><!-- Hamburger icon --></svg>
    </button>
    <h1 class="text-lg font-semibold text-gray-900">Dashboard</h1>
    <div class="user-menu"><!-- Compact user menu --></div>
  </div>
  
  <!-- Mobile action bar -->
  <div class="flex space-x-2">
    <button class="btn-secondary flex-1 text-sm py-2">Export</button>
    <button class="btn-primary flex-1 text-sm py-2">Actions</button>
  </div>
</header>
```

### 2. KPI Grid Component

#### Desktop Layout (≥ 1024px)
```html
<!-- 4-column grid for desktop -->
<section class="kpi-grid grid grid-cols-4 gap-6 mb-8" aria-label="Key performance indicators">
  
  <div class="kpi-card bg-white rounded-lg border border-gray-200 p-6">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm font-medium text-gray-600">Conversion Rate</p>
        <p class="text-2xl font-bold text-gray-900">8.2%</p>
        <p class="text-sm text-red-600 flex items-center mt-1">
          <span aria-hidden="true">↓</span>
          <span class="ml-1">-4.1% vs last week</span>
        </p>
      </div>
      <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
        <svg class="w-6 h-6 text-blue-600"><!-- Icon --></svg>
      </div>
    </div>
  </div>
  
  <!-- Repeat for other KPIs: Pipeline Value, Activities, Deals at Risk -->
</section>
```

#### Tablet Layout (768px - 1023px)
```html
<!-- 2-column grid for tablet -->
<section class="kpi-grid grid md:grid-cols-2 gap-4 mb-6" aria-label="Key performance indicators">
  
  <div class="kpi-card bg-white rounded-lg border border-gray-200 p-4">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm font-medium text-gray-600">Conversion Rate</p>
        <p class="text-xl font-bold text-gray-900">8.2%</p>
        <p class="text-xs text-red-600 flex items-center mt-1">
          <span aria-hidden="true">↓</span>
          <span class="ml-1">-4.1%</span>
        </p>
      </div>
      <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
        <svg class="w-5 h-5 text-blue-600"><!-- Icon --></svg>
      </div>
    </div>
  </div>
  
  <!-- Additional KPI cards with same structure -->
</section>
```

#### Mobile Layout (< 768px)
```html
<!-- Single column stacked layout -->
<section class="kpi-grid grid sm:grid-cols-1 gap-3 mb-4" aria-label="Key performance indicators">
  
  <!-- Horizontal card layout for mobile -->
  <div class="kpi-card bg-white rounded-lg border border-gray-200 p-4">
    <div class="flex items-center space-x-4">
      <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <svg class="w-5 h-5 text-blue-600"><!-- Icon --></svg>
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-600">Conversion Rate</p>
        <div class="flex items-baseline space-x-2">
          <p class="text-lg font-bold text-gray-900">8.2%</p>
          <p class="text-xs text-red-600 flex items-center">
            <span aria-hidden="true">↓</span>
            <span class="ml-1">-4.1%</span>
          </p>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Additional KPI cards following same pattern -->
</section>

<!-- Alternative: Horizontal scrolling cards for mobile -->
<section class="kpi-grid-mobile sm:block md:hidden mb-4" aria-label="Key performance indicators">
  <div class="flex space-x-3 overflow-x-auto pb-2 scrollbar-thin">
    <div class="kpi-card-compact bg-white rounded-lg border border-gray-200 p-3 flex-shrink-0 w-40">
      <div class="text-center">
        <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
          <svg class="w-4 h-4 text-blue-600"><!-- Icon --></svg>
        </div>
        <p class="text-xs font-medium text-gray-600 mb-1">Conversion</p>
        <p class="text-lg font-bold text-gray-900">8.2%</p>
        <p class="text-xs text-red-600">↓ -4.1%</p>
      </div>
    </div>
    <!-- Additional compact cards -->
  </div>
</section>
```

### 3. Pipeline Chart Component

#### Desktop Layout (≥ 1024px)
```html
<section class="pipeline-section bg-white rounded-lg border border-gray-200 p-6 mb-8">
  <div class="flex items-center justify-between mb-6">
    <div>
      <h2 class="text-lg font-semibold text-gray-900">Pipeline Funnel</h2>
      <p class="text-sm text-gray-600">Lead conversion through stages</p>
    </div>
    <div class="flex items-center space-x-3">
      <select class="form-select">
        <option>Last 30 days</option>
        <option>Last 90 days</option>
      </select>
      <button class="btn-secondary">View Details</button>
    </div>
  </div>
  
  <!-- Full-width chart area -->
  <div class="pipeline-chart h-80">
    <!-- Chart visualization (canvas/svg) -->
    <div class="relative">
      <!-- Funnel stages with horizontal layout -->
      <div class="flex justify-between items-center h-64">
        <!-- Stage representations -->
      </div>
    </div>
  </div>
  
  <!-- Chart legend and metrics -->
  <div class="grid grid-cols-5 gap-4 mt-6 pt-6 border-t border-gray-200">
    <div class="text-center">
      <p class="text-2xl font-bold text-gray-900">1,247</p>
      <p class="text-sm text-gray-600">Leads</p>
    </div>
    <!-- Additional stage metrics -->
  </div>
</section>
```

#### Tablet Layout (768px - 1023px)
```html
<section class="pipeline-section bg-white rounded-lg border border-gray-200 p-4 mb-6">
  <!-- Stacked header for tablet -->
  <div class="mb-4">
    <div class="flex items-center justify-between mb-3">
      <h2 class="text-lg font-semibold text-gray-900">Pipeline Funnel</h2>
      <button class="btn-secondary text-sm px-3 py-1">Details</button>
    </div>
    <div class="flex items-center justify-between">
      <p class="text-sm text-gray-600">Lead conversion stages</p>
      <select class="form-select text-sm">
        <option>30 days</option>
        <option>90 days</option>
      </select>
    </div>
  </div>
  
  <!-- Adjusted chart height for tablet -->
  <div class="pipeline-chart h-64 md:h-56">
    <div class="relative">
      <!-- Compressed funnel layout -->
      <div class="flex justify-between items-center h-full">
        <!-- Responsive stage representations -->
      </div>
    </div>
  </div>
  
  <!-- Compact metrics grid -->
  <div class="grid md:grid-cols-3 gap-3 mt-4 pt-4 border-t border-gray-200">
    <div class="text-center">
      <p class="text-lg font-bold text-gray-900">1,247</p>
      <p class="text-xs text-gray-600">Leads</p>
    </div>
    <!-- Show top 3 metrics on tablet -->
  </div>
</section>
```

#### Mobile Layout (< 768px)
```html
<section class="pipeline-section bg-white rounded-lg border border-gray-200 p-4 mb-4">
  <!-- Mobile header -->
  <div class="flex items-center justify-between mb-4">
    <div>
      <h2 class="text-base font-semibold text-gray-900">Pipeline</h2>
      <p class="text-xs text-gray-600">Conversion stages</p>
    </div>
    <button class="btn-secondary text-xs px-2 py-1">View</button>
  </div>
  
  <!-- Vertical pipeline for mobile -->
  <div class="pipeline-chart-mobile">
    <!-- Switch to vertical/stacked layout -->
    <div class="space-y-3">
      <div class="pipeline-stage bg-blue-50 rounded-lg p-3">
        <div class="flex items-center justify-between">
          <span class="text-sm font-medium">Leads</span>
          <span class="text-lg font-bold text-blue-600">1,247</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div class="bg-blue-600 h-2 rounded-full" style="width: 100%"></div>
        </div>
      </div>
      
      <div class="pipeline-stage bg-green-50 rounded-lg p-3">
        <div class="flex items-center justify-between">
          <span class="text-sm font-medium">Qualified</span>
          <span class="text-lg font-bold text-green-600">423</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div class="bg-green-600 h-2 rounded-full" style="width: 34%"></div>
        </div>
      </div>
      
      <!-- Continue for all stages -->
    </div>
  </div>
  
  <!-- Simplified conversion rate -->
  <div class="mt-4 pt-4 border-t border-gray-200 text-center">
    <p class="text-sm text-gray-600">Overall Conversion</p>
    <p class="text-xl font-bold text-gray-900">8.2%</p>
  </div>
</section>
```

### 4. Reps Table Component

#### Desktop Layout (≥ 1024px)
```html
<section class="reps-section bg-white rounded-lg border border-gray-200 mb-8">
  <!-- Table header -->
  <div class="px-6 py-4 border-b border-gray-200">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-lg font-semibold text-gray-900">Team Performance</h2>
        <p class="text-sm text-gray-600">12 sales representatives</p>
      </div>
      <div class="flex items-center space-x-3">
        <input 
          type="search" 
          placeholder="Search reps..." 
          class="form-input w-64"
          aria-label="Search sales representatives"
        />
        <button class="btn-secondary">Filters</button>
        <button class="btn-primary">Quick Actions</button>
      </div>
    </div>
  </div>
  
  <!-- Full table for desktop -->
  <div class="overflow-x-auto">
    <table class="w-full" role="table" aria-label="Sales representative performance">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Rep Name
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            <button class="flex items-center space-x-1" aria-label="Sort by conversion rate">
              <span>Conversion Rate</span>
              <span aria-hidden="true">↓</span>
            </button>
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Pipeline Value
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Activities
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            At Risk Deals
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <!-- Full row data for desktop -->
      </tbody>
    </table>
  </div>
</section>
```

#### Tablet Layout (768px - 1023px)
```html
<section class="reps-section bg-white rounded-lg border border-gray-200 mb-6">
  <!-- Simplified header for tablet -->
  <div class="px-4 py-3 border-b border-gray-200">
    <div class="flex items-center justify-between mb-3">
      <h2 class="text-lg font-semibold text-gray-900">Team Performance</h2>
      <button class="btn-secondary text-sm px-3 py-1">Filters</button>
    </div>
    <input 
      type="search" 
      placeholder="Search reps..." 
      class="form-input w-full"
      aria-label="Search sales representatives"
    />
  </div>
  
  <!-- Condensed table for tablet -->
  <div class="overflow-x-auto">
    <table class="w-full" role="table">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-4 py-2 text-left text-xs font-medium text-gray-500">
            Rep
          </th>
          <th class="px-4 py-2 text-left text-xs font-medium text-gray-500">
            <button class="flex items-center space-x-1">
              <span>Conv. Rate</span>
              <span aria-hidden="true">↓</span>
            </button>
          </th>
          <th class="px-4 py-2 text-left text-xs font-medium text-gray-500">
            Pipeline
          </th>
          <th class="px-4 py-2 text-left text-xs font-medium text-gray-500">
            Status
          </th>
          <th class="px-4 py-2 text-left text-xs font-medium text-gray-500">
            Actions
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <!-- Condensed row data -->
      </tbody>
    </table>
  </div>
</section>
```

#### Mobile Layout (< 768px)
```html
<section class="reps-section bg-white rounded-lg border border-gray-200 mb-4">
  <!-- Mobile header -->
  <div class="px-4 py-3 border-b border-gray-200">
    <div class="flex items-center justify-between mb-3">
      <h2 class="text-base font-semibold text-gray-900">Team (12)</h2>
      <button class="btn-secondary text-xs px-2 py-1">Filter</button>
    </div>
    <input 
      type="search" 
      placeholder="Search..." 
      class="form-input w-full text-sm"
      aria-label="Search sales representatives"
    />
  </div>
  
  <!-- Card-based layout for mobile -->
  <div class="divide-y divide-gray-200" role="list" aria-label="Sales rep performance cards">
    <div class="p-4" role="listitem" tabindex="0">
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span class="text-sm font-medium text-blue-600">SC</span>
          </div>
          <div>
            <p class="font-medium text-gray-900">Sarah Chen</p>
            <div class="flex items-center space-x-2">
              <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                Needs Coaching
              </span>
            </div>
          </div>
        </div>
        <button class="text-gray-400 hover:text-gray-600" aria-label="View Sarah Chen details">
          <svg class="w-5 h-5"><!-- Chevron right --></svg>
        </button>
      </div>
      
      <!-- Key metrics in grid -->
      <div class="grid grid-cols-3 gap-3 text-center">
        <div>
          <p class="text-lg font-bold text-gray-900">8.2%</p>
          <p class="text-xs text-gray-600">Conv Rate</p>
          <p class="text-xs text-red-600">↓ -4.1%</p>
        </div>
        <div>
          <p class="text-lg font-bold text-gray-900">$185K</p>
          <p class="text-xs text-gray-600">Pipeline</p>
        </div>
        <div>
          <p class="text-lg font-bold text-gray-900">4</p>
          <p class="text-xs text-gray-600">At Risk</p>
        </div>
      </div>
      
      <!-- Quick actions -->
      <div class="flex space-x-2 mt-3">
        <button class="flex-1 btn-secondary text-xs py-1" aria-label="Call Sarah Chen">
          📞 Call
        </button>
        <button class="flex-1 btn-secondary text-xs py-1" aria-label="Schedule 1-on-1 with Sarah">
          📅 1-on-1
        </button>
        <button class="flex-1 btn-secondary text-xs py-1" aria-label="Message Sarah Chen">
          💬 Message
        </button>
      </div>
    </div>
    
    <!-- Additional rep cards following same pattern -->
  </div>
  
  <!-- Load more / pagination for mobile -->
  <div class="px-4 py-3 border-t border-gray-200 text-center">
    <button class="btn-secondary w-full text-sm">Load More (8 remaining)</button>
  </div>
</section>
```

---

## Tailwind CSS Implementation Guide

### Responsive Utility Classes Summary

#### Layout & Spacing
```css
/* Container responsive classes */
.container: p-6 md:p-4 sm:p-3
.margins: mb-8 md:mb-6 sm:mb-4
.gaps: gap-6 md:gap-4 sm:gap-3
.spacing: space-x-4 md:space-x-3 sm:space-x-2

/* Grid responsive classes */
.kpi-grid: grid-cols-4 md:grid-cols-2 sm:grid-cols-1
.table-cols: grid-cols-7 md:grid-cols-5 sm:grid-cols-1
```

#### Typography
```css
/* Heading sizes */
.page-title: text-2xl md:text-xl sm:text-lg
.section-title: text-lg md:text-base sm:text-base
.body-text: text-base md:text-sm sm:text-sm
.caption: text-sm md:text-xs sm:text-xs

/* Font weights */
.primary: font-semibold md:font-medium sm:font-medium
.secondary: font-medium md:font-normal sm:font-normal
```

#### Interactive Elements
```css
/* Button responsive classes */
.btn-primary: px-6 py-3 md:px-4 md:py-2 sm:px-3 sm:py-2
.btn-secondary: px-4 py-2 md:px-3 md:py-1 sm:px-2 sm:py-1
.text-size: text-base md:text-sm sm:text-xs

/* Touch targets (ensure 44px minimum) */
.touch-target: h-12 md:h-10 sm:h-11 /* 48px, 40px, 44px */
```

#### Show/Hide Elements
```css
/* Visibility controls */
.desktop-only: block md:hidden sm:hidden
.tablet-up: block sm:hidden
.mobile-only: hidden md:hidden sm:block
.tablet-only: hidden md:block lg:hidden

/* Responsive navigation */
.nav-desktop: flex md:hidden sm:hidden
.nav-mobile: hidden md:hidden sm:flex
.hamburger: hidden md:hidden sm:block
```

### Custom Responsive Components

#### Responsive Card Component
```html
<!-- Desktop: Full card, Tablet: Condensed, Mobile: Horizontal -->
<div class="
  bg-white rounded-lg border border-gray-200 
  p-6 md:p-4 sm:p-3
  grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1
  gap-6 md:gap-4 sm:gap-3
  items-center sm:items-start
">
  <!-- Card content adapts based on breakpoint -->
</div>
```

#### Responsive Table
```html
<!-- Desktop: Full table, Mobile: Cards -->
<div class="responsive-table">
  <!-- Desktop/Tablet table -->
  <table class="w-full sm:hidden" role="table">
    <!-- Standard table markup -->
  </table>
  
  <!-- Mobile card layout -->
  <div class="hidden sm:block space-y-3" role="list">
    <!-- Card-based representation -->
  </div>
</div>
```

---

## Performance Considerations

### Image and Asset Optimization
```html
<!-- Responsive images -->
<img 
  src="chart-desktop.png" 
  srcset="
    chart-mobile.png 320w,
    chart-tablet.png 768w,
    chart-desktop.png 1024w
  "
  sizes="
    (max-width: 767px) 100vw,
    (max-width: 1023px) 50vw,
    33vw
  "
  alt="Pipeline conversion chart"
  loading="lazy"
/>

<!-- Responsive icons -->
<svg class="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4">
  <!-- Scalable vector icon -->
</svg>
```

### Loading States
```html
<!-- Responsive loading skeletons -->
<div class="loading-skeleton">
  <!-- Desktop: Full skeleton -->
  <div class="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 md:gap-4 sm:gap-3">
    <div class="h-24 md:h-20 sm:h-16 bg-gray-200 rounded animate-pulse"></div>
    <!-- Additional skeleton items -->
  </div>
</div>
```

---

## Accessibility Across Breakpoints

### Focus Management
- Maintain logical tab order across all breakpoints
- Ensure focus indicators scale appropriately
- Provide skip links for mobile navigation

### Touch Targets
- Minimum 44px touch targets on mobile
- Adequate spacing between interactive elements
- Larger tap areas for primary actions

### Screen Reader Support
- Consistent ARIA labels across breakpoints
- Announce layout changes when significant
- Maintain semantic structure regardless of visual layout

### Testing Checklist
- [ ] All interactive elements accessible via keyboard
- [ ] Touch targets meet minimum size requirements
- [ ] Text remains readable at all zoom levels (200%)
- [ ] Content reflows properly without horizontal scrolling
- [ ] Navigation remains functional across all breakpoints
- [ ] Charts and data visualizations have text alternatives
- [ ] Form inputs maintain proper labeling and validation

---

*Document Version: 1.0*  
*Created: October 28, 2025*  
*Project: Sales Analytics Application*  
*Focus: Desktop-First Responsive Design Implementation*