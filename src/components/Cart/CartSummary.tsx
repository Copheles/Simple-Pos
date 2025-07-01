import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cartContext";

export default function CartSummary() {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="border border-gray-300 rounded-lg p-4 lg:p-8 h-fit">
      <h2 className="text-sm lg:text-lg font-semibold mb-4">Summary</h2>

      <div className="space-y-5 mb-4">
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
          <button className="bg-indigo-600 text-white px-3 py-1 rounded-r cursor-pointer hover:bg-indigo-700">
            Apply
          </button>
        </div>
      </div>

      <div className="flex justify-between font-semibold text-lg border-t border-gray-300 pt-4">
        <span className="text-sm lg:text-sm">Total</span>
        <span className="text-sm lg:text-sm">$ {cart.totalPrice}</span>
      </div>

      <button
        className="w-full bg-black text-white py-2 mt-3 rounded cursor-pointer hover:bg-black/80 lg:py-3 lg:mt-6"
        onClick={() => navigate("/checkout")}
      >
        Checkout
      </button>
    </div>
  );
}
