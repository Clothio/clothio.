import React from 'react';

const WishlistPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <p className="text-gray-600">Your wishlist is empty. Start adding items you love!</p>
      </div>
    </div>
  );
};

export default WishlistPage;