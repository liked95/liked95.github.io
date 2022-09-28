import React from 'react'
import { Link } from "react-router-dom"
function Order() {
    const orders = [
        { id: 1, name: "san pham 1" },
        { id: 2, name: "san pham 2" },
        { id: 3, name: "san pham 3" },
    ]
    return (
        <>
            <h1>Order</h1>
            {orders.map(order => (
                <Link
                    to={`/orders/${order.id}`}
                    key={order.id}
                    className="d-block"
                >
                    {order.name}
                </Link>
            ))}
        </>
    )
}

export default Order