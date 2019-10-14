const initState = [];

const addTocartReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_TO_CART': 
                return [...state, action.payload]

        // if item already existing in cart then plus payload unit and price
        case 'ADD_SAME_ITEM_TO_CART':
            const withoutExistingItem = state.filter(x => x._id !== action.payload._id)
            const existingItem = state.filter(x => x._id === action.payload._id)
            const updateExistingItem = {
                ...existingItem[0], 
                unit : existingItem[0].unit + action.payload.unit,
                price : existingItem[0].price +action.payload.price
                }
                return [...withoutExistingItem,updateExistingItem]
        case 'DELETE_CART':
            const CartAfterDelete = state.filter(x => x._id !== action.payload._id)
            return [...CartAfterDelete]
        default:
                return state;
    } 
}  

export default addTocartReducer;