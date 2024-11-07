import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
// import { InventoryContext } from "../InventoryContext";
import { InventoryContext } from "./Inventory";

const Product = () => {
  const { inventory } = useContext(InventoryContext);
  const dispatch = useDispatch();

  return (
    <div className="product-container">
      {inventory.map((item) => (
        <div className="product-card" key={item.id}>
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <p>${item.price}</p>
          <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
