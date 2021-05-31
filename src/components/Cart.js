import React, { useContext } from 'react'
import CartContext from '../context/cart/CartContext'
import CartItem from './CartItem'

const Cart = () => {
  const { showCart, cartItems, showHideCart, clearCart } =
    useContext(CartContext)

  return (
    <>
      {showCart && (
        <div className='cart_container'>
          <div className='cart_header'>
            <button className='cart_btn' onClick={clearCart}>
              Clear Cart
            </button>
            <i
              className='fa fa-times-circle'
              style={{ cursor: 'pointer' }}
              onClick={showHideCart}
            ></i>
          </div>

          <div className='cart_innerContainer'>
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map((item, index) => (
                  <CartItem key={index} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className='cart_cartTotal'>
            <div>Cart Total</div>
            <div></div>
            <div style={{ marginLeft: 5 }}>
              £
              {cartItems.reduce(
                (amount, item) => (amount += item.price * item.qty),
                0
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Cart
