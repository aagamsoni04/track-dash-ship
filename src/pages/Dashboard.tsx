
import React from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import DashboardStats from '../components/DashboardStats';
import ShipmentTable from '../components/ShipmentTable';
import TrackingMap from '../components/TrackingMap';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Plus } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      
      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-500">Welcome back, Admin</p>
          </div>
          
          <div className="flex space-x-4">
            <Button variant="outline" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Link to="/shipments/new">
              <Button>
                <Plus className="h-5 w-5 mr-2" />
                New Shipment
              </Button>
            </Link>
          </div>
        </div>
        
        <DashboardStats />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="pending">
                <TabsList className="mb-4">
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                  <TabsTrigger value="transit">In Transit</TabsTrigger>
                  <TabsTrigger value="delivered">Delivered</TabsTrigger>
                  <TabsTrigger value="issues">Issues</TabsTrigger>
                </TabsList>
                <TabsContent value="pending" className="space-y-4">
                  <ShipmentTable />
                </TabsContent>
                <TabsContent value="transit">
                  <ShipmentTable />
                </TabsContent>
                <TabsContent value="delivered">
                  <ShipmentTable />
                </TabsContent>
                <TabsContent value="issues">
                  <ShipmentTable />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Shipment Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <TrackingMap />
                <div className="mt-4">
                  <h3 className="font-medium">Shipment #TRK73519207</h3>
                  <p className="text-sm text-gray-500">
                    Last updated: 2 hours ago
                  </p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-courier-status-delivered pl-4 py-1">
                    <p className="text-sm font-medium">Package #TRK48920112 delivered</p>
                    <p className="text-xs text-gray-500">10 minutes ago</p>
                  </div>
                  <div className="border-l-4 border-courier-status-transit pl-4 py-1">
                    <p className="text-sm font-medium">Package #TRK92048561 in transit</p>
                    <p className="text-xs text-gray-500">1 hour ago</p>
                  </div>
                  <div className="border-l-4 border-courier-status-problem pl-4 py-1">
                    <p className="text-sm font-medium">Package #TRK58203917 has an issue</p>
                    <p className="text-xs text-gray-500">3 hours ago</p>
                  </div>
                  <div className="border-l-4 border-courier-status-transit pl-4 py-1">
                    <p className="text-sm font-medium">Package #TRK73519207 in transit</p>
                    <p className="text-xs text-gray-500">5 hours ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
