import React from 'react';

interface ActivityItem {
  id: string;
  type: 'deal-closed' | 'meeting-scheduled' | 'deal-at-risk' | 'proposal-sent' | 'system-reminder' | 'system-update';
  actor: string;
  description: string;
  timestamp: string;
  details?: {
    dealValue?: string;
    company?: string;
    dealName?: string;
  };
}

interface ActivityFeedProps {
  data?: ActivityItem[];
  loading?: boolean;
  onActivityClick?: (activityId: string) => void;
  onViewAll?: () => void;
  onFilter?: (repName?: string) => void;
}

const defaultActivitiesData: ActivityItem[] = [
  {
    id: 'activity-1',
    type: 'deal-closed',
    actor: 'Lisa Wong',
    description: 'closed $45K deal with TechCorp',
    timestamp: '2 mins ago',
    details: { dealValue: '$45K', company: 'TechCorp' }
  },
  {
    id: 'activity-2',
    type: 'meeting-scheduled',
    actor: 'Tom Rodriguez',
    description: 'scheduled demo with MegaRetail',
    timestamp: '15 mins ago',
    details: { company: 'MegaRetail' }
  },
  {
    id: 'activity-3',
    type: 'deal-at-risk',
    actor: 'Sarah Chen',
    description: 'Acme Corp deal moved to "At Risk"',
    timestamp: '1 hour ago',
    details: { company: 'Acme Corp', dealName: 'Acme Corp deal' }
  },
  {
    id: 'activity-4',
    type: 'proposal-sent',
    actor: 'Mike Johnson',
    description: 'sent proposal to StartupXYZ',
    timestamp: '2 hours ago',
    details: { company: 'StartupXYZ' }
  },
  {
    id: 'activity-5',
    type: 'system-reminder',
    actor: 'System',
    description: 'Weekly 1:1s scheduled for tomorrow',
    timestamp: '3 hours ago'
  },
  {
    id: 'activity-6',
    type: 'system-update',
    actor: 'Jennifer Park',
    description: 'updated lead scoring algorithm',
    timestamp: '4 hours ago'
  }
];

const ActivityFeedPlaceholder: React.FC<ActivityFeedProps> = ({
  data = defaultActivitiesData,
  loading = false,
  onActivityClick,
  onViewAll,
  onFilter
}) => {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'deal-closed': return '🎉';
      case 'meeting-scheduled': return '📞';
      case 'deal-at-risk': return '⚠️';
      case 'proposal-sent': return '📧';
      case 'system-reminder': return '📅';
      case 'system-update': return '🔄';
      default: return '📋';
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'deal-closed': return 'text-green-600 bg-green-50 border-green-200';
      case 'meeting-scheduled': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'deal-at-risk': return 'text-red-600 bg-red-50 border-red-200';
      case 'proposal-sent': return 'text-purple-600 bg-purple-50 border-purple-200';
      case 'system-reminder': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'system-update': return 'text-gray-600 bg-gray-50 border-gray-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="animate-pulse h-6 bg-gray-200 rounded w-1/2"></div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                </div>
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
            Team Activity Stream
            <span className="text-sm font-normal text-gray-500 ml-2">
              - Last 24 Hours
            </span>
          </h3>
          <div className="mt-3 sm:mt-0 flex gap-2">
            <button 
              className="text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              onClick={onViewAll}
            >
              View All Activities
            </button>
            <span className="text-gray-300">|</span>
            <button 
              className="text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              onClick={() => onFilter?.()}
            >
              Filter by Rep
            </button>
            <span className="text-gray-300">|</span>
            <button className="text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900">
              Activity Analytics
            </button>
          </div>
        </div>
      </div>

      {/* Activities List */}
      <div className="p-6">
        <div 
          className="space-y-4 max-h-96 overflow-y-auto"
          role="feed"
          aria-label="Team activity feed"
          aria-live="polite"
        >
          {data.map((activity, index) => (
            <div 
              key={activity.id}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group"
              onClick={() => onActivityClick?.(activity.id)}
              role="article"
              aria-label={`${activity.actor} ${activity.description} ${activity.timestamp}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onActivityClick?.(activity.id);
                }
              }}
            >
              {/* Activity Icon */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm border ${getActivityColor(activity.type)}`}>
                <span role="img" aria-label={`${activity.type} activity`}>
                  {getActivityIcon(activity.type)}
                </span>
              </div>

              {/* Activity Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{activity.actor}</span>
                      {' '}
                      <span>{activity.description}</span>
                      {activity.details?.dealValue && (
                        <span className="font-medium text-green-600">
                          {' '}({activity.details.dealValue})
                        </span>
                      )}
                    </p>
                    {activity.details?.company && (
                      <p className="text-xs text-gray-500 mt-1">
                        Company: {activity.details.company}
                      </p>
                    )}
                  </div>
                  <div className="flex-shrink-0 ml-2">
                    <span className="text-xs text-gray-500">
                      {activity.timestamp}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Action Indicator */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-gray-400 text-sm">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {data.length === 0 && (
          <div className="text-center py-8">
            <span className="text-4xl" role="img" aria-label="No activities">📭</span>
            <p className="text-gray-500 mt-2">No recent activities</p>
            <button 
              className="text-sm text-blue-600 hover:text-blue-800 mt-2 focus:outline-none focus:underline"
              onClick={() => onFilter?.()}
            >
              Refresh feed
            </button>
          </div>
        )}
      </div>

      {/* Mobile Simplified View Actions */}
      <div className="md:hidden px-6 py-4 border-t border-gray-200 bg-gray-50">
        <div className="flex gap-2">
          <button 
            className="flex-1 py-2 px-3 text-sm border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            onClick={onViewAll}
          >
            View All
          </button>
          <button 
            className="flex-1 py-2 px-3 text-sm border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            onClick={() => onFilter?.()}
          >
            Filter
          </button>
        </div>
      </div>

      {/* Pull-to-refresh hint for mobile */}
      <div className="md:hidden px-6 py-2 text-center">
        <p className="text-xs text-gray-400">
          Pull down to refresh activities
        </p>
      </div>
    </div>
  );
};

export default ActivityFeedPlaceholder;