import { combineReducers } from 'redux';
import addItemReducer from './addItemReducer';
import getItemReducer from './getItemReducer';

const allReducers = combineReducers({
    addItem : addItemReducer,
    getItem : getItemReducer
})

export default allReducers;