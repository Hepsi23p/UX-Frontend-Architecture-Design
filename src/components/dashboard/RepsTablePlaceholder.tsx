import React from 'react';

interface RepPerformanceData {
  id: string;
  name: string;
  conversionRate: number;
  conversionTrend: {
    direction: 'up' | 'down' | 'neutral';
    value: string;
  };
  pipelineValue: string;
  activitiesThisWeek: number;
  dealsAtRisk: number;
  status: 'needs-coaching' | 'watch' | 'excelling' | 'on-track';
  quickActions: string[];
}

interface RepsTableProps {
  data?: RepPerformanceData[];
  loading?: boolean;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
  onSort?: (column: string) => void;
  onRepClick?: (repId: string) => void;
  onQuickAction?: (repId: string, action: string) => void;
}

const defaultRepsData: RepPerformanceData[] = [
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    conversionRate: 8.2,
    conversionTrend: { direction: 'down', value: '-4.1%' },
    pipelineValue: '$185K',
    activitiesThisWeek: 12,
    dealsAtRisk: 4,
    status: 'needs-coaching',
    quickActions: ['call', 'schedule-1on1']
  },
  {
    id: 'mike-johnson',
    name: 'Mike Johnson',
    conversionRate: 11.5,
    conversionTrend: { direction: 'down', value: '-1.2%' },
    pipelineValue: '$220K',
    activitiesThisWeek: 18,
    dealsAtRisk: 2,
    status: 'watch',
    quickActions: ['message', 'check-in']
  },
  {
    id: 'lisa-wong',
    name: 'Lisa Wong',
    conversionRate: 18.7,
    conversionTrend: { direction: 'up', value: '+3.2%' },
    pipelineValue: '$340K',
    activitiesThisWeek: 24,
    dealsAtRisk: 1,
    status: 'excelling',
    quickActions: ['celebrate', 'share-best-practice']
  },
  {
    id: 'tom-rodriguez',
    name: 'Tom Rodriguez',
    conversionRate: 16.9,
    conversionTrend: { direction: 'up', value: '+1.8%' },
    pipelineValue: '$290K',
    activitiesThisWeek: 20,
    dealsAtRisk: 2,
    status: 'on-track',
    quickActions: ['continue', 'monitor']
  }
];

