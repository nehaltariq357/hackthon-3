import Link from "next/link";

export default function Cancel() {
  return (
    <main className="px-4 sm:px-6 lg:px-20 min-h-screen bg-gray-50 text-black flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 text-red-600">
        Payment Canceled
      </h1>
      <p className="text-gray-700 text-lg mb-8">
        You can return to your cart and try again.
      </p>
      <Link href={`/`}>
        <button className="px-6 py-3 bg-customGreen text-white font-medium rounded-md hover:bg-green-500 transition duration-200">
          Go to Home
        </button>
      </Link>
    </main>
  );
}
