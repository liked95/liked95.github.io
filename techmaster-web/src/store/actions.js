import { ADD_COUNT, DELETE_PRODUCT, SUBTRACT_COUNT, ADD_PRODUCT } from "./constants"

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

export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: { id }
    }
}

export const addProduct = (item) => {
    return {
        type: ADD_PRODUCT,
        payload: item,
    }
}

