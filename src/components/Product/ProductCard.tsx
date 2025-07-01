import { useCart } from "../../context/cartContext";
import type { Product } from "../../data/products";
import { FiShoppingCart } from "react-icons/fi";

export default function ProductCard({
  id,
  name,
  price,
  category,
  imageUrl,
}: Product) {
  const [intValue, floatValue] = price.toString().split(".");
  const { addToCart } = useCart();

  const handleAddToCart = (id: number) => {
    const product = { id, name, price, category, imageUrl };
    addToCart(product);
  };

  return (
    <div
      key={id}
      className="group relative overflow-hidden rounded-lg p-3 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
    >
      {/* Image container */}
      <div className="relative overflow-hidden">
        <div className="flex flex-col items-center justify-center">
          <img
            src={imageUrl}
            alt={name}
            className="w-[110px] h-[120px] lg:w-[170px] lg:h-[180px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 cursor-pointer"
          />
        </div>
      </div>

      {/* Semi-transparent background for button area at bottom */}

      <div className="absolute top-0 left-0 right-0 h-15 bg-gradient-to-b from-black/20 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

      {/* <div className="absolute bottom-0 left-0 right-0 h-15 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div> */}

      {/* Add to Cart Button at bottom */}
      <div className="absolute top-3 right-0 flex items-end transform -translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          className="bg-white text-black p-3 rounded-full cursor-pointer hover:bg-gray-100 transition-colors duration-200 shadow-sm text-xl font-bold"
          onClick={() => handleAddToCart(id)}
        >
          <FiShoppingCart className="h-4 w-4 text-xl text-indigo-500" />
        </button>
      </div>

      <div className="mt-3 text-xs text-gray-500">
        <p>{category}</p>
      </div>
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-medium whitespace-nowrap overflow-hidden text-ellipsis text-sm pr-3">
          {name}
        </h2>
        <p className="text-xl">
          <span className="text-xs align-super text-gray-500">$</span>
          {intValue}
          <span className="text-xs align-super text-gray-500">
            .{floatValue}
          </span>
        </p>
      </div>
    </div>
  );
}
