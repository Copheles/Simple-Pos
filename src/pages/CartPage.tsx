import Header from "../components/Header";
import { IoMdClose } from "react-icons/io";
import { useCart } from "../context/cartContext";
import { toTwoDecimals } from "../utils/cartUtils";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();

  console.log("Cart: ", cart);

  return (
    <div className="max-w-screen-lg w-full mx-auto p-2">
      <Header />

      {cart.items.length === 0 ? (
        <div></div>
      ) : (
        <div className="my-8 flex flex-col gap-5 lg:flex-row">
          <div className="px-2">
            <div className="grid grid-cols-12 gap-4 border-b border-gray-200 pb-2 font-medium">
              <div className="col-span-6 text-sm lg:text-lg">Item</div>
              <div className="col-span-3 text-center text-sm lg:text-lg">
                Qty
              </div>
              <div className="col-span-3 text-left text-sm lg:text-lg">
                Subtotal
              </div>
            </div>
            {cart.items.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-12 gap-4 py-4 border-b border-gray-200"
              >
                <div className="col-span-6 flex items-center gap-4">
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="w-[100px] h-[80px] lg:w-[120px] lg:[100px]"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-xs lg:text-md">
                      {item.name}
                    </p>
                    <p className="text-[10px] lg:text-sm text-gray-500">
                      {item.category}
                    </p>
                  </div>
                </div>

                <div className="col-span-3 flex items-center justify-center">
                  <button
                    className="px-2 py-1 border border-gray-200 rounded-l cursor-pointer hover:bg-gray-100"
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>
                  <div className="px-2 lg:px-4 py-2 text-sm lg:text-md border-t border-b border-gray-300">
                    {item.quantity}
                  </div>
                  <button
                    className="px-2 py-1 border border-gray-200 rounded-r cursor-pointer hover:bg-gray-100"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>
                </div>

                <div className="col-span-3 flex items-center justify-between">
                  <div className="font-medium text-xs lg:text-md">
                    $ {toTwoDecimals(item.price * item.quantity)} 
                  </div>
                  <button
                    className="ml-4 cursor-pointer border border-gray-200 p-1 rounded-lg hover:bg-gray-100"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <IoMdClose />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="border border-gray-300 rounded-lg p-5 lg:p-10 h-fit">
            <h2 className="text-sm lg:text-lg font-semibold mb-4">Summary</h2>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-xs lg:text-sm font-medium text-gray-800">
                  Subtotal
                </span>
                <span className="font-semibold text-sm lg:text-md">
                  $ {cart.itemsPrice}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs lg:text-sm font-medium text-gray-800">
                  Shipping Cost
                </span>
                <span className="font-semibold text-sm lg:text-md">
                  $ {cart.shippingPrice}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs lg:text-sm font-medium text-gray-800">
                  Tax ({5}%)
                </span>
                <span className="font-semibold text-sm lg:text-md">
                  $ {cart.taxPrice}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Discount Code"
                  className="flex-1 px-2 py-1 border border-gray-300 rounded-l focus:outline-none focus:ring-0"
                />
                <button className="bg-indigo-600 text-white px-3 py-1 rounded-r cursor-pointer hover:bg-cyan-700">
                  Apply
                </button>
              </div>
            </div>

            <div className="flex justify-between font-semibold text-lg border-t border-gray-300 pt-4">
              <span className="text-sm lg:text-sm">Total</span>
              <span className="text-sm lg:text-sm">$ {cart.totalPrice}</span>
            </div>

            <button className="w-full bg-black text-white py-2 mt-3 rounded cursor-pointer hover:bg-gray-800 lg:py-3 lg:mt-6">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
