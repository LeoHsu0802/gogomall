import React from 'react';
import './Header.css';
import { useDispatch } from 'react-redux';
import { searchItem, cartSwitch } from '../../actions'
import { NavLink } from 'react-router-dom';

function Header() {
    const dispatch = useDispatch();


    return (
    <nav className="bp3-navbar .modifier">
        <div className="bp3-navbar-group bp3-align-left">
            <NavLink to='./' style={{ textDecoration: 'none'}}>
                <div className="bp3-navbar-heading">GoGoMall</div>
            </NavLink>
        </div>
        <div className="bp3-navbar-group bp3-align-right">
            <button className="bp3-button bp3-minimal bp3-icon-search"></button>
            {/* Search Function */}
            <input 
            className="bp3-input" 
            placeholder="Search items..." 
            type="text" 
            onChange = {(e) => dispatch(searchItem(e.target.value))}
            />
            {/* Back to Home Page */}
            <NavLink to='./' style={{ textDecoration: 'none'}}>
                <button className="bp3-button bp3-minimal bp3-icon-home">Home</button>
            </NavLink>

            {/* Shopping Cart */}
            <button 
            className="bp3-button bp3-minimal bp3-icon-shopping-cart"
            onClick = {() => dispatch(cartSwitch())}
            >
            <sup className="Icon-sub">
                <span>
                0
                </span>
            </sup>
            Cart
            </button>

            {/* Like Items*/}
            <button 
            className="bp3-button bp3-minimal bp3-icon-heart"
            >
             <sup className="Icon-sub">
                <span>
                0
                </span>
            </sup>
            Like
            </button>

            {/* Upload New Items*/}
            <NavLink to='./add-new-item' style={{ textDecoration: 'none'}}>
                <button className="bp3-button bp3-minimal bp3-icon-upload">Add New</button>
            </NavLink>
            <span className="bp3-navbar-divider"></span>
            <button className="mr-10 bp3-button bp3-minimal bp3-icon-user"></button>
        </div>
    </nav>
    )
}

export default Header
