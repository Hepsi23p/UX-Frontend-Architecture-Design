# Sales Analytics Dashboard - Microcopy Guide

## Overview
Microcopy specifications for the Sales Analytics Dashboard, designed to provide helpful, professional, and concise messaging that supports sales managers in their 15-minute weekly pipeline reviews and daily decision-making.

## Tone Guidelines
- **Helpful**: Provides clear guidance and next steps
- **Professional**: Business-appropriate language without jargon
- **Concise**: Direct and scannable messaging
- **Action-oriented**: Encourages productive behaviors
- **Empathetic**: Acknowledges user context and challenges

---

## Header Titles & Navigation

### Main Dashboard Header
```
Primary Title: "Sales Dashboard"
Subtitle: "Team performance and pipeline insights"
```

### Breadcrumb Navigation
```
Home > Sales Dashboard
Home > Sales Dashboard > Team Performance
Home > Sales Dashboard > Pipeline Analysis
```

### Page State Indicators
```
Last updated: "Updated 3 minutes ago"
Auto-refresh: "Auto-refresh: On (every 5 minutes)"
Manual refresh: "Last refreshed at 2:14 PM"
Data loading: "Updating dashboard data..."
```

### Time Period Selectors
```
Default: "Last 30 days"
Options:
- "Last 7 days"
- "Last 30 days" 
- "Last 90 days"
- "This quarter"
- "Custom range"

Loading state: "Loading data for last 30 days..."
```

---

## KPI Cards Microcopy

### Conversion Rate Card
```
Title: "Conversion Rate"
Subtitle: "Leads to opportunities"

Tooltip: "Percentage of leads that become qualified opportunities. Industry average is 6-8%."

Trend indicators:
- Positive: "↗ +2.3% vs last week"
- Negative: "↘ -1.8% vs last week" 
- Neutral: "→ No change vs last week"

Context help: "Click to view conversion funnel breakdown"
```

### Pipeline Value Card
```
Title: "Pipeline Value"
Subtitle: "Total weighted opportunities"

Tooltip: "Sum of all open opportunities multiplied by their probability to close. Updated in real-time."

Trend indicators:
- Positive: "↗ +$45K vs last week"
- Negative: "↘ -$23K vs last week"
- Neutral: "→ No change vs last week"

Context help: "Click to view pipeline by stage"
```

### Activities Card
```
Title: "Team Activities"
Subtitle: "This week"

Tooltip: "Total calls, emails, and meetings logged by your team this week. Goal: 150+ activities."

Trend indicators:
- Positive: "↗ +12 vs last week"
- Negative: "↘ -8 vs last week"
- Neutral: "→ Same as last week"

Context help: "Click to view activity breakdown by rep"
```

### Deals at Risk Card
```
Title: "Deals at Risk"
Subtitle: "Require attention"

Tooltip: "Opportunities with close dates in the next 30 days and low activity scores. Take action to prevent loss."

Trend indicators:
- Improved: "↗ 3 fewer than last week"
- Worsened: "↘ 2 more than last week"
- Stable: "→ Same as last week"

Context help: "Click to view at-risk deal details"
Alert state: "⚠️ 4 deals need immediate attention"
```

---

## Pipeline Chart Microcopy

### Chart Header
```
Title: "Pipeline Funnel"
Subtitle: "Lead progression through sales stages"

Filter label: "Time period:"
Export action: "Export pipeline data"
```

### Stage Labels
```
Stage 1: "Leads (1,247)"
Stage 2: "Qualified (423)"
Stage 3: "Opportunities (187)"
Stage 4: "Proposals (89)"
Stage 5: "Closed Won (67)"

Conversion rates:
- "34% qualification rate"
- "44% opportunity rate" 
- "48% proposal rate"
- "75% close rate"
```

### Empty States
```
No data available:
"No pipeline data for the selected period"
"Try selecting a different time range or check your filters."

Loading state:
"Loading pipeline data..."
"This may take a few moments for large datasets."

Error state:
"Unable to load pipeline data"
"Check your connection and try refreshing. If the problem persists, contact support."
```

### Tooltips & Hover States
```
Stage hover: "Click to view [Stage Name] details"
Conversion hover: "423 of 1,247 leads qualified (34%)"
Trend hover: "Pipeline value increased 8% vs last period"
```

---

## Reps Table Microcopy

### Table Header
```
Title: "Team Performance"
Subtitle: "12 sales representatives"

Search placeholder: "Search by rep name..."
Filter button: "Filters"
Actions button: "Quick Actions"
```

### Column Headers
```
Name: "Rep Name"
Conversion: "Conversion Rate" (sortable)
Pipeline: "Pipeline Value" (sortable)
Activities: "Activities This Week" (sortable)
At Risk: "Deals at Risk" (sortable)
Status: "Coaching Status"
Actions: "Quick Actions"
```

### Status Labels
```
Excelling: "Excelling" (green)
On Track: "On Track" (blue)
Watch: "Watch" (yellow)
Needs Coaching: "Needs Coaching" (red)
```

### Empty States

#### No Reps Found
```
Primary message: "No team members found"
Secondary message: "Try adjusting your search terms or filters to see results."
Action: "Clear filters"
```

#### No Data Available
```
Primary message: "No performance data available"
Secondary message: "Team performance data will appear here once sales activities are logged."
Action: "Learn about data requirements"
```

#### Loading State
```
Primary message: "Loading team performance..."
Secondary message: "Gathering the latest data for your team."
Progress indicator: Loading animation with skeleton rows
```

