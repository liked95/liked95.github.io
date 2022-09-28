import React, { useState } from 'react'
let numbers = [1, 2, 3, 4, 5]

function Counter() {
    
    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(() => {
        const rs = numbers.reduce((total, num) => total + num, 0)
        console.log(rs)
        return rs
    })

    // setSet kieu du lieu phuc tap: Array, Object
    const [user, setUser] = useState({
        id: 1,
        name: "Bui Hien",
        email: "hien@gmail.com"
    })

    const [products, setProducts] = useState([
        { id: 1, name: "Ao thun", price: 10000 },
        { id: 2, name: "Quan dui", price: 50000 },
        { id: 3, name: "Tui xach", price: 35000 },

    ])

    const addMulti = () => {
        setCount(count => count + 1)
        setCount(count => count + 1)
        setCount(count => count + 1)
    }

    const changeName = () => {
        // setState cua Function Component la replace, cua Class Component la merging
        // setUser({name: "abc"})
        setUser({ ...user, name: "abc" })
    }

    const changePrice = () => {
        let id = 1
        let newPrice = 500000
        let newProducts = products.map(product => {
            if (product.id === id) {
                return { ...product, price: newPrice }
            }

            return product
        })

        setProducts(newProducts)
    }

    return (
        <>  
            <h1>Total: {total}</h1>
            <hr/>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={addMulti}>addMulti</button>
            {console.log("render")}

            <hr />
            <h1>User: {JSON.stringify(user)}</h1>
            <button onClick={changeName}>Change Name</button>
            <hr />
            <ul>
                {products.map((product, index) => <li key={index}>{product.id}-{product.name}-{product.price}</li>)}
            </ul>
            <button onClick={changePrice}>Change Price</button>
        </>
    )
}

export default Counter