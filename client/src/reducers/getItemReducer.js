const initState = {
    item:[]
}

const getItemReducer = (state = initState, action) => {
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

export default getItemReducer;