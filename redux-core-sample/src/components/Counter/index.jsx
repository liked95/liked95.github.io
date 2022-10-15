import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, subtractCount } from '../../redux/actions/counterActions'

function Counter() {
    const counter = useSelector((state) => state.counter)


    const dispatch = useDispatch()

    const handleAdd = () => {
        dispatch(addCount())
    }

    const handleSubtract = () => {
        dispatch(subtractCount())
    }

    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSubtract}>Subtract</button>
        </>
    )
}

export default Counter