import React, { useEffect } from 'react';
import { useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import { fakedata } from '../Data/fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart,setCart] = useState([])
   
    useEffect(()=>{
  //cart
  const saveCart = getShoppingCart();
  const productKeys = Object.keys(saveCart);
 const cartProducts = productKeys.map(key=> {
    const product =fakedata.find(pd=>pd.key === key);
    return product;
 })
 setCart(cartProducts);

    })
    return (
        <div>
            <h1>This is cart : {cart.length}</h1>
           { cart.map(pd=>  <ReviewItem
            product={pd}
            key={pd.key}
           ></ReviewItem>)
          
           }
        </div>
    );
};

export default Review;