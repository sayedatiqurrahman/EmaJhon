import React from 'react';
import logo from '../../../assets/Logo.svg'
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav>
                <img src={logo} alt="" />
                <div className="menu">
                    <a href="">Order</a>
                    <a href="">Review</a>
                    <a href="">Manage Inventory</a>
                    <a href="">Login</a>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;