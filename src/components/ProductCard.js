import React, { useContext } from 'react'
import Rating from './Rating'
import CartContext from '../context/cart/CartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext)
  return (
    <div className='productCard_container'>
      <img src={product.image} alt={product.name} className='productCard_img' />
      <h4>{product.name}</h4>
      <div>
        <h5 className='productCard_price'>£{product.price}</h5>
      </div>
      <div className='productCard_rating'>
        <Rating
          rating={product.rating}
          text={`${product.numReviews} reviews`}
        />
      </div>
      <div className='productCard_btn' onClick={() => addToCart(product)}>
        Add to Cart
      </div>
    </div>
  )
}

export default ProductCard
