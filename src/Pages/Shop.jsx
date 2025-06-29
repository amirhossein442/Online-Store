import React, { useContext } from "react"

import { ShopContext } from "../Context/ShopContext"
import { Products } from "../Component/Products"
export const Shop =()=>{
    
    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext)
    
    return(
        <React.Fragment>
            <h1>Shop</h1>
            <div className="shopMenu">
                {Products.map((p)=>{
                    const isInCart = cartItems?.some((items)=>items.id === p.id && items.count > 0)
                    return (
                        <div key={p.id} className="shop">
                            <img style={{width:'100%'}} src={p.productImage} alt={p.productName}/>
                            <h2>{p.productName}</h2>
                            <p>{p.price}$</p>
                            <button onClick={()=> addToCart(p.id)}>+</button>
                            <span>{cartItems?.filter((row)=> row.id === p.id)[0]?.count}</span>
                            {isInCart&&
                                <button onClick={()=> removeFromCart(p.id)}>-</button>
                            }
                        </div>
                    );
                })}
            </div>


        </React.Fragment>
    )
}