import React from 'react';

const Product = (props) => {
console.log(props.product.title)
  return (
    <div>
   <h1>hi {props.product.title} </h1>
  
    </div>
  );
};

export default Product;