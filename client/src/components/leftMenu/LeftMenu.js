import React from 'react'
import './LeftMenu.css'
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'

function LeftMenu() {
    return (
        <Menu>
            <NavLink to='./3c' style={{ textDecoration: 'none', outline: 'none'}}>
                <p id="home" className="menu-item">3C</p>
            </NavLink>
            <NavLink to='./fashion' style={{ textDecoration: 'none', outline: 'none'}}>
                <p id="about" className="menu-item">Fashion</p>
            </NavLink>
            <NavLink to='./home-kitchen' style={{ textDecoration: 'none', outline: 'none'}}>
                <p id="contact" className="menu-item">Home & Kitchen</p>
            </NavLink>
        </Menu>
    )
}

export default LeftMenu
