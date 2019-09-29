import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
    <nav className="bp3-navbar .modifier">
        <div className="bp3-navbar-group bp3-align-left">
            <NavLink to='./' style={{ textDecoration: 'none'}}>
                <div className="bp3-navbar-heading">GoGoMall</div>
            </NavLink>
        </div>
        <div className="bp3-navbar-group bp3-align-right">
            <button className="bp3-button bp3-minimal bp3-icon-search"></button>
            <input className="bp3-input" placeholder="Search files..." type="text" />
            <NavLink to='./' style={{ textDecoration: 'none'}}>
                <button className="bp3-button bp3-minimal bp3-icon-home">Home</button>
            </NavLink>
            <button className="bp3-button bp3-minimal bp3-icon-shopping-cart">Cart</button>
            <button className="bp3-button bp3-minimal bp3-icon-heart">Like</button>
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
