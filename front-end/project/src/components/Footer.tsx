import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Mail,
  Truck,
  Clock,
  ShieldCheck
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Features */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <Truck size={24} />
              <div>
                <h3 className="font-semibold">Free Shipping</h3>
                <p className="text-gray-400 text-sm">On all orders over $50</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Clock size={24} />
              <div>
                <h3 className="font-semibold">24/7 Customer Service</h3>
                <p className="text-gray-400 text-sm">Get help when you need it</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-4">
              <ShieldCheck size={24} />
              <div>
                <h3 className="font-semibold">Secure Payments</h3>
                <p className="text-gray-400 text-sm">100% secure checkout</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h2 className="text-xl font-bold mb-4">CLOTHIO</h2>
            <p className="text-gray-400 mb-4">
              Premium women's fashion destination offering the latest trends in dresses with innovative services like AI design, rentals, and professional laundry care.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@clothio.com" className="text-gray-400 hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/category/ethnic" className="text-gray-400 hover:text-white">Ethnic Wear</Link></li>
              <li><Link to="/category/western" className="text-gray-400 hover:text-white">Western Wear</Link></li>
              <li><Link to="/category/party-wear" className="text-gray-400 hover:text-white">Party Wear</Link></li>
              <li><Link to="/category/casual" className="text-gray-400 hover:text-white">Casual Wear</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-design" className="text-gray-400 hover:text-white">AI Design Tool</Link></li>
              <li><Link to="/rental-service" className="text-gray-400 hover:text-white">Rental Service</Link></li>
              <li><Link to="/laundry-service" className="text-gray-400 hover:text-white">Laundry Service</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help & Info</h3>
            <ul className="space-y-2">
              <li><Link to="/profile" className="text-gray-400 hover:text-white">My Account</Link></li>
              <li><Link to="/cart" className="text-gray-400 hover:text-white">Track Order</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white">Shipping Policy</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white">Returns & Exchanges</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} CLOTHIO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;