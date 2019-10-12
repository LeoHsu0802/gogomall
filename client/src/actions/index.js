import axios from 'axios';

//POST Item
export const addItem = (item) => dispatch => {
    axios
        .post('/api/item', item)
        .then(res =>
            dispatch({
                type : "ADD_ITEM",
                payload :{
                    name: res.name,
                    price: res.price,
                    img: res.img,
                    department: res.department
                    }
                })
        )
        .catch(err => console.log(err))
};

//GET Item
export const getItem = () => dispatch => {
    axios
        .get('/api/item')
        .then(res =>
            dispatch({
                type : "GET_ITEM",
                payload : res.data
                })
            )
        .catch(err => console.log(err))
};

//Search Item
export const searchItem = (item) => {
    return{
        type : "SEARCH",
        payload : item
    }
}

//Shopping cart modal switch OPEN/CLOSE
export const cartSwitch = () => {
    return{
        type : "CART_SWITCH"
    }
}

//Like item modal switch OPEN/CLOSE
export const likeItemSwitch = () => {
    return{
        type : "LIKE_ITEM_SWITCH"
    }
}

//Add item to Like List
export const addToLike = (item) => {
    return{
        type : "ADD_TO_LIKE",
        payload : item
    }
}

//Add item to shopping cart
export const addToCart = (item) => {
    return{
        type : "ADD_TO_CART",
        payload : item
    }
}

//Add item already existing in the cart
export const addSameItemToCart = (item) => {
    return{
        type : "ADD_SAME_ITEM_TO_CART",
        payload : item
    }
}
