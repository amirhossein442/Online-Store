import React from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Products } from "../Component/Products";
import { ShowCartUi } from "../Component/showUi";

export const Card = () => {
  const { cartItems, addToCart, removeFromCart, resetCart } =
    useContext(ShopContext);

  const totalPrice = cartItems.reduce((acc, item) => {
    const product = Products.find((p) => p.id === item.id);
    console.log(product);
    if (product && item.count > 0) {
      return acc + product.price * item.count;
    }
    return acc;
  }, 0);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">Your Cart</h1>
      {totalPrice > 0 && <h2>Total Price: {totalPrice}$ </h2>}
      <button onClick={resetCart}>Reset</button>
      <ShowCartUi />
    </div>
  );
};
