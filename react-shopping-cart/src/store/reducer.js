import { INCREASE, DECREASE, DELETE } from "./constants"

export const initState = [
    {
        id: 1,
        name: "Áo thun nam tính",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        rating: 4.5,
        price: 400000,
        count: 1,
        size: "L"
    },
    {
        id: 2,
        name: "Áo len nữ kute phô mai que",
        image: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        price: 500000,
        count: 3,
        size: "M"
    },
    {
        id: 3,
        name: "Áo màu sặc sỡ LGBT",
        image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        price: 550000,
        count: 2,
        size: "XL"
    }
];


const reducer = (state, action) => {
    switch (action.type) {
        case INCREASE:
            return state.map(product => {
                if (product.id == action.payload) {
                    return { ...product, count: product.count + 1 }
                }   

                return product
            })

        case DECREASE:
            return state.map(product => {
                if (product.id == action.payload) {
                    // only subtract count when cur count == 1, else return the product
                    return { ...product, count: product.count - 1 }
                }

                return product
            })

        case DELETE:
            return state.filter(product => product.id != action.payload)

        default:
            throw new Error('Invalid action')
    }
}

export default reducer