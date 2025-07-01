import { FaFacebook, FaTwitter } from "react-icons/fa";
import { LuCircleUserRound } from "react-icons/lu";

export default function TopBanner() {
  return (
    <div className="bg-gray-900 text-white px-2 lg:px-4 py-3 flex items-center justify-between">
      <div className="flex items-center justify-between max-w-screen-lg w-full mx-auto">
        <div className="flex items-center p-1 gap-5">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaTwitter size={20} />
          </a>
        </div>
        <div>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <LuCircleUserRound size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
