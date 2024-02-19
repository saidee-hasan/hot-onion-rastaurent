import React from 'react';

const Product = (props) => {
const {title} = props.product;
console.log(props)
  return (
    <div>
   <h1>This is title {title}</h1>
  
    </div>
  );
};

export default Product;