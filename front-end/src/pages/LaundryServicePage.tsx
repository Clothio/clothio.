import React from 'react';
import { Sparkles, Clock, Truck, Shield } from 'lucide-react';

const LaundryServicePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-lg text-white">
              <h1 className="text-4xl font-bold mb-4">Professional Laundry Service</h1>
              <p className="text-xl mb-6">
                Expert care for your precious garments, delivered to your doorstep
              </p>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-300">
                Schedule Pickup
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Laundry Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Dry Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Professional dry cleaning for delicate fabrics, formal wear, and special garments
              </p>
              <p className="font-bold text-green-600">From $8.99 per item</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Wash & Fold</h3>
              <p className="text-gray-600 mb-4">
                Complete laundry service with washing, drying, and folding for everyday clothes
              </p>
              <p className="font-bold text-green-600">$2.99 per pound</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Specialty Care</h3>
              <p className="text-gray-600 mb-4">
                Expert cleaning for designer dresses, embellished garments, and ethnic wear
              </p>
              <p className="font-bold text-green-600">From $14.99 per item</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Schedule</h3>
              <p className="text-gray-600">Book a pickup time that works for you through our website or app</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Pickup</h3>
              <p className="text-gray-600">Our driver will collect your clothes from your doorstep</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Clean</h3>
              <p className="text-gray-600">Our experts clean your clothes with care using eco-friendly products</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Deliver</h3>
              <p className="text-gray-600">We return your fresh, clean clothes at your preferred time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Laundry Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Clock className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Time-Saving</h3>
                <p className="text-gray-600">
                  Save hours each week by letting us handle your laundry needs while you focus on what matters most.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Truck className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Free Pickup & Delivery</h3>
                <p className="text-gray-600">
                  Enjoy the convenience of free doorstep pickup and delivery for orders over $30.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Shield className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Garment Protection</h3>
                <p className="text-gray-600">
                  All items are insured during the cleaning process, giving you peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Membership Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-100 p-6 text-center">
                <h3 className="text-xl font-bold">Basic</h3>
                <p className="text-3xl font-bold mt-2">$49<span className="text-sm font-normal">/month</span></p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>15 lbs of wash & fold per month</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>3 dry cleaning items per month</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Free pickup and delivery</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>72-hour turnaround</span>
                  </li>
                </ul>
                <button className="w-full mt-6 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300">
                  Choose Plan
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-green-500 transform scale-105">
              <div className="bg-green-500 p-6 text-center text-white">
                <h3 className="text-xl font-bold">Premium</h3>
                <p className="text-3xl font-bold mt-2">$89<span className="text-sm font-normal">/month</span></p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>30 lbs of wash & fold per month</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>6 dry cleaning items per month</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Free pickup and delivery</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>48-hour turnaround</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Priority scheduling</span>
                  </li>
                </ul>
                <button className="w-full mt-6 bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300">
                  Choose Plan
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-100 p-6 text-center">
                <h3 className="text-xl font-bold">Family</h3>
                <p className="text-3xl font-bold mt-2">$129<span className="text-sm font-normal">/month</span></p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>50 lbs of wash & fold per month</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>10 dry cleaning items per month</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Free pickup and delivery</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>24-hour turnaround</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Stain removal guarantee</span>
                  </li>
                </ul>
                <button className="w-full mt-6 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaundryServicePage;