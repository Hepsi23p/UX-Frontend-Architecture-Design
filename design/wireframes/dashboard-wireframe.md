Save output to: src/components/dashboard/ files# Sales Manager Dashboard - Low-Fidelity Wireframe

## Page Overview
**Target User**: Marcus Rodriguez (Sales Manager)  
**Primary Goal**: Weekly pipeline health review and team performance monitoring  
**Context**: Desktop-first with mobile responsive design  
**Key Workflow**: Marcus's Monday morning routine for identifying underperforming reps

---

## Layout Structure (Desktop View)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                  HEADER                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│  🏠 Sales Analytics    [🔍 Search...] [🔔3] [👤 Marcus R.] [⚙️ Settings]   │
│                                                                             │
│  📊 Dashboard > Sales Manager View                    Last Update: 8:15 AM │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                              GLOBAL FILTERS                                │
├─────────────────────────────────────────────────────────────────────────────┤
│  [📅 This Week ▼] [🎯 All Territories ▼] [👥 All Reps (12) ▼] [🔄 Auto]  │
│  Quick Filters: [At Risk] [Overperforming] [New This Week] [Export Report] │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                                KPI CARDS                                   │
├─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────────────┤
│ TEAM    │ CONV.   │ PIPELINE│ NEW     │ AT RISK │ CLOSED  │ TARGET          │
│ QUOTA   │ RATE    │ VALUE   │ LEADS   │ DEALS   │ WON     │ ACHIEVEMENT     │
│ ATTAIN. │         │         │         │         │         │                 │
├─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────────────┤
│ 94.2%   │ 15.3%   │ $2.4M   │ 147     │ 23      │ $425K   │ 112% (Ahead)    │
│ ▲ +2.1% │ ▲ +1.8% │ ▼ -5.2% │ ▲ +12   │ ⚠ +7    │ ▲ +15%  │ ▲ +12%          │
│ vs Last │ vs Last │ vs Last │ vs Last │ vs Last │ vs Last │ vs Target       │
│ Week    │ Week    │ Week    │ Week    │ Week    │ Week    │                 │
└─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                            PIPELINE FUNNEL CHART                           │
├─────────────────────────────────────────────────────────────────────────────┤
│  Pipeline Conversion Funnel - This Week vs Last Week                       │
│                                                                             │
│  Leads (487)     ████████████████████████████████████████  100%            │
│  Qualified (147) ████████████████████  30.2% ▲ +2.1%                      │
│  Opportunity (89) ███████████████  18.3% ▼ -1.2%                          │
│  Proposal (34)   ██████  7.0% ▲ +0.8%                                     │
│  Closed Won (23) ███  4.7% ▲ +1.1%                                        │
│                                                                             │
│  [View Details] [Drill Down by Rep] [Export Funnel Data]                   │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                          REPS PERFORMANCE TABLE                            │
├─────────────────────────────────────────────────────────────────────────────┤
│ Rep Performance Overview - Sortable by Conversion Rate ▼                   │
│                                                                             │
│ Name            │ Conv.Rate │ Pipeline │ Activities │ Deals  │ Status  │ ⚡ │
│                 │           │ Value    │ This Week  │ At Risk│         │   │
├─────────────────┼───────────┼──────────┼────────────┼────────┼─────────┼───┤
│ 🔴 Sarah Chen   │ 8.2% ▼    │ $185K    │ 12         │ 4      │ Needs   │📞 │
│                 │ -4.1%     │          │            │        │ Coaching│   │
├─────────────────┼───────────┼──────────┼────────────┼────────┼─────────┼───┤
│ 🟡 Mike Johnson │ 11.5% ▼   │ $220K    │ 18         │ 2      │ Watch   │💬 │
│                 │ -1.2%     │          │            │        │         │   │
├─────────────────┼───────────┼──────────┼────────────┼────────┼─────────┼───┤
│ 🟢 Lisa Wong    │ 18.7% ▲   │ $340K    │ 24         │ 1      │ Excelling│🏆 │
│                 │ +3.2%     │          │            │        │         │   │
├─────────────────┼───────────┼──────────┼────────────┼────────┼─────────┼───┤
│ 🟢 Tom Rodriguez│ 16.9% ▲   │ $290K    │ 20         │ 2      │ On Track│✅ │
│                 │ +1.8%     │          │            │        │         │   │
│                                                                             │
│ [View All 12 Reps] [Sort by Pipeline Value] [Export Team Report]           │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                           RECENT ACTIVITIES FEED                           │
├─────────────────────────────────────────────────────────────────────────────┤
│ Team Activity Stream - Last 24 Hours                                       │
│                                                                             │
│ 🎉 Lisa Wong closed $45K deal with TechCorp                    2 mins ago   │
│ 📞 Tom Rodriguez scheduled demo with MegaRetail                 15 mins ago  │
│ ⚠️  Sarah Chen's Acme Corp deal moved to "At Risk"             1 hour ago   │
│ 📧 Mike Johnson sent proposal to StartupXYZ                    2 hours ago  │
│ 📅 System reminder: Weekly 1:1s scheduled for tomorrow         3 hours ago  │
│ 🔄 Jennifer Park updated lead scoring algorithm                 4 hours ago  │
│                                                                             │
│ [View All Activities] [Filter by Rep] [Activity Analytics]                 │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                                 FOOTER                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│ © 2025 Sales Analytics App │ Help & Support │ Data Updated: Oct 28, 8:15 AM │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Component Behavior & Responsiveness

