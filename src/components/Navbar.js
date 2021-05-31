import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className='nav_left'>Art Store</div>
      <div className='nav_right'>
        <div className='cart_icon'>
          <i className='fa fa-shopping-cart'></i>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
