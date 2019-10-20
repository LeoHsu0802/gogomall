import axios from 'axios';

//POST Item
export const addItem = (item) => (dispatch, getState) => {
    axios
        .post('/api/item', item, tokenConfig(getState))
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
        .catch(err => 
          dispatch(returnErrors(err.response.data, err.response.status))
        );
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
            .catch(err => 
              dispatch(returnErrors(err.response.data, err.response.status))
            );
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

// Login modala switch OPEN/CLOSE
export const logInSwitch = () => {
    return{
        type : "LOG_IN_SWITCH"
    }
}
//Add item to Like List
export const addToLike = (item) => {
    return{
        type : "ADD_TO_LIKE",
        payload : item
    }
}

//Delete item from like list
export const deleteLike = (item) => {
    return{
        type : "DELETE_LIKE",
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

//Delete item from cart
export const deleteCart = (item) => {
    return{
        type : "DELETE_CART",
        payload : item
    }
}

// RETURN ERRORS
export const returnErrors = (msg, status, id = null) => {
    return {
      type: "GET_ERRORS",
      payload: { msg, status, id }
    };
  };

// CLEAR ERRORS
export const clearErrors = () => {
  return {
    type: "CLEAR_ERRORS"
  };
};

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
    // User loading
    dispatch({ type: "USER_LOADING" });
  
    axios
      .get('/api/auth/user', tokenConfig(getState))
      .then(res =>
        dispatch({
          type: "USER_LOADED",
          payload: res.data
        })
      )
      .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: "AUTH_ERROR"
        });
      });
  };
  
  // Register User
  export const register = ({ name, email, password }) => dispatch => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    // Request body
    const body = JSON.stringify({ name, email, password });
  
    axios
      .post('/api/user', body, config)
      .then(res =>
        dispatch({
          type: "REGISTER_SUCCESS",
          payload: res.data
        })
      )
      .catch(err => {
        dispatch(
          returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
        );
        dispatch({
          type: "REGISTER_FAIL"
        });
      });
  };
  
  // Login User
  export const login = ({ email, password }) => dispatch => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    // Request body
    const body = JSON.stringify({ email, password });
  
    axios
      .post('/api/auth', body, config)
      .then(res =>
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: res.data
        })
      )
      .catch(err => {
        dispatch(
          returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
        );
        dispatch({
          type: "LOGIN_FAIL"
        });
      });
  };
  
  // Logout User
  export const logout = () => {
    return {
      type:"LOGOUT_SUCCESS"
    };
  };
  
  // Setup config/headers and token
  export const tokenConfig = getState => {
    // Get token from localstorage
    const token = getState().auth.token;
  
    // Headers
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };

    // If token, add to headers
    if (token) {
      config.headers['x-auth-token'] = token;
    }
  
    return config;
  };