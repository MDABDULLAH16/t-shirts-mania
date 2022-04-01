import React from 'react';
import './Shirt.css'

const Shirt = ({ handleAddToCart, tShirt }) => {
    const { picture, name, price } = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h4>Price:${price}</h4>
            <button onClick={() => handleAddToCart(tShirt)} >Add to Cart</button>
        </div>
    );
};

export default Shirt;