const RepsTablePlaceholder: React.FC<RepsTableProps> = ({
  data = defaultRepsData,
  loading = false,
  sortBy = 'conversionRate',
  sortDirection = 'asc',
  onSort,
  onRepClick,
  onQuickAction
}) => {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'needs-coaching':
        return { 
          color: 'text-red-600', 
          bgColor: 'bg-red-50', 
          borderColor: 'border-red-200',
          icon: '🔴',
          label: 'Needs Coaching'
        };
      case 'watch':
        return { 
          color: 'text-yellow-600', 
          bgColor: 'bg-yellow-50', 
          borderColor: 'border-yellow-200',
          icon: '🟡',
          label: 'Watch'
        };
      case 'excelling':
        return { 
          color: 'text-green-600', 
          bgColor: 'bg-green-50', 
          borderColor: 'border-green-200',
          icon: '🟢',
          label: 'Excelling'
        };
      case 'on-track':
        return { 
          color: 'text-green-600', 
          bgColor: 'bg-green-50', 
          borderColor: 'border-green-200',
          icon: '🟢',
          label: 'On Track'
        };
      default:
        return { 
          color: 'text-gray-600', 
          bgColor: 'bg-gray-50', 
          borderColor: 'border-gray-200',
          icon: '⚪',
          label: 'Unknown'
        };
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

  const getQuickActionIcon = (action: string) => {
    switch (action) {
      case 'call': return '📞';
      case 'message': return '💬';
      case 'celebrate': return '🏆';
      case 'continue': return '✅';
      default: return '⚡';
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="animate-pulse h-6 bg-gray-200 rounded w-1/3"></div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse flex items-center gap-4 py-3">
                <div className="h-4 bg-gray-200 rounded w-24"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
                <div className="h-4 bg-gray-200 rounded w-20"></div>
                <div className="h-4 bg-gray-200 rounded w-12"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
                <div className="h-8 bg-gray-200 rounded w-8"></div>
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
          <h3 className="text-lg font-semibold text-gray-900">
            Rep Performance Overview
            <span className="text-sm font-normal text-gray-500 ml-2">
              - Sortable by Conversion Rate {sortDirection === 'asc' ? '▼' : '▲'}
            </span>
          </h3>
          <div className="mt-3 sm:mt-0 flex gap-2">
            <button 
              className="text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              onClick={() => {
                // TODO: Show all 12 reps
                console.log('View all 12 reps');
              }}
            >
              View All 12 Reps
            </button>
            <span className="text-gray-300">|</span>
            <button 
              className="text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              onClick={() => onSort?.('pipelineValue')}
            >
              Sort by Pipeline Value
            </button>
            <span className="text-gray-300">|</span>
            <button className="text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900">
              Export Team Report
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => onSort?.('name')}
              >
                Name
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => onSort?.('conversionRate')}
              >
                Conv. Rate
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => onSort?.('pipelineValue')}
              >
                Pipeline Value
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => onSort?.('activitiesThisWeek')}
              >
                Activities This Week
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => onSort?.('dealsAtRisk')}
              >
                Deals At Risk
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((rep) => {
              const statusConfig = getStatusConfig(rep.status);
              return (
                <tr 
                  key={rep.id}
                  className="hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => onRepClick?.(rep.id)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="text-lg" role="img">{statusConfig.icon}</span>
                      <span className="text-sm font-medium text-gray-900">{rep.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-medium">
                      {rep.conversionRate}%
                    </div>
                    <div className={`text-xs ${getTrendColor(rep.conversionTrend.direction)} flex items-center gap-1`}>
                      <span>{getTrendIcon(rep.conversionTrend.direction)}</span>
                      <span>{rep.conversionTrend.value}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    {rep.pipelineValue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {rep.activitiesThisWeek}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {rep.dealsAtRisk}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${statusConfig.bgColor} ${statusConfig.color} ${statusConfig.borderColor}`}>
                      {statusConfig.label}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex items-center gap-2">
                      {rep.quickActions.slice(0, 2).map((action) => (
                        <button
                          key={action}
                          className="p-1 text-lg hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          onClick={(e) => {
                            e.stopPropagation();
                            onQuickAction?.(rep.id, action);
                          }}
                          aria-label={`${action} ${rep.name}`}
                        >
                          {getQuickActionIcon(action)}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden p-4">
        <div className="space-y-4">
          {data.map((rep) => {
            const statusConfig = getStatusConfig(rep.status);
            return (
              <div 
                key={rep.id}
                className={`border-2 ${statusConfig.borderColor} rounded-lg p-4 ${statusConfig.bgColor} cursor-pointer transition-all hover:shadow-md`}
                onClick={() => onRepClick?.(rep.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg" role="img">{statusConfig.icon}</span>
                    <span className="font-semibold text-gray-900">{rep.name}</span>
                  </div>
                  <div className={`text-lg font-bold ${getTrendColor(rep.conversionTrend.direction)}`}>
                    {rep.conversionRate}% {getTrendIcon(rep.conversionTrend.direction)} {rep.conversionTrend.value}
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 mb-3">
                  {rep.pipelineValue} pipeline, {rep.dealsAtRisk} at risk
                </div>
                
                <div className="flex gap-2">
                  {rep.status === 'needs-coaching' ? (
                    <>
                      <button className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Coach
                      </button>
                      <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500">
                        View Details
                      </button>
                    </>
                  ) : rep.status === 'watch' ? (
                    <>
                      <button className="flex-1 px-3 py-2 bg-yellow-600 text-white text-sm rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                        Check In
                      </button>
                      <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500">
                        View Details
                      </button>
                    </>
                  ) : (
                    <button className="w-full px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500">
                      View Details
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-4 flex gap-2">
          <button className="flex-1 py-2 px-3 text-sm border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Show All
          </button>
          <button className="flex-1 py-2 px-3 text-sm border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Sort Options
          </button>
        </div>
      </div>
    </div>
  );
};

export default RepsTablePlaceholder;