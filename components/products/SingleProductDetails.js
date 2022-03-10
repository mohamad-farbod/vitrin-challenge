import Image from 'next/image'
import React from 'react'
import { GrBasket } from 'react-icons/gr'
import RatingStars from './../../tools/RatingStars'

const SingleProductDetails = ({ onProductOrderClick, ...props }) => {
  const { product } = props
  const { category, description, image, price, title, rating, id } = product
  const rate = rating.rate
  return (
    <div className="h-88 m-4 rounded-lg  bg-gray-300 px-8 py-4 md:mx-12 lg:mx-36  lg:py-24 lg:px-24 ">
      <div className=" flex-col items-center justify-center rounded-lg bg-white px-4 md:flex-row  lg:flex lg:px-12 ">
        <div className="my-auto flex  w-full items-center justify-center p-2 lg:w-1/3 lg:border-r lg:border-black">
          <Image src={image} alt={title} width={300} height={500} />
        </div>
        <div className="w-full py-4  lg:w-2/3 lg:py-16 lg:pl-8">
          <div className="mb-2 flex items-start justify-between  text-xl lg:text-2xl">
            <div className="w-3/4 uppercase text-gray-900">{title}</div>
            <div className="w-24 lg:w-36 ">
              <RatingStars value={rate} />
            </div>
          </div>
          <div className="uppercase italic text-gray-500">{category}</div>
          <div>
            <span className=" text-gray-600 line-through">
              ${(price * 1.2).toFixed('2')}
            </span>
            <span className="ml-4 text-red-600">${price}</span>
          </div>
          <div className="mt-2 border-t-2 border-gray-700 lg:mt-12 lg:border-none">
            {' '}
            <h1 className="pt-2 font-bold">DESCRIPTION</h1>
            <p className="mt-2  text-gray-700">{description}</p>
          </div>
          <div className="my-2 border-t-2 border-gray-700 lg:border-none">
            <button className="mx-auto mt-2 flex w-36 items-center justify-start rounded-md bg-red-400 p-2 text-center text-sm text-white hover:bg-red-700 lg:mx-0 lg:mt-12 lg:w-48 lg:p-3 lg:text-center">
              <div className="pl-2 ">
                <GrBasket />
              </div>
              <div className="px-2" onClick={() => onProductOrderClick(id)}>
                {' '}
                ADD TO CART
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProductDetails
