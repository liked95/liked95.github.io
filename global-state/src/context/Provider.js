import React, { useReducer } from "react"
import Context from "."
import reducer, { initialState } from "../store/reducer"

function Provider({ children }) {
    const [todos, dispatch] = useReducer(reducer, initialState)
    return (
        <Context.Provider value={{todos, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export default Provider