"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { useAppSelector, useAppDispatch } from "../../redux/store/slice/hooks";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/store/slice/cartSlice";
import NavBar from "../NavBar/page";

type CartItem = {
  id: string; 
  title: string;
  image: string;
  price: number;
  quantity: number;
};

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items) || []; 
  const totalAmount = useAppSelector((state) => state.cart.totalAmount);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleRemoveItem = (item: CartItem) => {
    dispatch(removeFromCart(item.id));
  };

  const handleIncreaseQuantity = (item: CartItem) => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecreaseQuantity = (item: CartItem) => {
    dispatch(decreaseQuantity(item.id));
  };

  // Calculate total quantity
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });

      if (!res.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { url } = await res.json();
      router.push(url);
    } catch (err) {
      console.error(err);
      alert("An error occurred while redirecting to Stripe checkout.");
    }
  };

  return (
    <main className="px-4 sm:px-6 lg:px-20 min-h-screen bg-white text-black pt-28">
      <NavBar cartCount={totalQuantity} /> 
      <h1 className="text-2xl sm:text-3xl font-bold my-8 sm:my-10">Bag</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          {cartItems.map((item) => (
            <div
              key={item.id} 
              className="flex items-center justify-between gap-4 border-b pb-5 relative"
            >
              <Image
                src={item.image || "/images/product1.png" || "/images/product2.png"}
                alt={item.title}
                width={100}
                height={100}
                className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-md"
              />

              <div className="flex-1">
                <h2 className="font-bold text-lg sm:text-xl">{item.title}</h2>
                <span className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </span>
                <div className="flex items-center gap-4 mt-4">
                  <button
                    onClick={() => handleDecreaseQuantity(item)}
                    className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(item)}
                    className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="font-bold text-lg sm:text-xl">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

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
            {/* checkout */}
            <div className="w-full flex justify-center">
              <button
                onClick={handleCheckout}
                className="mt-6 px-14 bg-customGreen text-white py-3 rounded-full text-center hover:bg-teal-600"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;