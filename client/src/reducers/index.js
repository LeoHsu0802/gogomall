import { combineReducers } from 'redux';
import addItemReducer from './addItemReducer'

const allReducers = combineReducers({
    addItem : addItemReducer,
})

export default allReducers;