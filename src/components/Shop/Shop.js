import { fakedata } from "./../Data/fakeData";
import {  useContext, useEffect, useState } from "react";
import { CategoryContaxt } from "../../App";
import Product from './../Product/Product';


const Shop = () => {
  const [name] =useContext(CategoryContaxt)
  const [products, setProduct] = useState(fakedata.slice(0, 18));

   useEffect(()=>{
    const matchProducts = fakedata.filter(pd => pd.name === name);
    setProduct(matchProducts)
     },[name])


 
  return (
    <div>
     {
      products.map(pd => <Product product={pd}></Product>)
     }
     
    </div>
  );
};

export default Shop;
