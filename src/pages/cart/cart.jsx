import React,{useContext} from 'react'
import { ShopContext } from '../../context/shop-context';
import { PRODUCTS } from '../../products';
import CartItem from './cart-item';

import { useNavigate } from 'react-router-dom';

import './cart.css'

  
const Cart = (props) => {

  const {cartItems, getTotalCartAmount}= useContext(ShopContext); //ako sakamo sea da koristimo primer addToCart od shop-context
    //ovde ni treba cartItems za da proverimo ako e pogolema vrednosta od 0 da se prikaze u Cart
    //deka ako e 0 fakticki ne smo go staele proizvodot u Cart

  const totalAmout= getTotalCartAmount();

  const navigate=useNavigate();

  return (
    <div className='cart'>
      <div className=''>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product)=>{
          if(cartItems[product.id] !== 0 ){
            return <CartItem data={product}/>
          }
        })}
      </div>
      {totalAmout>0 ? 
      <div className='checkout'>
        <p className='subtotal'>Subtotal: $ {totalAmout}</p>
        <button className='btn' onClick={()=>navigate('/')}>Continue Shopping</button>
        <button className='btn'>Checkout</button>
      </div>
      : <h1>Your Cart Is Empty</h1>
    }
    </div>
  )
}

export default Cart
