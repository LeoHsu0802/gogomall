const initState = [];

const addToLikeReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_TO_LIKE': 
            return [...state, action.payload]
        case 'DELETE_LIKE':
            const LikeListAfterDelete = state.filter(x => x._id !== action.payload._id)
            return [...LikeListAfterDelete]
        case 'LOG_OUT_LIKE':
            return []
        default:
            return state;
    } 
}  

export default addToLikeReducer;