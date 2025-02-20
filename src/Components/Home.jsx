import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./Home.css"

export default function Home({ data=[], addToCart=()=>{}}) {
  const [Products, setProducts] = useState([]);
  function isAddedToCart(cartSource = [], item = {}) {
    return cartSource.some((cartItem) => cartItem.id === item.id);
  }
  useEffect(() => {
    fakestore();
  }, []);
  const fakestore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
    setProducts(jsonData);
  };

  return (
    <div className="container">
      {Products.map((product)=>{
        return(
            <Product key={product.id} product={product} addToCart={addToCart} disabled={isAddedToCart(data,product)}  />
        )
      })}   
</div>
  );
}
