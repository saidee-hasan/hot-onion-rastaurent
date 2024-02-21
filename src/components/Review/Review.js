import React, { useEffect } from "react";
import { useState } from "react";
import { getShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { fakedata } from "../Data/fakeData";
import ReviewItem from "../ReviewItem/ReviewItem";

import Cart from "../Cart/Cart";
import Bike from"../../images/homepage/bike.png"
import { Link } from "react-router-dom";

const Review = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    //cart
    const saveCart = getShoppingCart();
    const productKeys = Object.keys(saveCart);
    const cartProducts = productKeys.map((key) => {
      const product = fakedata.find((pd) => pd.key === key);
      product.quantity = saveCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);

  const removeProduct = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDb(productKey);
    console.log("remove product", productKey);
  };
  return (
    <div className="twin-container">
      <div className="product-container">
        {cart.map((pd) => (
          <ReviewItem
            removeProduct={removeProduct}
            product={pd}
            key={pd.key}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
       <img src={Bike} alt="" />

        <Cart cart={cart}></Cart> 
       <Link to={'/shipment'}><button >Shipment</button></Link>
      
      </div>
    </div>
  );
};

export default Review;
