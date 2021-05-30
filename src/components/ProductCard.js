import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.name} />
    </div>
  )
}

export default ProductCard
