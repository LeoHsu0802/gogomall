import React from 'react'
import './LeftMenu.css'
import { slide as Menu } from 'react-burger-menu'

function LeftMenu() {
    return (
        <Menu>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
    )
}

export default LeftMenu
