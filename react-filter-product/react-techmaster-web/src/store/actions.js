import {INCREASE, DECREASE, DELETE} from "./constants"

export function decreaseItem(payload) {
    return {
        type: DECREASE,
        payload
    }
}


export function increaseItem(payload) {
    return {
        type: INCREASE,
        payload
    }
}

export function deleteItem(payload) {
    return {
        type: DELETE,
        payload
    }
}



