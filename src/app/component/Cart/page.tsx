"use client";
import React from "react";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "../../redux/store/slice/hooks";
import { removeFromCart } from "../../redux/store/slice/cartSlice";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalAmount = useAppSelector((state) => state.cart.totalAmount);
  const dispatch = useAppDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item.id));
  };

  const handleWishlistItem = (item) => {
    console.log(`Item ${item.id} added to wishlist.`); // Replace with actual wishlist functionality
  };

  return (
    <main className="px-4 sm:px-6 lg:px-20 min-h-screen bg-white text-black pt-28">
      {/* Bag Header */}
      <h1 className="text-2xl sm:text-3xl font-bold my-8 sm:my-10">Bag</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items Section */}
        <div className="flex-1">
          {cartItems.length > 0 ? (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 border-b pb-5"
                >
                  {/* Product Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-md"
                  />

                  {/* Product Details */}
                  <div className="flex-1">
                    <h2 className="font-bold text-lg sm:text-xl">{item.title}</h2>
                    <p className="text-gray-500 text-sm sm:text-md">Ashen Slate/Cobalt Bliss</p>

                    {/* Actions */}
                    <div className="flex items-center gap-4 mt-4">
                      <button
                        onClick={() => handleWishlistItem(item)}
                        className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200"
                      >
                        Wishlist
                      </button>
                      <button
                      
                        onClick={() => handleRemoveItem(item)}
                        className="text-gray-500 hover:text-red-500"
                      >remove
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>

                  {/* Product Price */}
                  <div className="text-right">
                    <p className="font-bold text-lg sm:text-xl">MRP: ${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 mt-16 text-center">Your cart is empty.</p>
          )}
        </div>

        {/* Summary Section */}
        {cartItems.length > 0 && (
          <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-md">
            <h2 className="font-bold text-lg sm:text-xl mb-6">Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>${totalAmount.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p>Estimated Delivery & Handling</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between font-bold text-lg sm:text-xl">
                <p>Total</p>
                <p>${totalAmount.toFixed(2)}</p>
              </div>
            </div>

            <button
              className="mt-6 w-full bg-teal-500 text-white py-3 rounded-md text-center font-bold hover:bg-teal-600"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
