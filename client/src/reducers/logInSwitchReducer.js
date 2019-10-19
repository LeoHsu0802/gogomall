const logInSwitchReducer = (state = false, action) => {
    switch(action.type){
        case 'LOG_IN_SWITCH':
            return !state;
        default:
            return state;
    }
}

export default logInSwitchReducer;