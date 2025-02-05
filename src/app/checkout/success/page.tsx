"use client";
import Link from "next/link";
import { useState } from "react";
import { client } from "@/sanity/lib/client";
import { useAppSelector } from "../../redux/store/slice/hooks";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid"; 
export default function Success() {
  const [orderCreated, setOrderCreated] = useState(false);
  // Form state variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");

  const cartItems = useAppSelector((state) => state.cart.items);

  
  interface CartItem {
    id: string;
    quantity: number;
    price: number;
  }

  interface OrderData {
    _type: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    zipCode: string;
    phone: string;
    cartItems: {
      _key: string;
      _type: string;
      product: {
        _type: string;
        _ref: string;
      };
      quantity: number;
    }[];
    total: number;
    status: string;
    createdAt: string;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    ///// Validation
    if (!firstName || !lastName || !email || !address || !city || !zipCode || !phone) {
      toast.error("Please fill out all required fields.");
      return;
    }

    try {
      
      const orderData: OrderData = {
        _type: "order",
        firstName,
        lastName,
        email,
        address,
        city,
        zipCode,
        phone,
        cartItems: cartItems.map((item: CartItem) => ({
          _key: uuidv4(), 
          _type: "cartItem", 
          product: {
            _type: "reference",
            _ref: item.id,
          },
          quantity: item.quantity, 
        })),
        total: cartItems.reduce(
          (total: number, item: CartItem) => total + item.price * item.quantity,
          0
        ),
        status: "success", 
        createdAt: new Date().toISOString(),
      };

      console.log("Sending order to Sanity:", orderData); 

      const response = await client.create(orderData);
      console.log("Order created in Sanity:", response);

      setOrderCreated(true);
      toast.success("Order created successfully!");
    } catch (error) {
      console.error("Error creating order in Sanity:", error);
      toast.error("Failed to create order. Please try again.");
    }
  };

  return (
    <main className="px-4 sm:px-6 lg:px-20 pt-44 pb-10 h-[100%] bg-gray-50 text-black flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-green-600 mb-6">
        Payment Successful!
      </h1>
      <p className="text-gray-700 text-lg mb-8">
        Thank you for your purchase. Please fill out the form below to complete your order.
      </p>

      {/* Only show the form if the order hasn't been created yet */}
      {!orderCreated ? (
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
             
              required
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
              Zip Code
            </label>
            <input
              id="zipCode"
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-customGreen text-white font-medium rounded-md hover:bg-green-500 transition duration-200"
          >
            Submit Order
          </button>
        </form>
      ) : (
        // Optionally show a confirmation message or additional actions when the order is created.
        <div className="text-center">
          <p className="text-xl font-semibold mb-4">Your order has been successfully processed!</p>
          <Link href="/">
            <button className="px-6 py-3 bg-customGreen text-white font-medium rounded-md hover:bg-green-500 transition duration-200">
              Go to Home
            </button>
          </Link>
        </div>
      )}
      <ToastContainer />
    </main>
  );
}