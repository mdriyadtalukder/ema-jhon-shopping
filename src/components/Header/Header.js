import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
        <img src={logo} alt="" />
        <div>
            <a href="">Home</a>
            <a href="">Order Review</a>
            <a href="">Manage Investory</a>
        </div>
        </nav>
    );
};

export default Header;