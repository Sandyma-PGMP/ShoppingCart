import React from "react";
import "./Product.css";
export default function Product({
    product={},
    addToCart = () => {}, 
    disabled=false
  }) {
  const name =
    product.title.length > 10
      ? product.title.substring(0, 20) + "..."
      : product.name;
  return (
    <div className="product">
      <div className="img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <p>Price:{product.price}</p>
        <button onClick={(e)=>addToCart(e,product)} disabled={disabled}>Add to Cart</button>
        
      </div>
    </div>
  );
}
