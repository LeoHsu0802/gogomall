const likeItemSwitchReducer = (state = false, action) => {
    switch(action.type){
        case 'LIKE_ITEM_SWITCH':
            return !state;
        default:
            return state;
    }
}

export default likeItemSwitchReducer;