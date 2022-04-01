import React from 'react';
import { Link } from 'react-router-dom';

// import Link from '../Link/Link';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Wellcome to responsive web</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/ordersreview'>Orders</Link>
            </nav>
        </div>
    );
};

export default Header;