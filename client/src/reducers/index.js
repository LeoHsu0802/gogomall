import { combineReducers } from 'redux';
import addItemReducer from './addItemReducer';
import getItemReducer from './getItemReducer';
import searchItemReducer from './searchItemReducer';
import cartSwitchReducer from './cartSwitchReducer';
import addTocartReducer from './addToCartReducer';

const allReducers = combineReducers({
    addItem : addItemReducer,
    getItem : getItemReducer,
    searchItem : searchItemReducer,
    cartSwitch : cartSwitchReducer,
    addTocart : addTocartReducer
})

export default allReducers;