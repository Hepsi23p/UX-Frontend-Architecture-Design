import React from 'react';
import Header from './Header';
import KPIGrid from './KPIGrid';
import PipelineFunnelPlaceholder from './PipelineFunnelPlaceholder';
import RepsTablePlaceholder from './RepsTablePlaceholder';
import ActivityFeedPlaceholder from './ActivityFeedPlaceholder';

interface DashboardLayoutProps {
  // TODO: Replace with actual data types from API
  user?: {
    name: string;
    role: string;
    avatar?: string;
  };
  notifications?: Array<{
    id: string;
    message: string;
    timestamp: string;
    type: 'info' | 'warning' | 'success' | 'error';
  }>;
  kpiData?: any; // TODO: Define KPI data interface
  pipelineData?: any; // TODO: Define pipeline data interface
  repsData?: any; // TODO: Define reps performance data interface
  activitiesData?: any; // TODO: Define activities data interface
  lastUpdated?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  user,
  notifications,
  kpiData,
  pipelineData,
  repsData,
  activitiesData,
  lastUpdated
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Skip to main content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Header Component */}
      <Header 
        user={user}
        notifications={notifications}
        lastUpdated={lastUpdated}
      />

      {/* Global Filters Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            {/* Primary Filters */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">📅</span>
                <select 
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  aria-label="Time period filter"
                >
                  <option>This Week</option>
                  <option>Last Week</option>
                  <option>This Month</option>
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">🎯</span>
                <select 
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  aria-label="Territory filter"
                >
                  <option>All Territories</option>
                  <option>North</option>
                  <option>South</option>
                  <option>East</option>
                  <option>West</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">👥</span>
                <select 
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  aria-label="Sales rep filter"
                >
                  <option>All Reps (12)</option>
                  {/* TODO: Populate with actual reps data */}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">🔄</span>
                <button
                  className="px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  aria-label="Toggle auto-refresh"
                >
                  Auto
                </button>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Quick Filters:</span>
              <button className="px-3 py-1 text-sm bg-red-100 text-red-800 rounded-full hover:bg-red-200 focus:ring-2 focus:ring-red-500">
                At Risk
              </button>
              <button className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full hover:bg-green-200 focus:ring-2 focus:ring-green-500">
                Overperforming
              </button>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 focus:ring-2 focus:ring-blue-500">
                New This Week
              </button>
              <button className="px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 focus:ring-2 focus:ring-blue-500">
                Export Report
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main 
        id="main-content"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
        role="main"
      >
        {/* KPI Cards Section */}
        <section 
          aria-labelledby="kpi-heading"
          className="mb-8"
        >
          <h2 id="kpi-heading" className="sr-only">Key Performance Indicators</h2>
          <KPIGrid data={kpiData} />
        </section>

        {/* Pipeline Funnel Section */}
        <section 
          aria-labelledby="pipeline-heading"
          className="mb-8"
        >
          <h2 id="pipeline-heading" className="sr-only">Pipeline Conversion Funnel</h2>
          <PipelineFunnelPlaceholder data={pipelineData} />
        </section>

        {/* Two Column Layout for Table and Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Reps Performance Table - Takes 2/3 width on large screens */}
          <section 
            aria-labelledby="reps-heading"
            className="lg:col-span-2"
          >
            <h2 id="reps-heading" className="sr-only">Sales Representative Performance</h2>
            <RepsTablePlaceholder data={repsData} />
          </section>

          {/* Activities Feed - Takes 1/3 width on large screens */}
          <section 
            aria-labelledby="activities-heading"
            className="lg:col-span-1"
          >
            <h2 id="activities-heading" className="sr-only">Recent Team Activities</h2>
            <ActivityFeedPlaceholder data={activitiesData} />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer 
        className="bg-white border-t border-gray-200 mt-12"
        role="contentinfo"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <div className="flex items-center gap-4 mb-2 md:mb-0">
              <span>© 2025 Sales Analytics App</span>
              <button className="hover:text-blue-600 focus:text-blue-600 focus:outline-none">
                Help & Support
              </button>
            </div>
            <div className="text-sm">
              Data Updated: {lastUpdated || 'Oct 28, 8:15 AM'}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DashboardLayout;