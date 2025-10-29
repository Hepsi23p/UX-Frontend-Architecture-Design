/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom color palette based on design tokens
      colors: {
        // Primary brand colors
        primary: {
          50: '#EBF4FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#0B5FFF', // Primary brand color
          600: '#0A56E6',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        // Accent colors
        accent: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#00C49A', // Accent brand color
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        // Success states
        success: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        // Warning states
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        // Error states
        error: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
        // Info states  
        info: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        // Enhanced gray scale
        gray: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      
      // Custom spacing scale (4px base unit)
      spacing: {
        '0': '0px',
        '1': '4px',     // 1 unit
        '2': '8px',     // 2 units  
        '3': '12px',    // 3 units
        '4': '16px',    // 4 units - Base
        '5': '20px',    // 5 units
        '6': '24px',    // 6 units
        '7': '28px',    // 7 units
        '8': '32px',    // 8 units
        '9': '36px',    // 9 units
        '10': '40px',   // 10 units
        '11': '44px',   // 11 units (touch target)
        '12': '48px',   // 12 units
        '14': '56px',   // 14 units
        '16': '64px',   // 16 units
        '20': '80px',   // 20 units
        '24': '96px',   // 24 units
        '28': '112px',  // 28 units
        '32': '128px',  // 32 units
        '36': '144px',  // 36 units
        '40': '160px',  // 40 units
        '44': '176px',  // 44 units
        '48': '192px',  // 48 units
        '52': '208px',  // 52 units
        '56': '224px',  // 56 units
        '60': '240px',  // 60 units
        '64': '256px',  // 64 units
        '72': '288px',  // 72 units
        '80': '320px',  // 80 units
        '96': '384px',  // 96 units
        
        // Semantic spacing aliases
        'xs': '4px',    // Extra small
        'sm': '8px',    // Small
        'md': '16px',   // Medium (base)
        'lg': '24px',   // Large
        'xl': '32px',   // Extra large
        '2xl': '48px',  // 2x Extra large
        '3xl': '64px',  // 3x Extra large
      },

      // Font family tokens
      fontFamily: {
        'primary': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'mono': ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', 'monospace'],
        // Aliases
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },

      // Font size scale (16px base)
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.25' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.375' }],    // 14px
        'base': ['1rem', { lineHeight: '1.5' }],        // 16px - Base
        'lg': ['1.125rem', { lineHeight: '1.5' }],      // 18px
        'xl': ['1.25rem', { lineHeight: '1.5' }],       // 20px
        '2xl': ['1.5rem', { lineHeight: '1.25' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '1.25' }],    // 30px
        '4xl': ['2.25rem', { lineHeight: '1.25' }],     // 36px
        '5xl': ['3rem', { lineHeight: '1' }],           // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }],        // 60px
      },

      // Font weight scale
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },

      // Line height scale
      lineHeight: {
        'none': '1',
        'tight': '1.25',
        'snug': '1.375', 
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
      },

      // Border radius scale
      borderRadius: {
        'none': '0px',
        'sm': '4px',
        'DEFAULT': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
        'full': '9999px',
      },

      // Box shadow / elevation scale
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'DEFAULT': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'md': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'inner-lg': 'inset 0 4px 6px 0 rgba(0, 0, 0, 0.1)',
        'none': 'none',
        
        // Semantic elevation aliases
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'modal': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'dropdown': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },

      // Z-index scale
      zIndex: {
        'hide': '-1',
        'auto': 'auto',
        'base': '0',
        'docked': '10',
        'dropdown': '1000',
        'sticky': '1100', 
        'banner': '1200',
        'overlay': '1300',
        'modal': '1400',
        'popover': '1500',
        'skiplink': '1600',
        'toast': '1700',
        'tooltip': '1800',
      },

      // Animation duration
      transitionDuration: {
        'instant': '0ms',
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
        'slower': '1000ms',
      },

      // Animation timing functions
      transitionTimingFunction: {
        'ease-linear': 'linear',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },

      // Custom breakpoints (if needed beyond defaults)
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },

      // Component-specific extensions
      height: {
        // Touch-friendly button heights
        'button-sm': '36px',
        'button': '44px',
        'button-lg': '52px',
        // Form element heights
        'input': '44px',
        'input-sm': '36px',
        'input-lg': '52px',
      },

      minHeight: {
        // Card minimum heights
        'card-sm': '80px',
        'card': '120px',
        'card-lg': '160px',
        // Touch targets
        'touch': '44px',
      },

      // Maximum widths for content
      maxWidth: {
        'container': '1200px',
        'prose': '65ch',
        'form': '480px',
      },

      // Grid template columns for dashboard layouts
      gridTemplateColumns: {
        'dashboard': '280px 1fr',
        'dashboard-mobile': '1fr',
        'metrics': 'repeat(auto-fit, minmax(280px, 1fr))',
        'kpi-desktop': 'repeat(7, 1fr)',
        'kpi-tablet': 'repeat(4, 1fr)',
        'kpi-mobile': 'repeat(2, 1fr)',
      },
    },
  },
  plugins: [
    // Add any additional plugins here
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
  ],
}

