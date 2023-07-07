import React from 'react'
import './cartCard.css'

const CartCard = (props) => {
  return (
    <div className='card'>
      {props.children}
    </div>
  )
}

export default CartCard
