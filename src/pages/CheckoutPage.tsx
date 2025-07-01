import { useEffect, useState } from "react";
import { useCart } from "../context/cartContext";
import CheckoutFallback from "../components/Order/CheckoutFallback";
import OrderSuccess from "../components/Order/OrderSuccess";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);
  const [successPrice] = useState(() =>
    cart.items.length > 0 ? cart.totalPrice : 0
  );

  const handleCheckoutSuccess = () => {
    clearCart();
    setIsSuccess(true);
  };

  useEffect(() => {
    if (cart.items.length > 0) {
      const timer = setTimeout(handleCheckoutSuccess, 2000);
      return () => clearTimeout(timer);
    }
  }, [cart.items.length]);

  return (
    <div className="w-full">

      <div className="max-w-screen-lg mx-auto p-4">
        {!isSuccess ? (
          <CheckoutFallback />
        ) : (
          <OrderSuccess totalPrice={successPrice} />
        )}
      </div>
    </div>
  );
}
