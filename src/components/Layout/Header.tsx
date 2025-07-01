import CartComponent from "../Header/CartComponent";
import Logo from "../Header/Logo";

export default function Header() {
  return (
    <div className="py-2 px-2 lg:px-0 flex items-center justify-between gap-1 ">
      <Logo />
      <CartComponent />
    </div>
  );
}
