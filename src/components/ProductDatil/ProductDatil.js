import React from 'react';
import { useParams } from 'react-router-dom';
import { fakedata } from '../Data/fakeData';
import Product from '../Product/Product';

const ProductDatil = () => {
    const {productKey} =useParams();
    const product =fakedata.find(pd =>pd.key === productKey);
    console.log(product)
    return (
        <div>
            <h1> {productKey}  datil comeing soooooooooooooooon</h1>
             <Product showaddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDatil;