import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
import './product.css'

const Product = (props) => {
    
    const {id, productName, price, image}= props.data;
    const {addToCart, cartItems}= useContext(ShopContext); //ako sakamo sea da koristimo primer addToCart od shop-context
    //kje napisemo toa sto sakamo da koristimo megju { --- }

    const cartItemAmount=cartItems[id]; // da go zememo cartItems za specific ID

  return (
    <div className='product'>
      <img src={image} alt='image'/>
      <div>
        <p className='productName'>{productName}</p>
        <p className='productPrice'>${price}</p>
      </div>
      <button className='addToCartBtn' onClick={()=>addToCart(id)}>
        Add To Cart {cartItemAmount  > 0 && <>({cartItemAmount})</>}
        </button>
      
    </div>
  )
}

export default Product
