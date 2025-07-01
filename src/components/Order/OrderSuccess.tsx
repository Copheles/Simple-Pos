import { Link } from "react-router-dom";

export default function OrderSuccess({ totalPrice }: { totalPrice: number}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-10">
      <div className="relative">
        <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-12 h-12 text-indigo-600 animate-checkmark"
            viewBox="0 0 52 52"
          >
            <path
              className="animate-checkmark-stroke"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-3">
        Order Successful!
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Thank you for your purchase. Your order has been placed successfully.
      </p>

      <div className="bg-white rounded-xl shadow-sm p-6 w-full max-w-md mb-8">
        <div className="flex justify-between border-b border-gray-100 pb-4 mb-4">
          <span className="text-gray-500">Order Number</span>
          <span className="font-medium">
            #{Math.floor(Math.random() * 1000000)}
          </span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-gray-500">Date</span>
          <span className="font-medium">{new Date().toLocaleDateString()}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-gray-500">Total</span>
          <span className="font-medium">${totalPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Payment Method</span>
          <span className="font-medium">Credit Card</span>
        </div>
      </div>

      <Link
        to="/"
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 px-8 rounded-lg transition duration-200"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
