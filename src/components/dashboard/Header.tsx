import React, { useState } from 'react';

interface HeaderProps {
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
  lastUpdated?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  user = { name: 'Marcus R.', role: 'Sales Manager' },
  notifications = [],
  lastUpdated 
}) => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.timestamp).length;

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header Row */}
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Logo and Navigation */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="text-xl">☰</span>
            </button>

            {/* Logo and Brand */}
            <div className="flex items-center gap-2">
              <span className="text-xl" role="img" aria-label="Home">🏠</span>
              <h1 className="text-lg font-semibold text-gray-900">
                Sales Analytics
              </h1>
            </div>
          </div>

          {/* Center Section - Search (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400" role="img" aria-label="Search">🔍</span>
              </div>
              <input
                type="search"
                placeholder="Search..."
                className={`block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all duration-200 ${
                  isSearchExpanded ? 'ring-2 ring-blue-500 border-blue-500' : ''
                }`}
                onFocus={() => setIsSearchExpanded(true)}
                onBlur={() => setIsSearchExpanded(false)}
                aria-label="Search dashboard data"
              />
              {/* TODO: Add autocomplete dropdown when expanded */}
            </div>
          </div>

          {/* Right Section - Notifications and User */}
          <div className="flex items-center gap-4">
            {/* Mobile Search Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Open search"
            >
              <span className="text-lg">🔍</span>
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 relative"
                onClick={() => setShowNotifications(!showNotifications)}
                aria-label={`Notifications ${unreadCount > 0 ? `(${unreadCount} unread)` : ''}`}
                aria-expanded={showNotifications}
              >
                <span className="text-lg">🔔</span>
                {unreadCount > 0 && (
                  <span 
                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                    aria-label={`${unreadCount} unread notifications`}
                  >
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <div className="px-4 py-2 text-sm font-medium text-gray-900 border-b border-gray-100">
                      Notifications
                    </div>
                    {notifications.length > 0 ? (
                      notifications.slice(0, 5).map((notification) => (
                        <div 
                          key={notification.id}
                          className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-50 last:border-b-0"
                        >
                          <div className="font-medium">{notification.message}</div>
                          <div className="text-xs text-gray-500 mt-1">{notification.timestamp}</div>
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-sm text-gray-500">
                        No new notifications
                      </div>
                    )}
                    <div className="px-4 py-2 border-t border-gray-100">
                      <button className="text-sm text-blue-600 hover:text-blue-800 focus:outline-none focus:underline">
                        View all notifications
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* User Menu */}
            <div className="relative">
              <button
                className="flex items-center gap-2 p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setShowUserMenu(!showUserMenu)}
                aria-label="User menu"
                aria-expanded={showUserMenu}
              >
                <span className="text-lg">👤</span>
                <span className="hidden sm:block text-sm font-medium">
                  {user.name}
                </span>
              </button>

              {/* User Dropdown */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <div className="px-4 py-2 text-sm text-gray-900 border-b border-gray-100">
                      <div className="font-medium">{user.name}</div>
                      <div className="text-xs text-gray-500">{user.role}</div>
                    </div>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
                      Profile Settings
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
                      Preferences
                    </button>
                    <div className="border-t border-gray-100">
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
                        Sign out
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Settings Button */}
            <button
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Settings"
            >
              <span className="text-lg">⚙️</span>
            </button>
          </div>
        </div>

        {/* Breadcrumb Row */}
        <div className="hidden md:flex items-center justify-between py-2 border-t border-gray-100">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
            <span className="text-lg" role="img" aria-label="Dashboard">📊</span>
            <span className="text-gray-900 font-medium">Dashboard</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-600">Sales Manager View</span>
          </nav>
          
          <div className="text-sm text-gray-500">
            Last Update: {lastUpdated || '8:15 AM'}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
              Dashboard
            </button>
            <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
              Leads
            </button>
            <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
              Opportunities
            </button>
            <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
              Reports
            </button>
            <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
              Settings
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;