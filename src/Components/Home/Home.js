
import { useState } from 'react';
import useTShirts from '../../hooks/useTShirt';
import Cart from '../Cart/Cart';
import Shirt from '../Shirt/Shirt';

import './Home.css'

const Home = () => {
    const [tShirts, setTShirts] = useTShirts();
    const [cart, setCart] = useState([]);
    const handleAddToCart = selection => {
        console.log(selection);
    }

    return (
        <div className='home-container'>
            <div className="tshirt-contaier">
                {
                    tShirts.map(tShirt => <Shirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></Shirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                ></Cart>
            </div>
        </div>
    );
}



export default Home;