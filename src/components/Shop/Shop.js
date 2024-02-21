import { useContext, useEffect, useState } from "react";
import { CategoryContaxt } from "../../App";
import Product from "./../Product/Product";
import { fakedata } from "./../Data/fakeData";
import Home from "../Home/Home";
import "./Shop.css";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Shop = () => {
  const [name] = useContext(CategoryContaxt);
  const [products, setProduct] = useState(fakedata.slice(0, 18));
 const [cart,setCart] =useState([]);
  useEffect(() => {
    const matchProducts = fakedata.filter(
      (pd) => pd.name === name && name.toLowerCase()
    );
    setProduct(matchProducts);
  }, [name]);

  useEffect(()=>{
    //cart
    const saveCart = getShoppingCart();
    const productKeys = Object.keys(saveCart);
   const cartProducts = productKeys.map(key=> {
      const product = fakedata.find(pd=>pd.key === key);
      product.quantity =saveCart[key];
      return product;
   })
   setCart(cartProducts);
  
      },[])
  
  
  
  const handleAddProduct= (product)=>{
    const toBeAddedKey = product.key;
    // console.log('product added',product);
    const sameProduct = cart.find(pd=> pd.key === toBeAddedKey) ;
    let count = 1;
    let newCart;
    if(sameProduct){
      const count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others =cart.filter(pd => pd.key !== toBeAddedKey);
      newCart =[...others,sameProduct]
    }
    else{
      product.quantity =1;
      newCart = [...cart,product];
    }

    setCart(newCart);
    
    addToDb(product.key,count)
  }

  return (
    <div className="twin-container">
   
      <div className="product-container">
        <Home></Home>
        <br />
        {products.map((pd) => (
          <Product
          handleAddProduct={handleAddProduct}
           product={pd}
           showaddToCart ={true}  
           key={products.key}
           ></Product>
        ))}
      </div>
      
      <div className="">
      <Cart cart={cart}></Cart>
      <Link to={'/review'}> <Button variant="contained" disableElevation > Order Now</Button> </Link>
      </div>
    </div>
  );
};

export default Shop;
