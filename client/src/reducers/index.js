import { combineReducers } from 'redux';
import addItemReducer from './addItemReducer';
import getItemReducer from './getItemReducer';
import searchItemReducer from './searchItemReducer';
import addTocartReducer from './addToCartReducer';
import addToLikeReducer from './addToLikeReducer';
import cartSwitchReducer from './cartSwitchReducer';
import likeItemSwitchReducer from './likeItemSwitchReducer';
import logInSwitchReducer from './logInSwitchReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

const allReducers = combineReducers({
    addItem : addItemReducer,
    getItem : getItemReducer,
    searchItem : searchItemReducer,
    cartSwitch : cartSwitchReducer,
    addToCart : addTocartReducer,
    addToLike : addToLikeReducer,
    likeItemSwitch : likeItemSwitchReducer,
    logInSwitch : logInSwitchReducer,
    auth : authReducer,
    error : errorReducer
})

export default allReducers;