
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  Truck, 
  Users, 
  Settings, 
  LogOut,
  MessageSquare
} from 'lucide-react';

const AdminSidebar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navigationItems = [
    { title: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { title: 'Shipments', icon: Package, path: '/shipments' },
    { title: 'Drivers', icon: Truck, path: '/drivers' },
    { title: 'Customers', icon: Users, path: '/customers' },
    { title: 'Support', icon: MessageSquare, path: '/support' },
    { title: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <div className="min-h-screen bg-sidebar w-64 text-sidebar-foreground flex flex-col">
      <div className="p-4 border-b border-sidebar-border">
        <Link to="/dashboard" className="flex items-center space-x-2">
          <Package className="h-8 w-8" />
          <span className="text-xl font-bold">TrackDash</span>
        </Link>
      </div>
      
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navigationItems.map((item) => (
          <Link
            key={item.title}
            to={item.path}
            className={`flex items-center px-4 py-3 rounded-md transition-colors ${
              isActive(item.path) 
                ? 'bg-sidebar-accent text-sidebar-accent-foreground' 
                : 'hover:bg-sidebar-accent/50'
            }`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.title}
          </Link>
        ))}
      </nav>
      
      <div className="p-4 border-t border-sidebar-border">
        <button 
          className="flex items-center space-x-2 w-full px-4 py-2 text-sidebar-foreground hover:bg-sidebar-accent/50 rounded-md transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
