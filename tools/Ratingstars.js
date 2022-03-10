import ReactStars from 'react-rating-stars-component'

import React from 'react'

const RatingStars = ({ value }) => {
  const starSettings = {
    size: '32px',
    value,
    color2: '#ff0000',
    count: 5,
    edit: false,
    isHalf: true,
  }
  return (
    <div className="">
      <ReactStars {...starSettings} />
    </div>
  )
}

export default RatingStars
