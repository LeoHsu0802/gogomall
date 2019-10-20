import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logInSwitch, logout } from '../../actions'
import { NavLink } from 'react-router-dom'
import { Menu, MenuDivider, MenuItem, Popover, Position } from "@blueprintjs/core";
import './Header.css'

function UserMenu() {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    const usermenu = (
        <Menu>
            {auth.isAuthenticated ?
            <MenuItem text="Sign out" onClick = {() => dispatch(logout())} /> :
            
            <div>
                <NavLink to='./user-register' style={{ textDecoration: 'none', outline: 'none'}}>
                    <MenuItem text="Register" className="text-warning" />
                </NavLink>
                <MenuDivider />
                <MenuItem text="Sign in" onClick = {() => dispatch(logInSwitch())}/>
                <MenuDivider /> 
            </div>
            }
            
        </Menu>
    );
    return (
        <Popover  content={usermenu} position={Position.TOP_LEFT}>
            <button className="mr-10 bp3-button bp3-minimal bp3-icon-user"></button>
        </Popover>
    )
}

export default UserMenu
