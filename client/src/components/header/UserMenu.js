import React from 'react'
import { useDispatch } from 'react-redux';
import { logInSwitch } from '../../actions'
import { Menu, MenuDivider, MenuItem, Popover, Position } from "@blueprintjs/core";
import './Header.css'

function UserMenu() {
    const dispatch = useDispatch();
    const usermenu = (
        <Menu>
            <MenuItem text="Sign in" onClick = {() => dispatch(logInSwitch())}/>
            <MenuDivider />
            <MenuItem text="Sign out" />
        </Menu>
    );
    return (
        <Popover  content={usermenu} position={Position.TOP_LEFT}>
            <button className="mr-10 bp3-button bp3-minimal bp3-icon-user"></button>
        </Popover>
    )
}

export default UserMenu
