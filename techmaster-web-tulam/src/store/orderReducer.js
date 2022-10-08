import { ADD_ORDER } from "./constants"


export const initOrders = JSON.parse(localStorage.getItem("orders")) || []

const orderReducer = (state, action) => {
    let newState = []
    switch (action.type) {
        case ADD_ORDER: {
            newState = [...state, action.payload]
            break
        }

        default:
            newState = [...state]
            break
    }

    localStorage.setItem("orders", JSON.stringify(newState))
    return newState
}


export default orderReducer