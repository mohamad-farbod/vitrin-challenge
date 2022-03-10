import Head from 'next/head'
import React from 'react'
import SingleProductDetails from '../../components/products/SingleProductDetails'
const ProductsDetail = ({ productData }) => {
  const onProductOrderClickHandler = (id) => {
    alert(`You successfully ordered the product with ID ${id}`)
  }

  if (!productData) {
    return (
      <div className="w mx-auto mt-4 w-1/4 bg-red-500 p-3 text-center text-black">
        <h1>Something went Wrong!</h1>
      </div>
    )
  }
  return (
    <>
      <Head>
        <title>{productData.title}</title>
        <meta name="description" content={productData.description} />
      </Head>

      <SingleProductDetails
        product={productData}
        onProductOrderClick={onProductOrderClickHandler}
      />
    </>
  )
}

export default ProductsDetail

export async function getServerSideProps(context) {
  const { id } = context.params
  let productData = []
  try {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`)
    productData = await data.json()
  } catch (error) {
    productData = null
  }

  return { props: { productData } }
}
