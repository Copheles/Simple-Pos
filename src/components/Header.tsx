import CartComponent from "./CartComponent";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="py-2 flex items-center justify-between gap-1">
      <Logo />
      <CartComponent />
    </div>
  );
}
