import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "../Header/Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900  text-gray-300 mt-5">
      <div className="max-w-screen-lg mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Shop Section */}
          <div>
            <h3 className="text-indigo-400 font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition">
                  Special Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-indigo-400 font-semibold text-lg mb-4">Help</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-white transition">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-white transition">
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-indigo-400 font-semibold text-lg mb-4">
              About
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-indigo-400 font-semibold text-lg mb-4">
              Stay Connected
            </h3>
            <p className="mb-4 text-sm">
              Subscribe to our newsletter for the latest updates
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full text-sm bg-gray-200 rounded-l focus:outline-none text-gray-900"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r text-white transition">
                Join
              </button>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 gap-3 flex flex-col md:flex-row justify-between items-center">
          <Logo />
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Simple Pos. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
