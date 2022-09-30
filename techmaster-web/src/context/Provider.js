import React, { useReducer } from 'react'
import Context from './Context'
import reducer, { initState } from '../store/reducer';
import {topics, courses} from '../data/course-data'
import {users} from '../data/user-data'

function Provider({ children }) {
    const [products, dispatch] = useReducer(reducer, initState);

    const value = {
        products,
        topics,
        courses,
        users,
        dispatch
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default Provider