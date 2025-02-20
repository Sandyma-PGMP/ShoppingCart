import React from 'react'
import CartProduct from './CartProduct'


export default function CartFunc({data=[],quantityChange = () => {},Total=0,removefromcart=()=>{}}) {
  return (
    <div>
        <h5 className='mb-2'>Cart Details:</h5>
      {data.map((product,index)=>{
        return(
            <CartProduct key={index} product={product} quantityChange={quantityChange} removefromcart={removefromcart}/>
        )
      })}
      <h3 className="text-end"> Total Amount after discount: <span>Rs {Total}</span></h3>
    </div>
  )
}
