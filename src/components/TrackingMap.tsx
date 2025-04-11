
import React from 'react';
import { MapPin } from 'lucide-react';

const TrackingMap: React.FC = () => {
  return (
    <div className="border rounded-lg overflow-hidden bg-slate-100 relative aspect-video">
      {/* This is a simplified map placeholder */}
      <div className="w-full h-full flex items-center justify-center bg-gray-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/2 border-t-2 border-dashed border-courier-primary relative">
            <div className="absolute -left-2 -top-2 bg-courier-primary text-white rounded-full p-1">
              <MapPin className="h-4 w-4" />
            </div>
            <div className="absolute -right-2 -top-2 bg-courier-primary text-white rounded-full p-1">
              <MapPin className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500">
          <p>Interactive map would be displayed here</p>
          <p className="text-xs">Showing package journey from origin to destination</p>
        </div>
      </div>
    </div>
  );
};

export default TrackingMap;
