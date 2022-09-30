import { ADD_COUNT, ADD_PRODUCT, DELETE_ITEM, SUBTRACT_COUNT } from "./constants"


export const addCount = (payload) => {
    return {
        type: ADD_COUNT,
        payload
    }
}

export const subtractCount = (payload) => {
    return {
        type: SUBTRACT_COUNT,
        payload
    }
}

export const deleteItem = (payload) => {
    return {
        type: DELETE_ITEM,
        payload
    }
}

export const addProduct = (payload) => {
    return {
        type: ADD_PRODUCT,
        payload
    }
}