import { Products } from "../Component/Products";
import { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";

export const ShowCartUi = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="shopMenu grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {cartItems.filter((item) => item.count > 0).length === 0 ? (
        <h2 className="text-center text-gray-400 text-xl font-semibold col-span-full">
          Cart is empty
        </h2>
      ) : (
        Products.map((p) => {
          const cartItem = cartItems.find((i) => i.id === p.id && i.count > 0);
          if (cartItem) {
            return (
              <div
                key={p.id}
                className="shop bg-white  shadow-md rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-200"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={p.productImage}
                  alt={p.productName}
                />
                <div className="p-4 flex flex-col items-center text-center">
                  <h2 className="text-lg font-semibold text-black">
                    {p.productName}
                  </h2>
                  <p className="text-black/50  mb-3">
                    {p.price}$
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => addToCart(p.id)}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg transition"
                    >
                      +
                    </button>

                    <span className="text-lg font-medium text-gray-800 ">
                      {cartItem.count}
                    </span>

                    <button
                      onClick={() => removeFromCart(p.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        })
      )}
    </div>
  );
};

