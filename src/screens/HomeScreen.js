import React from 'react'
import ProductCard from '../components/ProductCard'
import products from '../data/data'

const HomeScreen = () => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default HomeScreen
