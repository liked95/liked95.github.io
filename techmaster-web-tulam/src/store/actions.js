import { ADD_COUNT, ADD_PRODUCT, DELETE_PRODUCT, LOGIN, LOGOUT, SUBTRACT_COUNT, UPDATE_PROFILE, SYNC_AUTH, ADD_ORDER, CLEAR_CART} from "./constants"

export const addCount = (id) => {
    return {
        type: ADD_COUNT,
        payload: { id }
    }
}

export const subtractCount = (id) => {
    return {
        type: SUBTRACT_COUNT,
        payload: { id }
    }
}

export const deleteItem = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: { id }
    }
}

export const addProduct = (item) => {
    return {
        type: ADD_PRODUCT,
        payload: item
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART,
    }
}

// Auth actions
export const login = (data) => {
    return {
        type: LOGIN,
        payload: data, //thong tin user gui len thanh cong
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
}

export const syncAuth = (data) => {
    return {
        type: SYNC_AUTH,
        payload: data,
    }
}



// User action

export const updateProfile = (data) => {
    return {
        type: UPDATE_PROFILE,
        payload: data, 
    }
}


// Order action
export const addOrder = (data) => {
    return {
        type: ADD_ORDER,
        payload: data, 
    }
}
