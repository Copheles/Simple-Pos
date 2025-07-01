import { GrBasket } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cartContext";

export default function CartComponent() {
  const navigate = useNavigate();
  const { totalItems } = useCart();

  const handleClick = () => {
    navigate("/cart");
  };

  return (
    <div
      className="w-10 h-10 relative flex justify-center items-center cursor-pointer border border-gray-200 rounded-lg hover:bg-gray-100"
      onClick={handleClick}
    >
      <GrBasket className="text-xl text-gray-500" />
      {totalItems !== 0 && (
        <span className="absolute rounded-full flex items-center justify-center bg-indigo-500 w-4 h-4 -top-1 -right-1 text-[10px] font-semibold text-white">
          {totalItems}
        </span>
      )}
    </div>
  );
}
