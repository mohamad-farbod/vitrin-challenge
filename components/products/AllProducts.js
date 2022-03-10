import React, { useState } from 'react'

const AllProducts = ({ onProductIdSubmit }) => {
  const [productId, setProductId] = useState('')

  return (
    <div className="mx-auto my-8 w-full">
      <label htmlFor="productId" className="mx-2">
        {' '}
        Please insert Your Product ID
      </label>
      <input
        className="mx-2 border border-gray-600"
        name="productId"
        type="text"
        value={productId}
        onChange={(e) => {
          setProductId(e.target.value)
        }}
      />
      <button
        onClick={() => onProductIdSubmit(productId)}
        className="rounded-md bg-gray-800 px-2 py-1 text-white"
      >
        submit
      </button>
    </div>
  )
}

export default AllProducts
