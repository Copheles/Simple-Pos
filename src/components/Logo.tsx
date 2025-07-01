import { FaShopware } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div
      className="flex items-center space-x-2 cursor-pointer"
      onClick={handleClick}
    >
      <FaShopware className="text-indigo-500 text-2xl" />
      <h1 className="text-xl font-bold text-gray-800 tracking-tight">
        Simple<span className="text-gray-400"> Pos</span>
      </h1>
    </div>
  );
}
