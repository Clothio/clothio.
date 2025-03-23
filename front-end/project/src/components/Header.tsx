import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Heart, 
  Search, 
  ShoppingCart, 
  User,
  Menu,
  X
} from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-light shadow-5m bg-transparent">
      <div className="container mx-auto px-4 py-4 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center ">
            <h1 className="text-2xl font-bold italic tracking-wider text-gray-800">CLOTHIO</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="flex flex-col items-center text-gray-700 hover:text-gray-900">
              <Home size={20} />
              <span className="text-xs mt-1"></span>
            </Link>
            <Link to="/wishlist" className="flex flex-col items-center text-gray-700 hover:text-gray-900">
              <Heart size={20} />
              <span className="text-xs mt-1"></span>
            </Link>
            <Link to="/search" className="flex flex-col items-center text-gray-700 hover:text-gray-900">
              <Search size={20} />
              <span className="text-xs mt-1"></span>
            </Link>
            <Link to="/cart" className="flex flex-col items-center text-gray-700 hover:text-gray-900">
              <ShoppingCart size={20} />
              <span className="text-xs mt-1"></span>
            </Link>
            <Link to="/profile" className="flex flex-col items-center text-gray-700 hover:text-gray-900">
              <User size={20} />
              <span className="text-xs mt-1"></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="flex items-center space-x-3 text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link 
              to="/wishlist" 
              className="flex items-center space-x-3 text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              <Heart size={20} />
              <span>Wishlist</span>
            </Link>
            <Link 
              to="/search" 
              className="flex items-center space-x-3 text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              <Search size={20} />
              <span>Search</span>
            </Link>
            <Link 
              to="/cart" 
              className="flex items-center space-x-3 text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingCart size={20} />
              <span>Cart</span>
            </Link>
            <Link 
              to="/profile" 
              className="flex items-center space-x-3 text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              <User size={20} />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;