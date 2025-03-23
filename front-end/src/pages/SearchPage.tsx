import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

// Mock product data
const allProducts = [
  { id: 1, name: 'Embroidered Anarkali Suit', price: 89.99, category: 'ethnic', image: 'https://images.unsplash.com/photo-1610030469668-8e4a7c2f1e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
  { id: 2, name: 'Banarasi Silk Saree', price: 129.99, category: 'ethnic', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
  { id: 5, name: 'Floral Maxi Dress', price: 59.99, category: 'western', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
  { id: 6, name: 'Denim Jumpsuit', price: 79.99, category: 'western', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80' },
  { id: 9, name: 'Sequin Cocktail Dress', price: 89.99, category: 'party-wear', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1008&q=80' },
  { id: 10, name: 'Velvet Gown', price: 129.99, category: 'party-wear', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1983&q=80' },
  { id: 13, name: 'Trench Coat Set', price: 149.99, category: 'coat-sets', image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
  { id: 17, name: 'Cotton Sundress', price: 39.99, category: 'casual', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80' },
];

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter products based on search term, category, and price range
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Search Products</h1>
      
      {/* Search Bar */}
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search for dresses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
        />
        <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
      </div>
      
      {/* Filter Toggle Button (Mobile) */}
      <div className="md:hidden mb-6">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-md"
        >
          <Filter size={18} className="mr-2" />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters */}
        <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 space-y-6`}>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="font-semibold text-lg mb-4">Categories</h2>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value=""
                  checked={selectedCategory === ''}
                  onChange={() => setSelectedCategory('')}
                  className="mr-2"
                />
                All Categories
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value="ethnic"
                  checked={selectedCategory === 'ethnic'}
                  onChange={() => setSelectedCategory('ethnic')}
                  className="mr-2"
                />
                Ethnic Wear
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value="western"
                  checked={selectedCategory === 'western'}
                  onChange={() => setSelectedCategory('western')}
                  className="mr-2"
                />
                Western Wear
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value="party-wear"
                  checked={selectedCategory === 'party-wear'}
                  onChange={() => setSelectedCategory('party-wear')}
                  className="mr-2"
                />
                Party Wear
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value="coat-sets"
                  checked={selectedCategory === 'coat-sets'}
                  onChange={() => setSelectedCategory('coat-sets')}
                  className="mr-2"
                />
                Coat Sets
              </label>
              <label className="flex items-center">
                <input
                  type=" radio"
                  name="category"
                  value="casual"
                  checked={selectedCategory === 'casual'}
                  onChange={() => setSelectedCategory('casual')}
                  className="mr-2"
                />
                Casual Wear
              </label>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="font-semibold text-lg mb-4">Price Range</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                className="w-full"
              />
              <input
                type="range"
                min="0"
                max="200"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
            </div>
          </div>
        </div>
        
        {/* Product Results */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group">
                  <div className="relative overflow-hidden rounded-lg mb-3 aspect-[3/4]">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-white text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition duration-300">
                        Quick View
                      </button>
                    </div>
                  </div>
                  <h3 className="font-medium text-gray-900">{product.name}</h3>
                  <p className="text-gray-700">${product.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <p className="text-gray-600">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;