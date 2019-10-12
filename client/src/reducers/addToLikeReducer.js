const initState = [];

const addToLikeReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_TO_LIKE': 
                return [...state, action.payload]
        default:
                return state;
    } 
}  

export default addToLikeReducer;