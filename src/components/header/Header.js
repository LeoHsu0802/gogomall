import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
    <nav class="bp3-navbar .modifier">
        <div class="bp3-navbar-group bp3-align-left">
            <NavLink to='./' style={{ textDecoration: 'none'}}>
                <div class="bp3-navbar-heading">GoGoMall</div>
            </NavLink>
        </div>
        <div class="bp3-navbar-group bp3-align-right">
            <button class="bp3-button bp3-minimal bp3-icon-search"></button>
            <input class="bp3-input" placeholder="Search files..." type="text" />
            <NavLink to='./' style={{ textDecoration: 'none'}}>
                <button class="bp3-button bp3-minimal bp3-icon-home">Home</button>
            </NavLink>
            <button class="bp3-button bp3-minimal bp3-icon-shopping-cart">Cart</button>
            <button class="bp3-button bp3-minimal bp3-icon-heart">Like</button>
            <span class="bp3-navbar-divider"></span>
            <button class="bp3-button bp3-minimal bp3-icon-user"></button>
            <button class="bp3-button bp3-minimal bp3-icon-notifications"></button>
            <button class="bp3-button bp3-minimal bp3-icon-cog"></button>
        </div>
    </nav>
    )
}

export default Header
