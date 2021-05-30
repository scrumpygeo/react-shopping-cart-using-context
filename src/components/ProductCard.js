import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className='productCard_container'>
      <img src={product.image} alt={product.name} className='productCard_img' />
      <h4>{product.name}</h4>
      <div>
        <h5>£{product.price}</h5>
      </div>
      <div className='productCard_btn'>Add to Cart</div>
    </div>
  )
}

export default ProductCard
