import React from 'react';

interface KPICardData {
  id: string;
  title: string;
  value: string | number;
  trend: {
    direction: 'up' | 'down' | 'neutral';
    value: string;
    period: string;
  };
  status: 'positive' | 'negative' | 'warning' | 'neutral';
  // TODO: Add click handler for detailed view
}

interface KPIGridProps {
  data?: KPICardData[];
  loading?: boolean;
}

const defaultKPIData: KPICardData[] = [
  {
    id: 'quota-attainment',
    title: 'Team Quota Attainment',
    value: '94.2%',
    trend: { direction: 'up', value: '+2.1%', period: 'vs Last Week' },
    status: 'positive'
  },
  {
    id: 'conversion-rate',
    title: 'Conversion Rate',
    value: '15.3%',
    trend: { direction: 'up', value: '+1.8%', period: 'vs Last Week' },
    status: 'positive'
  },
  {
    id: 'pipeline-value',
    title: 'Pipeline Value',
    value: '$2.4M',
    trend: { direction: 'down', value: '-5.2%', period: 'vs Last Week' },
    status: 'negative'
  },
  {
    id: 'new-leads',
    title: 'New Leads',
    value: '147',
    trend: { direction: 'up', value: '+12', period: 'vs Last Week' },
    status: 'positive'
  },
  {
    id: 'at-risk-deals',
    title: 'At Risk Deals',
    value: '23',
    trend: { direction: 'up', value: '+7', period: 'vs Last Week' },
    status: 'warning'
  },
  {
    id: 'closed-won',
    title: 'Closed Won',
    value: '$425K',
    trend: { direction: 'up', value: '+15%', period: 'vs Last Week' },
    status: 'positive'
  },
  {
    id: 'target-achievement',
    title: 'Target Achievement',
    value: '112%',
    trend: { direction: 'up', value: '+12%', period: 'vs Target' },
    status: 'positive'
  }
];

const KPICard: React.FC<{ data: KPICardData; loading?: boolean }> = ({ data, loading = false }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'positive': return 'border-green-200 bg-green-50';
      case 'negative': return 'border-red-200 bg-red-50';
      case 'warning': return 'border-yellow-200 bg-yellow-50';
      default: return 'border-gray-200 bg-white';
    }
  };

  const getTrendIcon = (direction: string) => {
    switch (direction) {
      case 'up': return '▲';
      case 'down': return '▼';
      default: return '⚠';
    }
  };

  const getTrendColor = (direction: string) => {
    switch (direction) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-yellow-600';
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6 min-h-[120px]">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`bg-white rounded-lg border-2 p-6 min-h-[120px] transition-all duration-200 hover:shadow-md hover:border-blue-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 cursor-pointer ${getStatusColor(data.status)}`}
      role="button"
      tabIndex={0}
      aria-label={`${data.title}: ${data.value}, ${data.trend.direction === 'up' ? 'increased' : data.trend.direction === 'down' ? 'decreased' : 'changed'} by ${data.trend.value} ${data.trend.period}`}
      onClick={() => {
        // TODO: Handle click to detailed view
        console.log(`Clicked on ${data.title} KPI`);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          // TODO: Handle keyboard activation
          console.log(`Activated ${data.title} KPI`);
        }
      }}
    >
      {/* KPI Title */}
      <div className="text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">
        {data.title}
      </div>

      {/* KPI Value */}
      <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        {data.value}
      </div>

      {/* Trend Indicator */}
      <div className={`flex items-center gap-1 text-sm ${getTrendColor(data.trend.direction)}`}>
        <span 
          className="font-semibold"
          role="img" 
          aria-label={data.trend.direction === 'up' ? 'Increasing' : data.trend.direction === 'down' ? 'Decreasing' : 'Warning'}
        >
          {getTrendIcon(data.trend.direction)}
        </span>
        <span className="font-semibold">{data.trend.value}</span>
        <span className="text-gray-500 ml-1">{data.trend.period}</span>
      </div>
    </div>
  );
};

const KPIGrid: React.FC<KPIGridProps> = ({ data = defaultKPIData, loading = false }) => {
  return (
    <div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4"
      role="region"
      aria-label="Key Performance Indicators"
    >
      {data.map((kpi) => (
        <div key={kpi.id} className="sm:col-span-1 lg:col-span-1 xl:col-span-1">
          <KPICard data={kpi} loading={loading} />
        </div>
      ))}
      
      {/* Mobile - View All Metrics Button */}
      <div className="sm:hidden col-span-1 mt-4">
        <button 
          className="w-full py-3 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          aria-label="View all performance metrics"
        >
          View All Metrics
        </button>
      </div>
    </div>
  );
};

export default KPIGrid;