### 1. Header
**Desktop Behavior:**
- Fixed positioning during scroll for persistent navigation access
- Search bar expands on focus with autocomplete dropdown
- Notifications show badge count, dropdown on click with recent alerts
- User avatar shows quick profile menu with logout and settings

**Mobile Collapse (≤768px):**
```
┌─────────────────────────────────────┐
│ [☰] Sales Analytics    [🔔3] [👤]  │
│ Dashboard                           │
└─────────────────────────────────────┘
```
- Hamburger menu reveals full navigation
- Search becomes modal overlay
- User info condensed to avatar only

### 2. Global Filters
**Desktop Behavior:**
- Dropdowns show with checkboxes for multi-select
- Quick filters toggle on/off with visual state indication
- Auto-refresh toggle controls real-time data updates
- Filter combinations persist across sessions

**Mobile Collapse (≤768px):**
```
┌─────────────────────────────────────┐
│ [📅 This Week ▼] [More Filters...] │
│ [At Risk] [Export]                 │
└─────────────────────────────────────┘
```
- Primary filter (time period) remains visible
- Secondary filters collapse into "More Filters" modal
- Most used quick filters stay visible

### 3. KPI Cards
**Desktop Behavior:**
- Hover effects reveal detailed tooltips with historical context
- Click-through to detailed reports for each metric
- Color-coded trend indicators (green ▲, red ▼, yellow ⚠)
- Real-time updates with smooth animation transitions

**Mobile Collapse (≤768px):**
```
┌─────────────────┬─────────────────┐
│ QUOTA ATTAIN.   │ CONV. RATE      │
│ 94.2% ▲ +2.1%   │ 15.3% ▲ +1.8%   │
├─────────────────┼─────────────────┤
│ PIPELINE VALUE  │ AT RISK DEALS   │
│ $2.4M ▼ -5.2%   │ 23 ⚠ +7        │
└─────────────────┴─────────────────┘
[View All Metrics]
```
- 2x2 grid showing top 4 metrics
- Swipe horizontally to see additional metrics
- Tap to expand individual metric details

### 4. Pipeline Funnel Chart
**Desktop Behavior:**
- Interactive chart with hover states showing exact values
- Click on funnel stages to drill down into specific deals
- Toggle between current week vs. historical comparison views
- Export functionality with multiple format options

