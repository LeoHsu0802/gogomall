import { combineReducers } from 'redux';
import addItemReducer from './addItemReducer';
import getItemReducer from './getItemReducer';
import searchItemReducer from './searchItemReducer';
import cartSwitchReducer from './cartSwitchReducer';
import addTocartReducer from './addToCartReducer';
import addToLikeReducer from './addToLikeReducer'
import likeItemSwitchReducer from './likeItemSwitchReducer'

const allReducers = combineReducers({
    addItem : addItemReducer,
    getItem : getItemReducer,
    searchItem : searchItemReducer,
    cartSwitch : cartSwitchReducer,
    addToCart : addTocartReducer,
    addToLike : addToLikeReducer,
    likeItemSwitch : likeItemSwitchReducer
})

export default allReducers;