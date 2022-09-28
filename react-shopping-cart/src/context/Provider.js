import Context from ".";
import React, {useReducer} from "react";
import reducer, {initState} from '../store/reducer'


// dispatch

function DataContext({children}) {
    const [state, dispatch] = useReducer(reducer, initState)

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}


export default DataContext
