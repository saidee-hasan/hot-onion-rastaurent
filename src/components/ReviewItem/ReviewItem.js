import React from 'react';

const ReviewItem = (props) => {
    const {name,title,images} =props.product;

    return (
        <div>
            <h1>{name}</h1>
            <h1>This is review</h1>
            <button className='pd-btn'>Remove</button>
        </div>
    );
};

export default ReviewItem;