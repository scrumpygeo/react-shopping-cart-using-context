import React, { useContext } from 'react'
import CartContext from '../context/cart/CartContext'

const Navbar = () => {
  const { cartItems, showHideCart } = useContext(CartContext)
  const total = cartItems.reduce((a, c) => (a += c.qty), 0)

  return (
    <nav>
      <div className='nav_left'>Art Store</div>
      <div className='nav_right'>
        <div className='cart_icon'>
          <i className='fa fa-shopping-cart' onclilck={showHideCart}></i>
          {cartItems.length > 0 && (
            <div className='item_count'>
              <span>{total}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
