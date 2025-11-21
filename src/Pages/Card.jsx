import React from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Products } from "../Component/Products";
import { ShowCartUi } from "../Component/showUi";
import { FormControlContext } from "../Context/FormControl";

export const Card = () => {
  const { cartItems, resetCart } = useContext(ShopContext);
  const { user } = useContext(FormControlContext);

  const totalPrice = cartItems.reduce((acc, item) => {
    const product = Products.find((p) => p.id === item.id);
    console.log(cartItems);
    if (product && item.count > 0) {
      return acc + product.price * item.count;
    }
    return acc;
  }, 0);
  return (
    <div>
      {user && (
        <div>
          <h1 className="text-3xl font-bold text-center my-8">Your Cart</h1>
          <div className="flex items-center">
            {totalPrice > 0 && (
              <h2 className="ml-5 text-xl border border-white/20 shadow-lg p-4 rounded-xl ">
                Total Price: {totalPrice}$
              </h2>
            )}
            {cartItems.some((item) => item.count > 0) && (
              <button
                className="ml-5 font-bold  px-3 h-9 border border-transparent hover:border-gray-500 rounded-md  transition-colors duration-300"
                onClick={resetCart}
              >
                Reset
              </button>
            )}
          </div>

          <ShowCartUi />
        </div>
      )}
    </div>
  );
};
