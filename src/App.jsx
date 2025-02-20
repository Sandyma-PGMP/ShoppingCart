
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import { useMemo, useState } from 'react'
import CartFunc from './Components/Cart'


function App() {
  const [Cart,setCart]=useState([]);
  const cartTotal = useMemo(() => calculateCartQuantity(Cart), [Cart]);

  function handleAddToCart(e, data = {}) {
    e.stopPropagation();
    if (data) {
      setCart((prev) => [...prev, { ...data, quantity: 1 }]);
    }
  }
  function handleRemoveFromCart(data = {}) {
    if (data) {
      setCart(Cart.filter((item)=>item.id!==data.id));
    }
  }
  function handleCartQuantity(e, type = "", id = 0) {
    e.stopPropagation();

    const cartCopy = [...Cart];

    const matchingItem = cartCopy.find((item) => item.id === id);

    if (!matchingItem) {
      alert("Product Not Found");
      return;
    }

    if (type === "dec" && matchingItem["quantity"] > 1) {
      matchingItem["quantity"] -= 1;
    } else if (type === "inc") {
      matchingItem["quantity"] += 1;
    }

    setCart(cartCopy);
  }
  function calculateCartQuantity(items = []) {
    let totalCartPrice = 0;
    items.forEach((item) => {
      totalCartPrice += item.price * item.quantity*.90 ;
      totalCartPrice.toFixed(2);
      
    });
    return totalCartPrice;
  }
  

  return (
    <>
      <BrowserRouter>
      <Header length={Cart.length}/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home data={Cart} addToCart={handleAddToCart} />}/>
          <Route path="/cart" element={<CartFunc data={Cart} quantityChange={handleCartQuantity} Total={cartTotal} removefromcart={handleRemoveFromCart}/>}/>
        </Routes>
      </div>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
