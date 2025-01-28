"use client";

const Checkout = () => {
  return (
    <main className="px-4 sm:px-6 lg:px-20 min-h-screen bg-white text-black pt-28">
      <h1 className="text-2xl sm:text-3xl font-bold my-8 sm:my-10">Checkout</h1>
      <div className="bg-gray-100 p-6 rounded-md">
        <h2 className="font-bold text-lg sm:text-xl mb-6">Payment Details</h2>
        {/* Add your payment form or other checkout details here */}
        <p className="text-gray-600">This is where the payment process will go.</p>
      </div>
    </main>
  );
};

export default Checkout;
