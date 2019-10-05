const cartSwitchReducer = (state = false, action) => {
    switch(action.type){
        case 'CART_SWITCH':
            return !state;
        default:
            return state;
    }
}

export default cartSwitchReducer;