import { useState, useEffect } from "react";

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("cortsShop");
    if (data) {
      setCartItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cortsShop", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemsId) => {
    const itemExists = cartItems.find((i) => i.id === itemsId);
    if (itemExists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === itemsId
            ? { ...item, count: item.count + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { id: itemsId, count: 1 }]);
    }
  };

  const removeFromCart = (ID) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === ID)
          return { ...item, count: item.count === 0 ? 0 : item.count - 1 };
        return item;
      })
    );
  };

  return { cartItems, addToCart, removeFromCart };
};
