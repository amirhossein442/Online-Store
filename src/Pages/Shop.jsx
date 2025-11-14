import React, { useContext } from "react";

import { ShopContext } from "../Context/ShopContext";
import { Products } from "../Component/Products";
export const Shop = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <React.Fragment>
      <h1 className={`text-3xl font-bold text-center my-8`}>Shop</h1>

      <div className=" px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Products.map((p) => {
          const isInCart = cartItems?.some(
            (items) => items.id === p.id && items.count > 0
          );
          return (
            <div
              key={p.id}
              className=" shop bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center p-4 transition-transform transform hover:scale-105"
            >
              <img
                className="w-full h-48 object-cover rounded-md mb-4"
                src={p.productImage}
                alt={p.productName}
              />
              <h2 className="text-lg font-semibold text-gray-800">
                {p.productName}
              </h2>
              <p className="text-red-600 font-medium mb-4">${p.price}</p>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => addToCart(p.id)}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-3 py-1 rounded-md transition-colors"
                >
                  +
                </button>

                <span className="px-2 text-gray-700 font-medium">
                  {cartItems?.filter((row) => row.id === p.id)[0]?.count || 0}
                </span>

                {isInCart && (
                  <button
                    onClick={() => removeFromCart(p.id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-1 rounded-md transition-colors"
                  >
                    -
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
