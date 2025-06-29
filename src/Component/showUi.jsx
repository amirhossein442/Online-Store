import { Products } from "../Component/Products";
import { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";

export const ShowCartUi = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="shopMenu">
      {cartItems.filter((item) => item.count > 0).length === 0 ? (
        <h2>Cart is empty</h2>
      ) : (
        Products.map((p) => {
          const cartItem = cartItems.find((i) => i.id === p.id && i.count > 0);
          if (cartItem) {
            return (
              <div key={p.id} className="shop">
                <img
                  style={{ width: "100%" }}
                  src={p.productImage}
                  alt={p.productName}
                />
                <h2>{p.productName}</h2>
                <p>{p.price}$</p>
                <button onClick={() => addToCart(p.id)}>+</button>
                <span>{cartItem.count}</span>
                <button onClick={() => removeFromCart(p.id)}>-</button>
              </div>
            );
          }
        })
      )}
    </div>
  );
};
