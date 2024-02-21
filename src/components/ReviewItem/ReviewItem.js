import React from 'react';
import"./ReviewItem.css";
import { Button } from '@mui/material';


const ReviewItem = (props) => {
    const {name,title,images,quantity,key} = props.product;

    return (
        <div className='reviewItem'>
             <img src={images} alt="" />
             <h2>{quantity}</h2>
            <h1>{name}</h1>
            <h1>This is review</h1>
           
            <Button variant="contained" color="success"
            onClick={()=>props.removeProduct(key)}
            class="btn btn-active btn-secondary">
                Remove
                </Button>
        </div>
    );
};

export default ReviewItem;