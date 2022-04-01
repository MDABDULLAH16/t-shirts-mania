import React from 'react';

const tShirt = (props) => {
    const { picture, name, price } = props.tShirts;
    return (
        <div>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <h5>Price: {price}</h5>
        </div>
    );
};

export default tShirt;