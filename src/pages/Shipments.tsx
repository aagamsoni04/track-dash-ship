
import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import ShipmentTable from '../components/ShipmentTable';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Filter, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Shipments = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      
      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Shipments</h1>
            <p className="text-gray-500">Manage all your shipments</p>
          </div>
          
          <div className="flex space-x-4">
            <Button variant="outline">
              <Filter className="h-5 w-5 mr-2" />
              Filter
            </Button>
            <Button variant="outline">
              <Download className="h-5 w-5 mr-2" />
              Export
            </Button>
            <Link to="/shipments/new">
              <Button>
                <Plus className="h-5 w-5 mr-2" />
                New Shipment
              </Button>
            </Link>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>All Shipments</CardTitle>
          </CardHeader>
          <CardContent>
            <ShipmentTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Shipments;
