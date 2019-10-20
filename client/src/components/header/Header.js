import React from 'react';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchItem, cartSwitch, likeItemSwitch } from '../../actions'
import { NavLink } from 'react-router-dom';
import UserMenu from  './UserMenu'

function Header() {
    const dispatch = useDispatch();
    const addToCart = useSelector(state => state.addToCart);
    const addToLike = useSelector(state => state.addToLike);
    const auth = useSelector(state => state.auth);

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
            {/*Once add item to cart then show the quantity in red circle else show nothing*/}
            {addToCart.length !== 0 && <sup className="Icon-sub">
                <span>
                    {addToCart.length}
                </span>
            </sup>}
            Cart
            </button>

            {/* Like Items*/}
            <button 
            className="bp3-button bp3-minimal bp3-icon-heart"
            onClick = {() => dispatch(likeItemSwitch())}
            >       
            {/*Once add item to cart then show the quantity in red circle else show nothing*/}
            {addToLike.length !== 0 && <sup className="Icon-sub">
                <span>
                    {addToLike.length}
                </span>
            </sup>}
            Like
            </button>

            {/* Upload New Items*/}
            <NavLink to='./add-new-item' style={{ textDecoration: 'none'}}>
                <button className="bp3-button bp3-minimal bp3-icon-add">Add New</button>
            </NavLink>
            <span className="bp3-navbar-divider"></span>
            <UserMenu />
            {auth.isAuthenticated? 
                <span className="ml-2" >Hi,<span className="text-info"> {auth.user.name} </span></span> :
                null
            }
        </div>
    </nav>
    )
}

export default Header
