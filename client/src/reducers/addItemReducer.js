const initState = {
    name: "", 
    price: "",
    img: "",
    department: ""
}

const addItem = (state = initState, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return {
                ...state,
                name: action.payload.name,
                price: action.payload.price,
                img: action.payload.img,
                department: action.payload.department
            }
            default:
                    return state;
    }
}

export default addItem;