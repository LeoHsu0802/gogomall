import { combineReducers } from 'redux';
import addItemReducer from './addItemReducer';
import getItemReducer from './getItemReducer';
import searchItemReducer from './searchItemReducer';
import cartSwitchReducer from './cartSwitchReducer'

const allReducers = combineReducers({
    addItem : addItemReducer,
    getItem : getItemReducer,
    searchItem : searchItemReducer,
    cartSwitch : cartSwitchReducer
})

export default allReducers;