import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center py-12">
      <div className="bg-indigo-50 p-8 rounded-full mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Your cart is empty
      </h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Looks like you haven't added anything to your cart yet
      </p>
      <Link
        to="/"
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-6 rounded-md transition duration-200"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
