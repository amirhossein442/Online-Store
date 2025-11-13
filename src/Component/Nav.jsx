import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

export const Nav = ({darkMode}) => {
  const { cartItems } = useContext(ShopContext);
  const itemCount = cartItems.reduce((total, item) => total + item.count, 0);

  return (
    <nav className={`${darkMode? "bg-white text-black" :"bg-black text-white"} font-bold flex items-center justify-between px-6 py-4 shadow-md`}>
      <h2 className="text-xl font-semibold  font-serif">Amirhossein</h2>

      <div className="flex items-center gap-6 text-sm sm:text-base">
        <Link
          to="/"
          className="hover:text-gray-300 transition-colors duration-200"
        >
          Shop
        </Link>

        <div className="relative">
          <Link
            to="/card"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            Cart
          </Link>

          {itemCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-xs px-2 py-0.5 rounded-full">
              {itemCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};
