import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h2>this is cart Components{cart.length}</h2>
            {
                cart.map(tShirt => <p>{tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)} >x</button>
                </p>)
            }

        </div>
    );
};

export default Cart;