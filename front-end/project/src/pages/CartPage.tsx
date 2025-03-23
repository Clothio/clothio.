import React from "react";
import { useCart } from "../components/cartContext";

const CartPage: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cart.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cart.map((product) => (
            <div key={product.id} className="group border p-4 rounded-lg shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mb-3 rounded-lg"
              />
              <h3 className="font-medium text-gray-900">{product.name}</h3>
              <p className="text-gray-700">${product.price.toFixed(2)}</p>
              <button
                onClick={() => removeFromCart(product.id)}
                className="mt-3 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-600">Your cart is empty.</p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
