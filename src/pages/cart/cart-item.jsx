import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
import './cartItem.css'
import CartCard from '../../components/UI/cartCard/cartCard';

const CartItem = (props) => {

    const {id, productName, price, image}= props.data;
    const {addToCart,cartItems, removeFromCart, updateCartItemAmout}= useContext(ShopContext);

    const cartItemAmount=cartItems[id];

  return (
    <CartCard>
    <div className='cartItem'>
      <img src={image}/>
      <div className='description'>
            <p className='productNamee'><b>{productName}</b></p>
            <p className='productPricee'> ${price}</p>
            <div className='cartItemAmount'>
                <button className='amountBtn' onClick={()=>{removeFromCart(id)}}>-</button> 
                <input value={cartItemAmount} onChange={(e)=>updateCartItemAmout(Number(e.target.value), id)}></input>
                <button className='amountBtn' onClick={()=>{addToCart(id)}}>+</button>
            </div>
      </div>
    </div>
    </CartCard>
  )
}

export default CartItem
