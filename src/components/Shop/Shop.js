import { useContext, useEffect, useState } from "react";
import { CategoryContaxt } from "../../App";
import Product from "./../Product/Product";
import { fakedata } from "./../Data/fakeData";

const Shop = () => {
  const [name] = useContext(CategoryContaxt);
  const [products, setProduct] = useState(fakedata.slice(0, 18));

  useEffect(() => {
    const matchProducts = fakedata.filter(
      (pd) => pd.name === name && name.toLowerCase()
    );
    setProduct(matchProducts);
  }, [name]);

  return (
    <div>
      <h4>Select our product : {name}</h4>
      {products.map((pd) => (
        <Product product={pd}></Product>
      ))}
    </div>
  );
};

export default Shop;
