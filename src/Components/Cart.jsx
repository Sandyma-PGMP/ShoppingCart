import React from 'react'
import CartProduct from './CartProduct'


export default function CartFunc({data,quantityChange = () => {},Total=0}) {
    console.log(Total)
    function calculateCartQuantity(items = []) {
        let totalCartPrice = 0;
        items.forEach((item) => {
          totalCartPrice += item.price * item.quantity;
        });
        return totalCartPrice;
      }  
  return (
    <div>
        <h5 className='mb-2'>Cart Details:</h5>
      {data.map((product)=>{
        return(
            <CartProduct key={product.id} product={product} quantityChange={quantityChange}/>
        )
      })}
      <h3 className="text-end"> Total Amount after discount: <span>Rs {Total}</span></h3>
    </div>
  )
}
