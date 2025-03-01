"use client";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("your-publishable-key-here");

const CartPage: React.FC = () => {
  const products = [
    { id: 1, name: "Product 1", price: 10.0 },
    { id: 2, name: "Product 2", price: 20.0 },
    { id: 3, name: "Product 3", price: 30.0 },
  ];

  const total = products.reduce((acc, product) => acc + product.price, 0);

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: products }),
    });

    const session = await response.json();

    const result = await stripe?.redirectToCheckout({
      sessionId: session.id,
    });

    if (result?.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center">My Cart</h1>
        <ul className="space-y-4">
          {products.map((product) => (
            <li key={product.id} className="flex justify-between">
              <span>{product.name}</span>
              <span>${product.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-bold text-center">
          Total: ${total.toFixed(2)}
        </h2>
        <button
          onClick={handleCheckout}
          className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
