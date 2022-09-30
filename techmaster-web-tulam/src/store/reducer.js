import { ADD_COUNT, ADD_PRODUCT, DELETE_ITEM, SUBTRACT_COUNT } from './constants'



const reducer = (state, action) => {
    const id = action.payload

    switch (action.type) {
        case SUBTRACT_COUNT:
            return state.map(item => {
                if (item.id === id) {
                    return { ...item, count: item.count - 1 }
                }

                return item
            })

        case ADD_COUNT:
            return state.map(item => {
                if (item.id === id) {
                    return { ...item, count: item.count + 1 }
                }

                return item
            })

        case DELETE_ITEM:
            return state.filter(item => item.id !== id)

        case ADD_PRODUCT:
            return [...state, id]
        default:
            return state
    }
}

export default reducer