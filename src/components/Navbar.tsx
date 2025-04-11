
import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-courier-primary text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Package className="h-8 w-8" />
          <span className="text-xl font-bold">TrackDash</span>
        </Link>
        
        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-courier-light transition-colors">Home</Link>
          <Link to="#services" className="hover:text-courier-light transition-colors">Services</Link>
          <Link to="#about" className="hover:text-courier-light transition-colors">About</Link>
          <Link to="#contact" className="hover:text-courier-light transition-colors">Contact</Link>
          <Link to="/login">
            <Button className="bg-white text-courier-primary hover:bg-courier-light">
              Admin Login
            </Button>
          </Link>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-courier-primary border-t border-courier-secondary">
          <div className="container mx-auto px-4 py-3 space-y-3 flex flex-col">
            <Link 
              to="/" 
              className="py-2 hover:bg-courier-secondary px-3 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="#services" 
              className="py-2 hover:bg-courier-secondary px-3 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="#about" 
              className="py-2 hover:bg-courier-secondary px-3 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="#contact" 
              className="py-2 hover:bg-courier-secondary px-3 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/login" 
              className="py-2 bg-white text-courier-primary hover:bg-courier-light px-3 rounded-md text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Admin Login
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
