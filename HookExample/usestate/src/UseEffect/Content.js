import React, { useState, useEffect } from 'react'

function Content() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)

    /*
        useEffect(callbackFn, deps)
        1. useEffect(callbackFn)
        2. useEffect(callbackFn, [])
        3. useEffect(callbackFn, [deps])

        Điểm chung: Đều đc gọi lần đầu tiên
    */

    // 1. useEffect(callbackFn): Chạy lại mỗi khi component bị rerender
    // useEffect(() => {
    //     console.log("USE EFFECT")
    // })

    // 2. useEffect(callbackFn, [])
    // Chạy 1 lần duy nhất khi component mount
    // useEffect(() => {
    //     console.log("USE EFFECT []")
    // }, [])

    // 3. useEffect(callbackFn, [deps])
    useEffect(() => {
        console.log("USE EFFECT deps")
    }, [count1, count])


    return (
        <>
            <div>Content COunter</div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Add Count</button>
            <hr/>
            <h1>Counter1: {count1}</h1>
            <button onClick={() => setCount1(count1 + 1)}>Add Count 1</button>
            {console.log("render")}
        </>
    )
}

export default Content