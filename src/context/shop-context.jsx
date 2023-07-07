import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';

export const ShopContext= createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < PRODUCTS.length; i++) {
    const productId = PRODUCTS[i].id;
    cart[productId] = 0;
  }
  //fakticki za kolku sto imamo produkti primer 5, svite gi stava da imaa default vrednost 0
  //ova kje ni sluzi za da gledamo koja kolicina za odreden produkt ja ima vo cart
  return cart;
};


export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems]= useState(getDefaultCart);

    const addToCart=(itemId)=>{ //ni treba id od produktot za na toj produkt da mu dodademo +1 za kolicina
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}));
        //zemamo sve sto e prethodno, i na produktot so ID koj sto kje kliknemo dodava + 1
    }
    const removeFromCart=(itemId)=>{ 
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] - 1}));
    }
    const updateCartItemAmout=(newAmount, itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: newAmount})) //za toa itemId da staemo vrednosta newAmout kaj CartItems
    }

    const getTotalCartAmount = () => { 
        //so ovaa funkcija baramo total na sve proizvodi u cart ( total+= kolicina na proizvod * cena)
        let totalAmout = 0;
        for (const item in cartItems) {
            //so for idemo niz svekoj cart item sto e pogolem od 0 i ako e >0 
            //go baramo negovoto ID da bide === na ID of cartItems
            //i posle go presmetuemo total-ot
          if (cartItems[item] > 0) {
            let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
            totalAmout += cartItems[item] * itemInfo.price;
          }
        }
        return totalAmout;
      };

    const contextValue={cartItems, addToCart, removeFromCart, updateCartItemAmout, getTotalCartAmount} // ovde kje gi cuvam za da imam access do niv
    //primer sakamo da imamo access za ovja vo product.jsx za primer koj ke kliknemo na add to cart button 
    //da se povika addToCart() funkcijata

    console.log(cartItems)

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}


