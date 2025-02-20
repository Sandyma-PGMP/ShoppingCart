import React from 'react'
import "./CartProduct.css"
export default function CartProduct({product={},quantityChange = () => {}}) {
   
  return (
    <div className='cartproduct'>
        <div className="img">
            <img src={product.image} alt="" />
        </div>
        <div className="cartdetails">
            <h3>{product.title}</h3>
            <p>Price:{product.price}</p>
            <div className='btn-grp'>
                <button onClick={(e) => quantityChange(e, "dec", product.id)}>-</button>
                <p>{product.quantity}</p>
                <button onClick={(e) => quantityChange(e, "inc", product.id)}>+</button>
            </div>
        </div>
      
    </div>
  )
}
