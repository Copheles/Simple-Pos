import CartItems from "./CartItems";
import CartSummary from "./CartSummary";

export default function CartBox() {
  return (
    <div className="my-8 flex flex-col min-h-[calc(100vh-210px)] gap-5 lg:flex-row lg:justify-between flex-grow ">
      <CartItems />
      <CartSummary />
    </div>
  );
}
