const initState = {
    item:[]
}

const addTocart = (state = initState, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                item: item.push(action.payload)
            };
            default:
                    return state;
    }
}

export default addTocart;