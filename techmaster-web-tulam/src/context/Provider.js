import Context from "./Context";
import { useReducer } from "react";
import { topics, courses } from "../data/course-data";
import { supporters } from "../data/user-data";
import reducer from "../store/reducer";



const Provider = ({ children }) => {
    // Giỏ hàng ban đầu phải trống
    const initState = []

    const [cartItems, dispatch] = useReducer(reducer, initState)

    const value = {
        topics,
        courses,
        supporters,
        cartItems,
        dispatch
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default Provider

