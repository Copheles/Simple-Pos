import { useCart } from "../../context/cartContext";
import CartItem from "./CartItem";

export default function CartItems() {
  const { cart } = useCart();
  return (
    <div className="px-2 flex-grow">
      <div className="grid grid-cols-12 gap-4 border-b border-gray-200 pb-2 px-3 lg:px-0 font-medium">
        <div className="col-span-6 text-sm lg:text-lg">Item</div>
        <div className="col-span-3 text-center text-sm lg:text-lg">Qty</div>
        <div className="col-span-3 text-left text-sm lg:text-lg">Subtotal</div>
      </div>
      {cart.items.map((item) => (
        <CartItem item={item} />
      ))}
    </div>
  );
}
