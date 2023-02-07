import React, { useEffect, useState } from 'react'
import { getCartItems, sumPrices, removeCard } from '../functions'
import "./CheckoutStyles.css"



function Checkout() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const products = getCartItems()
    setItems(products)
  },[])

  return (
    <div className='checkout'>
      <h2>Checkout</h2>

      <div >
        {items.map((item) => (
          <div key={item.id} className='item'>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <button onClick={()=>removeCard(item.id)}>Remove Item</button>
          </div>
        ))}
      </div>

      <p  className='price'>Total: <span>{sumPrices(items)}</span></p>
    </div>



  )
}

export default Checkout