import React from 'react';
import { useParams } from 'react-router-dom';

// Mock product data
const products = {
  'ethnic': [
    { id: 1, name: 'Embroidered Anarkali Suit', price: 89.99, image: 'https://images.unsplash.com/photo-1610030469668-8e4a7c2f1e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
    { id: 2, name: 'Banarasi Silk Saree', price: 129.99, image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
    { id: 3, name: 'Lehenga Choli Set', price: 199.99, image: 'https://images.unsplash.com/photo-1610030469668-8e4a7c2f1e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
    { id: 4, name: 'Palazzo Suit', price: 69.99, image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
  ],
  'western': [
    { id: 5, name: 'Floral Maxi Dress', price: 59.99, image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
    { id: 6, name: 'Denim Jumpsuit', price: 79.99, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80' },
    { id: 7, name: 'Wrap Midi Dress', price: 49.99, image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
    { id: 8, name: 'Bodycon Dress', price: 45.99, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80' },
  ],
  'party-wear': [
    { id: 9, name: 'Sequin Cocktail Dress', price: 89.99, image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1008&q=80' },
    { id: 10, name: 'Velvet Gown', price: 129.99, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1983&q=80' },
    { id: 11, name: 'Satin Slip Dress', price: 69.99, image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1008&q=80' },
    { id: 12, name: 'Embellished Mini Dress', price: 79.99, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1983&q=80' },
  ],
  'coat-sets': [
    { id: 13, name: 'Trench Coat Set', price: 149.99, image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
    { id: 14, name: 'Wool Coat & Dress', price: 179.99, image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
  ],
  'semi-party': [
    { id: 15, name: 'Chiffon Midi Dress', price: 59.99, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1983&q=80' },
    { id: 16, name: 'Pleated Skirt Set', price: 69.99, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1983&q=80' },
  ],
  'casual': [
    { id: 17, name: 'Cotton Sundress', price: 39.99, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80' },
    { id: 18, name: 'T-shirt Dress', price: 29.99, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1020&q=80' },
  ],
};

// Category titles mapping
const categoryTitles: Record<string, string> = {
  'ethnic': 'Ethnic Wear',
  'western': 'Western Wear',
  'party-wear': 'Party Wear',
  'coat-sets': 'Coat Sets',
  'semi-party': 'Semi-Party Wear',
  'casual': 'Casual Wear',
};

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const categoryProducts = categoryName ? products[categoryName as keyof typeof products] || [] : [];
  const title = categoryName ? categoryTitles[categoryName] || categoryName : '';

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 capitalize">{title}</h1>
      
      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categoryProducts.map((product) => (
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
          <p className="text-gray-600">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;