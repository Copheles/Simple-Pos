export default function CheckoutFallback() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 my-2">

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Items */}
        <div className="lg:w-2/3">
          {/* Column Headers */}
          <div className="grid grid-cols-12 gap-4 border-b border-gray-200 pb-4 mb-4">
            <div className="col-span-6 h-4 bg-gray-200 rounded"></div>
            <div className="col-span-3 h-4 bg-gray-200 rounded"></div>
            <div className="col-span-3 h-4 bg-gray-200 rounded"></div>
          </div>

          {/* Cart Items */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="grid grid-cols-12 gap-4 py-4 border-b border-gray-200"
            >
              <div className="col-span-6 flex items-center gap-4">
                <div className="w-20 h-16 bg-gray-200 rounded"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                  <div className="h-3 bg-gray-200 rounded w-24"></div>
                </div>
              </div>
              <div className="col-span-3 flex items-center justify-center gap-2">
                <div className="h-8 w-8 bg-gray-200 rounded"></div>
                <div className="h-8 w-8 bg-gray-200 rounded"></div>
                <div className="h-8 w-8 bg-gray-200 rounded"></div>
              </div>
              <div className="col-span-3 flex items-center justify-end gap-2">
                <div className="h-4 bg-gray-200 rounded w-12"></div>
                <div className="h-6 w-6 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Summary */}
        <div className="lg:w-1/3">
          <div className="border border-gray-300 rounded-lg p-6 h-fit">
            {/* Summary Header */}
            <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>

            {/* Summary Items */}
            <div className="space-y-4 mb-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex justify-between">
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                </div>
              ))}
            </div>

            {/* Discount Code */}
            <div className="flex mb-6">
              <div className="flex-1 h-10 bg-gray-200 rounded-l"></div>
              <div className="w-20 h-10 bg-gray-200 rounded-r"></div>
            </div>

            {/* Total */}
            <div className="flex justify-between border-t border-gray-200 pt-4 mb-6">
              <div className="h-5 bg-gray-200 rounded w-16"></div>
              <div className="h-5 bg-gray-200 rounded w-20"></div>
            </div>

            {/* Checkout Button */}
            <div className="h-12 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