#### Filter Results Empty
```
Primary message: "No reps match your filters"
Secondary message: "Try removing some filters or expanding your search criteria."
Actions: 
- "Clear all filters"
- "Reset to default view"
```

#### Error State
```
Primary message: "Unable to load team data"
Secondary message: "There was a problem retrieving your team's performance data."
Actions:
- "Try again"
- "Contact support"
```

### Quick Actions Tooltips
```
Call icon: "Call [Rep Name]"
Calendar icon: "Schedule 1-on-1 with [Rep Name]"
Message icon: "Send message to [Rep Name]"
Coach icon: "Start coaching session"
View icon: "View detailed performance"
```

### Row Interactions
```
Click to expand: "Click to view detailed metrics for [Rep Name]"
Sort indication: "Currently sorted by Conversion Rate (highest to lowest)"
```

---

## Data Refresh & Loading States

### Refresh Action Confirmations
```
Manual refresh button: "Refresh data"

Confirmation modal:
Title: "Refresh Dashboard Data"
Message: "This will update all dashboard data with the latest information. Current filters and views will be preserved."
Actions:
- "Cancel"
- "Refresh Now"

Success notification:
"Dashboard data updated successfully"
"Showing data as of [timestamp]"

Error notification:
"Unable to refresh data"
"Please check your connection and try again."
```

### Auto-refresh Settings
```
Toggle label: "Auto-refresh"
Frequency options:
- "Every 2 minutes"
- "Every 5 minutes" (default)
- "Every 15 minutes"
- "Off"

Status messages:
- "Auto-refresh enabled (every 5 minutes)"
- "Auto-refresh disabled"
- "Next refresh in 3 minutes"
```

### Loading States
```
Initial page load:
"Loading your sales dashboard..."
"This may take a moment to gather all your team's data."

Partial data loading:
"Loading team performance data..."
"Loading pipeline information..."
"Loading activity metrics..."

Background refresh:
"Updating data..." (subtle notification)
"Getting latest information..." (progress indicator)
```

---

## Error States & Recovery

### Network Errors
```
Primary message: "Connection issue detected"
Secondary message: "Some data may not be current. Check your internet connection."
Action: "Retry connection"
```

### Data Sync Errors
```
Primary message: "Data sync incomplete"
Secondary message: "Some metrics may be outdated. Your IT team has been notified."
Action: "View cached data"
```

### Permission Errors
```
Primary message: "Access restricted"
Secondary message: "You don't have permission to view some team data. Contact your administrator for access."
Action: "Request access"
```

### Timeout Errors
```
Primary message: "Request timed out"
Secondary message: "The data is taking longer than usual to load. Try refreshing or check back in a few minutes."
Actions:
- "Try again"
- "Use cached data"
```

---

## Success & Confirmation Messages

### Data Export Success
```
"Pipeline report exported successfully"
"Check your downloads folder for SalesPipeline_[date].csv"
```

### Filter Applied
```
"Filters applied: [filter summary]"
"Showing [number] of [total] team members"
```

### Settings Saved
```
"Dashboard preferences saved"
"Your view settings have been updated."
```

### Quick Action Success
```
"Call scheduled with [Rep Name]"
"Message sent to [Rep Name]"
"1-on-1 meeting created for [date/time]"
```

---

## Mobile-Specific Microcopy

### Mobile Navigation
```
Menu button: "Menu"
Back button: "Back to dashboard"
Filter drawer: "Filter options"
```

### Mobile KPI Cards
```
Swipe hint: "Swipe to see more metrics"
Expand action: "Tap for details"
```

### Mobile Table Alternative
```
List header: "Team (12 members)"
Card tap action: "Tap for full details"
Load more: "Load 8 more team members"
```

---

## Accessibility Labels

### Screen Reader Labels
```
KPI cards: "[Metric name]: [value], [trend description]"
Chart: "Pipeline funnel chart showing conversion from [total] leads to [total] closed deals"
Table: "Team performance table with [number] sales representatives, sortable by multiple metrics"
Loading: "Content loading, please wait"
Error: "Error loading content, refresh page or contact support"
```

### ARIA Live Regions
```
Data updates: "Dashboard data updated with latest information"
Filter changes: "Filters applied, showing [number] results"
Sort changes: "Table sorted by [column name] in [direction] order"
Error announcements: "Error occurred: [error description]"
```

---

## Contextual Help Text

### Feature Introductions
```
First-time user:
"Welcome to your Sales Dashboard! This shows your team's key metrics and pipeline status. Use the filters to focus on specific time periods or team members."

New feature callout:
"New: Pipeline forecasting is now available. Click the forecast icon to see projected outcomes."
```

### Performance Guidance
```
Low conversion rate:
"Conversion rate is below target. Consider reviewing lead qualification criteria or coaching opportunities."

High at-risk deals:
"Several deals need attention. Review the at-risk deals section to prioritize your coaching efforts."

Strong performance:
"Great work! Your team is exceeding targets. Share best practices across the organization."
```

### Data Freshness Indicators
```
Real-time: "Live data"
Recent: "Updated 5 minutes ago"
Stale: "Data is 2 hours old - refresh recommended"
Offline: "Offline - showing cached data from [timestamp]"
```

---

*Document Version: 1.0*  
*Created: October 28, 2025*  
*Project: Sales Analytics Application*  
*Focus: User-Centered Microcopy for Enhanced Experience*