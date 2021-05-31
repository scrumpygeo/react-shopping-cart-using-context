import React, { useContext } from 'react'
import CartContext from '../context/cart/CartContext'

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext)
  return (
    <li className='cartItem_item'>
      <img src={item.image} alt='' />
      <div>
        {item.name} £{item.price} Qty: {item.qty}
      </div>
      <button className='cartItem_btn' onClick={() => removeItem(item.id)}>
        Remove
      </button>
    </li>
  )
}

export default CartItem
