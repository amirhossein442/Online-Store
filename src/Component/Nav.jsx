import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

export const Nav = () => {
  const { cartItems } = useContext(ShopContext);
  const itemCount = cartItems.reduce((total, items) => total + items.count, 0);
  return (
    <div className="nav">
      <h2 className="title">Amirhossein</h2>

      <div style={{ display: "flex" }}>
        <Link to={"/"}>Shop</Link>
        <Link to={"/card"} style={{ position: "relative", marginRight: "22px"}}>
          Card
        </Link>
        {itemCount > 0 && (
          <span
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              marginRight: "5px",
              fontSize: "12px",
              backgroundColor: "red",
              color: "#fff",
              border: "1px solid red",
              borderRadius: "25px",
              padding: "2px 5px",
            }}
          >
            {itemCount}
          </span>
        )}
      </div>
    </div>
  );
};
