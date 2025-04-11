
import React, { useState } from 'react';
import { ChevronDown, Eye, Edit, Search } from 'lucide-react';
import StatusBadge from './StatusBadge';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type StatusType = 'delivered' | 'transit' | 'pending' | 'problem';

interface Shipment {
  id: string;
  trackingNumber: string;
  customer: string;
  origin: string;
  destination: string;
  status: StatusType;
  updatedAt: string;
}

// Mock data
const mockShipments: Shipment[] = [
  {
    id: '1',
    trackingNumber: 'TRK48920112',
    customer: 'John Smith',
    origin: 'New York, NY',
    destination: 'Los Angeles, CA',
    status: 'delivered',
    updatedAt: '2025-04-11 08:30'
  },
  {
    id: '2',
    trackingNumber: 'TRK73519207',
    customer: 'Emma Johnson',
    origin: 'Chicago, IL',
    destination: 'Miami, FL',
    status: 'transit',
    updatedAt: '2025-04-11 10:15'
  },
  {
    id: '3',
    trackingNumber: 'TRK92048561',
    customer: 'Robert Williams',
    origin: 'Seattle, WA',
    destination: 'Boston, MA',
    status: 'transit',
    updatedAt: '2025-04-10 16:45'
  },
  {
    id: '4',
    trackingNumber: 'TRK10395721',
    customer: 'Sarah Davis',
    origin: 'Austin, TX',
    destination: 'Denver, CO',
    status: 'pending',
    updatedAt: '2025-04-09 14:20'
  },
  {
    id: '5',
    trackingNumber: 'TRK58203917',
    customer: 'Michael Brown',
    origin: 'San Francisco, CA',
    destination: 'Portland, OR',
    status: 'problem',
    updatedAt: '2025-04-10 09:50'
  },
];

const ShipmentTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredShipments = mockShipments.filter(
    shipment => 
      shipment.trackingNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="rounded-md border">
      <div className="p-4 flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search by tracking number or customer..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button>
          Filter <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tracking #</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead className="hidden md:table-cell">Origin</TableHead>
            <TableHead className="hidden md:table-cell">Destination</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="hidden md:table-cell">Last Update</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredShipments.map(shipment => (
            <TableRow key={shipment.id}>
              <TableCell className="font-medium">{shipment.trackingNumber}</TableCell>
              <TableCell>{shipment.customer}</TableCell>
              <TableCell className="hidden md:table-cell">{shipment.origin}</TableCell>
              <TableCell className="hidden md:table-cell">{shipment.destination}</TableCell>
              <TableCell>
                <StatusBadge status={shipment.status} />
              </TableCell>
              <TableCell className="hidden md:table-cell">{shipment.updatedAt}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ShipmentTable;
