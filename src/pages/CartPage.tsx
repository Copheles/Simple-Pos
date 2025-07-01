import { useCart } from "../context/cartContext";
import EmptyCart from "../components/Cart/EmptyCart";
import CartBox from "../components/Cart/CartBox";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="w-full">
      {cart.items.length === 0 ? <EmptyCart /> : <CartBox />}
    </div>
  );
}
