// export const addItem = (item) => {
//     return{
//         type : "ADD_ITEM",
//         payload :{
//             name: item.name,
//             price: item.price,
//             img: item.img,
//             department: item.department
//         }
//     }
// }
import axios from 'axios';

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
}