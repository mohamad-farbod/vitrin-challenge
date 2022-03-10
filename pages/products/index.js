import React from 'react'
import AllProducts from '../../components/products/AllProducts'
import { useRouter } from 'next/router'

const Products = () => {
  const router = useRouter()
  const onProductIdSubmitHandler = (productId) => {
    if (isNaN(productId) || productId > 20 || productId < 1) {
      alert('please enter a number between 1 and 20')
      return
    }
    router.push(`products/${productId}`)
  }

  return (
    <div>
      <AllProducts onProductIdSubmit={onProductIdSubmitHandler} />
    </div>
  )
}

export default Products
