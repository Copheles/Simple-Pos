import { IoMdClose } from "react-icons/io";
import type { CartItem } from "../../data/products";
import { toTwoDecimals } from "../../utils/cartUtils";
import { useCart } from "../../context/cartContext";

type CartItemProps = {
  item: CartItem;
};

export default function CartItem({ item }: CartItemProps) {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();
  return (
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
          <p className="font-semibold text-xs lg:text-sm">{item.name}</p>
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
        <div className="px-2 lg:px-4 py-2 text-sm lg:text-sm border-t border-b border-gray-300">
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
        <div className="font-medium text-xs lg:text-sm">
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
  );
}
