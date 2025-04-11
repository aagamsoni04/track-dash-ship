
import React from 'react';
import { Package, Truck, CheckCircle, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
  trendUp?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, trend, trendUp }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        <div className="h-8 w-8 text-courier-accent">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <p className={`text-xs ${trendUp ? 'text-courier-status-delivered' : 'text-courier-status-problem'}`}>
            {trendUp ? '↑' : '↓'} {trend}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

const DashboardStats: React.FC = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard 
        title="Total Shipments" 
        value="2,485" 
        icon={<Package className="h-8 w-8" />}
        trend="12% from last month"
        trendUp={true}
      />
      <StatCard 
        title="In Transit" 
        value="143" 
        icon={<Truck className="h-8 w-8" />}
      />
      <StatCard 
        title="Delivered" 
        value="1,876" 
        icon={<CheckCircle className="h-8 w-8" />}
        trend="8% from last month"
        trendUp={true}
      />
      <StatCard 
        title="Issues" 
        value="23" 
        icon={<AlertTriangle className="h-8 w-8" />}
        trend="5% from last month"
        trendUp={false}
      />
    </div>
  );
};

export default DashboardStats;