**Mobile Collapse (≤768px):**
```
┌─────────────────────────────────────┐
│ Pipeline Funnel                     │
│ Leads → Qualified → Opportunity     │
│ 487 → 147 (30%) → 89 (18%)         │
│ → Proposal → Closed                 │
│ → 34 (7%) → 23 (5%)                │
│ [View Chart] [Details]              │
└─────────────────────────────────────┘
```
- Simplified text-based funnel view
- Tap "View Chart" for full interactive modal
- Key percentages prominently displayed

### 5. Reps Performance Table
**Desktop Behavior:**
- Sortable columns with visual sort indicators
- Row hover highlights with quick action menu
- Status colors integrate with design system (red/yellow/green)
- Quick action buttons (📞 call, 💬 message, etc.) on hover

**Mobile Collapse (≤768px):**
```
┌─────────────────────────────────────┐
│ Team Performance (12 reps)          │
├─────────────────────────────────────┤
│ 🔴 Sarah Chen        8.2% ▼ -4.1%   │
│    $185K pipeline, 4 at risk        │
│    [Coach] [View Details]           │
├─────────────────────────────────────┤
│ 🟡 Mike Johnson     11.5% ▼ -1.2%   │
│    $220K pipeline, 2 at risk        │
│    [Check In] [View Details]        │
└─────────────────────────────────────┘
[Show All] [Sort Options]
```
- Card-based layout instead of table
- Key metrics condensed into 2-line summary
- Action buttons contextual to performance status

### 6. Recent Activities Feed
**Desktop Behavior:**
- Auto-refresh every 30 seconds with new activity animations
- Click activities to view full context/details
- Filter dropdown for activity types and specific reps
- Infinite scroll loading for historical activities

**Mobile Collapse (≤768px):**
```
┌─────────────────────────────────────┐
│ Recent Activities                   │
├─────────────────────────────────────┤
│ 🎉 Lisa Wong closed $45K deal       │
│    2 mins ago                       │
├─────────────────────────────────────┤
│ 📞 Tom scheduled demo               │
│    15 mins ago                      │
└─────────────────────────────────────┘
[View All] [Filter]
```
- Simplified activity cards with essential info
- Timestamp relative (mins/hours ago)
- Pull-to-refresh gesture support

### 7. Footer
**Desktop Behavior:**
- Sticky footer with legal links and system status
- Data freshness indicator with last update timestamp
- Help system access and support contact information

**Mobile Collapse (≤768px):**
```
┌─────────────────────────────────────┐
│ Updated: 8:15 AM │ Help │ © 2025   │
└─────────────────────────────────────┘
```
- Condensed to essential information only
- Help link opens mobile-optimized support

---

## Accessibility Considerations

### Screen Reader Support
- Semantic HTML structure with proper heading hierarchy (h1 → h6)
- ARIA labels for interactive elements and data visualizations
- Alt text for status indicators and trend arrows
- Live regions for real-time updates announcements

### Keyboard Navigation
- Tab order follows logical reading flow (left-to-right, top-to-bottom)
- Skip links to main content sections
- Keyboard shortcuts for common actions (Ctrl+F for search, etc.)
- Focus indicators meet WCAG 2.1 AA contrast requirements

### Color Accessibility
- Status indicators include shapes/icons beyond color coding
- High contrast mode support with increased border weights
- Color-blind friendly palette with sufficient luminance differences

---

## Performance Optimization

### Progressive Loading
1. **Above-the-fold priority**: Header, filters, KPI cards load first
2. **Deferred loading**: Chart and table load after critical content
3. **Lazy loading**: Activities feed loads on scroll/interaction
4. **Background updates**: New data loads without full page refresh

### Mobile Performance
- **Touch targets**: Minimum 44px for all interactive elements
- **Gesture support**: Swipe navigation between sections
- **Offline capability**: Cached dashboard data for poor connectivity
- **Progressive Web App**: Installable for native-like experience

---

*Document Version: 1.0*  
*Created: October 28, 2025*  
*Target: Sales Manager Dashboard*  
*Breakpoints: Desktop (1024px+), Tablet (768-1023px), Mobile (≤767px)*