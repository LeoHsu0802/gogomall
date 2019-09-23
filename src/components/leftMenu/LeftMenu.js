import React from 'react'
import './LeftMenu.css'
import { slide as Menu } from 'react-burger-menu'

function LeftMenu() {
    return (
        <Menu>
            <a id="home" className="menu-item" href="/">3C</a>
            <a id="about" className="menu-item" href="/about">Fashion</a>
            <a id="contact" className="menu-item" href="/contact">Home & Kitchen</a>
        </Menu>
    )
}

export default LeftMenu
