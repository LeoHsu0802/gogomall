const initState = {
    item:[]
}

const getItem = (state = initState, action) => {
    switch(action.type){
        case 'GET_ITEM':
            return {
                ...state,
                item: action.payload
            };
            default:
                    return state;
    }
}

export default getItem;