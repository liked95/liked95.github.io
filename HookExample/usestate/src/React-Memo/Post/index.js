import React, { useState, useCallback, useMemo } from 'react'
import PostItem from "./PostItem"

function Post() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const [products, setProducts] = useState([
        { id: 1, name: "Ao thun", price: 10000 },
        { id: 2, name: "Quan dui", price: 50000 },
        { id: 3, name: "Tui xach", price: 35000 },

    ])

    const total = useMemo(() => {
        let res = products.reduce((total, product) => total + product.price, 0)
        console.log(res)
        return res
    }, [products]
    )

    const addProduct = () => {
        setProducts([...products, {
            id: products.length + 1,
            title: "new product" + Math.random(),
            price: 500000,
        }])
    }

    const handleClick = useCallback(() => {
        console.log("Hello world")
    }, [count1])

    return (
        <>
            <h1>Post </h1>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <hr />
            <h1>1: {count1}</h1>
            <button onClick={() => setCount1(prevCount1 => prevCount1 + 1)}>Add1</button>
            <button onClick={addProduct}>Add Product</button>

            <PostItem count={count} handleClick={handleClick} />
        </>

    )
}

export default Post