import { createContext, useState } from "react";
import { useEffect } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props)=>{
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        const data = localStorage.getItem("items");
        if (data) {
          setCartItems(JSON.parse(data));
          console.log(data)
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem("items", JSON.stringify(cartItems));
      }, [cartItems]);

    const addToCart = (ID)=>{
        const itemExists= cartItems.find((items)=> items.id === ID)
        if (itemExists) {
            setCartItems(cartItems.map((item) =>
                item.id === ID ? { ...item, count: item.count + 1 } : item
            ));
        } else {
            setCartItems([...cartItems, {id: ID, count: 1}])
        }
    }

    const removeFromCart = (ID)=>{
        setCartItems(cartItems.map((item)=>{
            if (item.id === ID) return {...item, count:item.count=== 0? 0: item.count - 1}
            return item;
        }))
    }

    const resetCart = () => {
        setCartItems([]);
        localStorage.removeItem("items");
    }
    const contextValue = {cartItems, addToCart, removeFromCart, resetCart}

    return <ShopContext.Provider value={contextValue}>
        {props.children}
        {console.log(cartItems)}
    </ShopContext.Provider>

}