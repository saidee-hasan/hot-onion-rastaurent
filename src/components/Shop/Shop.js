import { useContext, useEffect, useState } from "react";
import { CategoryContaxt } from "../../App";
import Product from "./../Product/Product";
import { fakedata } from "./../Data/fakeData";
import Home from "../Home/Home";
import "./Shop.css";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import { addToDb } from "../../utilities/fakedb";

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
  
  const handleAddProduct= (product)=>{
    // console.log('product added',product);
    const newCart = [...cart,product];
    setCart(newCart);
    const someProduct =newCart.filter(pd=> pd.key === product.key) ;
    const count= someProduct.length;
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

      </div>
    </div>
  );
};

export default Shop;
