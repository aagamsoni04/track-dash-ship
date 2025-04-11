
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full">
        <div className="flex justify-center mb-6">
          <div className="bg-courier-primary rounded-full p-3">
            <Package className="h-10 w-10 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-2 text-courier-primary">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Oops! This shipment seems to be lost.
        </p>
        <p className="text-gray-500 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-3">
          <Link to="/">
            <Button className="w-full bg-courier-primary hover:bg-courier-secondary">
              Return to Home
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="outline" className="w-full">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