/*
INSTALLATION INSTRUCTIONS:

1. Install Tailwind CSS and dependencies:
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p

2. Replace the generated tailwind.config.js with this file

3. Create a globals.css file with the following content:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Import design tokens */
@import './tokens.css';

/* Base styles using design tokens */
@layer base {
  html {
    font-family: theme('fontFamily.primary');
    font-size: theme('fontSize.base');
    line-height: theme('lineHeight.normal');
  }

  body {
    @apply bg-gray-50 text-gray-900;
  }

  /* Focus styles for accessibility */
  *:focus-visible {
    @apply outline-2 outline-primary-500 outline-offset-2;
  }

  /* Remove default button styles */
  button {
    @apply focus:outline-none focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2;
  }
}

/* Component layer for reusable styles */
@layer components {
  /* Button variants using design tokens */
  .btn-primary {
    @apply h-button px-6 bg-primary-500 text-white font-medium rounded-md 
           hover:bg-primary-600 focus:bg-primary-600 
           transition-colors duration-fast ease-out;
  }

  .btn-secondary {
    @apply h-button px-6 bg-transparent text-primary-500 font-medium rounded-md
           border-2 border-primary-500 hover:bg-primary-50 focus:bg-primary-50
           transition-colors duration-fast ease-out;
  }

  .btn-success {
    @apply h-button px-6 bg-accent-500 text-white font-medium rounded-md
           hover:bg-accent-600 focus:bg-accent-600
           transition-colors duration-fast ease-out;
  }

  /* Card styles */
  .card {
    @apply bg-white rounded-lg border border-gray-200 shadow-card
           hover:shadow-card-hover transition-shadow duration-fast ease-out;
  }

  .card-metric {
    @apply card p-6 min-h-card cursor-pointer
           focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2;
  }

  /* Form input styles */
  .form-input {
    @apply h-input px-4 border-2 border-gray-300 rounded-md
           focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
           transition-colors duration-fast ease-out;
  }

  /* Status indicators */
  .status-positive {
    @apply text-success-600 bg-success-50 border-success-200;
  }

  .status-negative {
    @apply text-error-600 bg-error-50 border-error-200;
  }

  .status-warning {
    @apply text-warning-600 bg-warning-50 border-warning-200;
  }

  .status-neutral {
    @apply text-gray-600 bg-gray-50 border-gray-200;
  }
}

/* Utility layer for custom utilities */
@layer utilities {
  /* Touch target utilities */
  .touch-target {
    @apply min-h-touch min-w-touch;
  }

  /* Text utilities with design tokens */
  .text-gradient-primary {
    @apply bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent;
  }

  /* Animation utilities */
  .animate-fade-in {
    animation: fadeIn 300ms ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Loading skeleton */
  .skeleton {
    @apply bg-gray-200 animate-pulse rounded;
  }
}
```

4. Import globals.css in your main application file (e.g., _app.tsx, main.tsx, or App.tsx):
   import './globals.css'

5. Create a tokens.css file with all the CSS custom properties from the design tokens document

6. Usage examples:
   - Colors: bg-primary-500, text-accent-600, border-success-200
   - Spacing: p-md, m-lg, gap-sm (or use standard: p-4, m-6, gap-2)
   - Typography: text-base, font-medium, leading-normal
   - Shadows: shadow-card, shadow-modal, shadow-dropdown
   - Borders: rounded-md, rounded-lg, border-2
   - Heights: h-button, h-input, min-h-card
*/