import React from 'react'

const Rating = ({ rating, text }) => {
  return (
    <div className='rating'>
      {[1, 2, 3, 4, 5].map((rate, index) => (
        <span key={index}>
          <i
            className={`
              ${
                rating + 1 === rate + 0.5
                  ? 'fas fa-star-half-alt'
                  : rating >= rate
                  ? 'fas fa-star'
                  : 'far fa-star'
              } star_style`}
          ></i>
        </span>
      ))}
      <span>{text && text}</span>
    </div>
  )
}

export default Rating
