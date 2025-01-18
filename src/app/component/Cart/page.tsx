"use client";
import React from "react";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "../../redux/store/slice/hooks";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/store/slice/cartSlice";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalAmount = useAppSelector((state) => state.cart.totalAmount);
  const dispatch = useAppDispatch();

  return (
    <main
      className="px-4 sm:px-6 lg:px-20 min-h-screen bg-white text-black"
    >
      {/* Heading with proper margin */}
      <h1 className="text-2xl sm:text-3xl font-bold my-8 sm:my-10 py-10">
        Cart Items
      </h1>

      {/* Check if cart is empty or not */}
      {cartItems.length > 0 ? (
        <div className="space-y-6 mt-8">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between gap-4 border-b pb-5"
            >
              <div className="w-full md:w-3/4">
                <h2 className="font-bold text-lg sm:text-xl">{item.title}</h2>
                <p className="text-gray-500 text-sm sm:text-md">{`$${item.price}`}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 text-sm mt-3 hover:underline"
                >
                  Remove
                </button>
              </div>
              {/* Product Image */}
              <Image
                src={item.image}
                alt={item.title}
                width={450}
                height={450}
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-md"
              />
            </div>
          ))}
          {/* Total Amount */}
          <div className="font-bold text-xl sm:text-2xl mt-8 sm:mt-10">
            Total Amount:{" "}
            <span className="text-green-600">${totalAmount.toFixed(2)}</span>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 mt-16 text-center">Your cart is empty.</p>
      )}
    </main>
  );
};

export default Cart;
