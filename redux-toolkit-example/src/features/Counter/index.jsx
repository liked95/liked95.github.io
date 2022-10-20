import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, addTwo, getCounter, getTodosActive} from './counterSlice'

function Counter() {
    const counter = useSelector(getCounter)
    const dispatch = useDispatch()

    // console.log(useSelector(getTodosActive));

    const handleAdd = () => {
        dispatch(increment())
    }

    const handleAdd2 = () => {
        dispatch(addTwo(10))
    }

    const handleSubtract = () => {
        dispatch(decrement())
    }

    return (
        <>
            <h1>Counter : {counter}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSubtract}>Subtract</button>
            <button onClick={handleAdd2}>Add2</button>
        </>
    )
}

export default Counter