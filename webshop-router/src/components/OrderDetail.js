import React from 'react'
import { useParams } from "react-router-dom"

function OrderDetail() {
    const { orderId } = useParams()
    return (
        <>
            <h1>Trang chi tiet</h1>
            <p>ID: {orderId}</p>
        </>
    )
}

export default OrderDetail