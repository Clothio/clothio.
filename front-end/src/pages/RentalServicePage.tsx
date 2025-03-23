import React from 'react';
import { Calendar, Clock, Truck, Shirt } from 'lucide-react';

const rentalProducts = [
  {
    id: 1,
    name: 'Designer Evening Gown',
    designer: 'Vera Wang',
    price: 89.99,
    retailPrice: 1200,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1008&q=80',
  },
  {
    id: 2,
    name: 'Sequin Cocktail Dress',
    designer: 'Elie Saab',
    price: 69.99,
    retailPrice: 850,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1983&q=80',
  },
  {
    id: 3,
    name: 'Embellished Bridal Lehenga',
    designer: 'Sabyasachi',
    price: 129.99,
    retailPrice: 3500,
    image: 'https://images.unsplash.com/photo-1610030469668-8e4a7c2f1e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  },
  {
    id: 4,
    name: 'Satin Slip Gown',
    designer: 'Ralph Lauren',
    price: 59.99,
    retailPrice: 695,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1008&q=80',
  },
];

const RentalServicePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-lg text-white">
              <h1 className="text-4xl font-bold mb-4">Dress Rental Service</h1>
              <p className="text-xl mb-6">
                Wear designer dresses for your special occasions without breaking the bank
              </p>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-300">
                Browse Collection
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shirt className="text-blue-600" size={28} />
              </div>
              <h3 className="font-semibold text-lg mb-2">1. Choose Your Dress</h3>
              <p className="text-gray-600">Browse our collection and select the perfect dress for your occasion</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-blue-600" size={28} />
              </div>
              <h3 className="font-semibold text-lg mb-2">2. Book Your Dates</h3>
              <p className="text-gray-600">Select your rental period (4-8 days) and check availability</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-blue-600" size={28} />
              </div>
              <h3 className="font-semibold text-lg mb-2">3. Receive Your Dress</h3>
              <p className="text-gray-600">We'll deliver your dress 1-2 days before your event</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-blue-600" size={28} />
              </div>
              <h3 className="font-semibold text-lg mb-2">4. Return After Use</h3>
              <p className="text-gray-600">Use the prepaid return label to send the dress back</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rentals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Rentals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {rentalProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm font-medium">
                    Rental
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">By {product.designer}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-blue-600">${product.price} / 4 days</p>
                      <p className="text-gray-500 text-sm">Retail: ${product.retailPrice}</p>
                    </div>
                    <button className="bg-black text-white px-3 py-1 rounded text-sm hover:bg-gray-800">
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="border border-gray-900 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-900 hover:text-white transition duration-300">
              View All Rentals
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Rent With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-3">Save Money</h3>
              <p className="text-gray-600">
                Rent designer dresses at a fraction of the retail price. Why buy when you can rent?
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-3">Sustainable Fashion</h3>
              <p className="text-gray-600">
                Reduce waste and your carbon footprint by renting instead of buying dresses you'll only wear once.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-3">Dry Cleaning Included</h3>
              <p className="text-gray-600">
                Don't worry about cleaning. Return the dress as is, and we'll handle the cleaning process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RentalServicePage;