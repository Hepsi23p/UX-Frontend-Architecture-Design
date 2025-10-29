import React from 'react';

interface PipelineStageData {
  stage: string;
  count: number;
  percentage: number;
  trend: {
    direction: 'up' | 'down' | 'neutral';
    value: string;
  };
}

interface PipelineFunnelProps {
  data?: {
    stages: PipelineStageData[];
    title?: string;
    subtitle?: string;
  };
  loading?: boolean;
}

const defaultPipelineData = {
  title: 'Pipeline Conversion Funnel',
  subtitle: 'This Week vs Last Week',
  stages: [
    { stage: 'Leads', count: 487, percentage: 100, trend: { direction: 'neutral' as const, value: '' } },
    { stage: 'Qualified', count: 147, percentage: 30.2, trend: { direction: 'up' as const, value: '+2.1%' } },
    { stage: 'Opportunity', count: 89, percentage: 18.3, trend: { direction: 'down' as const, value: '-1.2%' } },
    { stage: 'Proposal', count: 34, percentage: 7.0, trend: { direction: 'up' as const, value: '+0.8%' } },
    { stage: 'Closed Won', count: 23, percentage: 4.7, trend: { direction: 'up' as const, value: '+1.1%' } }
  ]
};

const PipelineFunnelPlaceholder: React.FC<PipelineFunnelProps> = ({ 
  data = defaultPipelineData, 
  loading = false 
}) => {
  const getTrendColor = (direction: string) => {
    switch (direction) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-500';
    }
  };

  const getTrendIcon = (direction: string) => {
    switch (direction) {
      case 'up': return '▲';
      case 'down': return '▼';
      default: return '';
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="h-4 bg-gray-200 rounded w-20"></div>
                <div className="flex-1 h-6 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {data.title}
            </h3>
            {data.subtitle && (
              <p className="text-sm text-gray-600 mt-1">
                {data.subtitle}
              </p>
            )}
          </div>
          <div className="mt-3 sm:mt-0 flex gap-2">
            <button className="text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900">
              View Details
            </button>
            <span className="text-gray-300">|</span>
            <button className="text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900">
              Drill Down by Rep
            </button>
            <span className="text-gray-300">|</span>
            <button className="text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900">
              Export Data
            </button>
          </div>
        </div>
      </div>

      {/* Funnel Visualization */}
      <div className="p-6">
        <div 
          className="space-y-4"
          role="region"
          aria-label="Pipeline conversion funnel"
        >
          {data.stages.map((stage, index) => {
            const barWidth = stage.percentage;
            const isFirst = index === 0;
            
            return (
              <div 
                key={stage.stage}
                className="flex items-center gap-4"
                role="button"
                tabIndex={0}
                aria-label={`${stage.stage}: ${stage.count} items, ${stage.percentage}% conversion${stage.trend.value ? `, ${stage.trend.direction === 'up' ? 'increased' : 'decreased'} by ${stage.trend.value}` : ''}`}
                onClick={() => {
                  // TODO: Handle click to drill down into stage
                  console.log(`Clicked on ${stage.stage} stage`);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    console.log(`Activated ${stage.stage} stage`);
                  }
                }}
              >
                {/* Stage Label */}
                <div className="w-24 text-sm font-medium text-gray-700 text-right">
                  {stage.stage} ({stage.count})
                </div>

                {/* Progress Bar Container */}
                <div className="flex-1 relative">
                  <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 ease-out rounded-full ${
                        isFirst 
                          ? 'bg-blue-600' 
                          : index === 1 
                          ? 'bg-blue-500' 
                          : index === 2 
                          ? 'bg-blue-400' 
                          : index === 3 
                          ? 'bg-green-400'
                          : 'bg-green-600'
                      }`}
                      style={{ width: `${barWidth}%` }}
                      role="progressbar"
                      aria-valuenow={stage.percentage}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${stage.stage} conversion rate`}
                    />
                  </div>
                  {/* Percentage Label on Bar */}
                  <div className="absolute inset-0 flex items-center pl-3">
                    <span className="text-xs font-medium text-white">
                      {isFirst ? '100%' : `${stage.percentage}%`}
                    </span>
                  </div>
                </div>

                {/* Trend Indicator */}
                <div className={`w-16 text-sm ${getTrendColor(stage.trend.direction)}`}>
                  {stage.trend.value && (
                    <div className="flex items-center gap-1">
                      <span 
                        role="img" 
                        aria-label={stage.trend.direction === 'up' ? 'Increased' : 'Decreased'}
                      >
                        {getTrendIcon(stage.trend.direction)}
                      </span>
                      <span className="font-medium">{stage.trend.value}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Simplified View */}
        <div className="md:hidden mt-6 pt-6 border-t border-gray-200">
          <div className="text-sm text-gray-600 space-y-2">
            <div className="flex justify-between">
              <span>Leads → Qualified:</span>
              <span className="font-medium">487 → 147 (30%)</span>
            </div>
            <div className="flex justify-between">
              <span>Qualified → Opportunity:</span>
              <span className="font-medium">147 → 89 (18%)</span>
            </div>
            <div className="flex justify-between">
              <span>Opportunity → Proposal:</span>
              <span className="font-medium">89 → 34 (7%)</span>
            </div>
            <div className="flex justify-between">
              <span>Proposal → Closed:</span>
              <span className="font-medium">34 → 23 (5%)</span>
            </div>
          </div>
          
          <div className="mt-4 flex gap-2">
            <button className="flex-1 py-2 px-3 text-sm border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
              View Chart
            </button>
            <button className="flex-1 py-2 px-3 text-sm border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PipelineFunnelPlaceholder;