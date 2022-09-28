import React from 'react'
import {useNavigate} from "react-router-dom"

function Dashboard() {
    const navigate = useNavigate()

    const handleChangePage = () => {
        console.log("HELLO")
        navigate("customers ")
    }

    return (
        <> 
            <h1>Dashboard</h1>
            <button onClick={handleChangePage} className="btn btn-success">Go to Customers</button>
            <button className='btn btn-danger me-2' onClick={() => navigate(-1)}>go back 1 page</button>
            <button className='btn btn-danger me-2' onClick={() => navigate(-2)}> go back 2 page</button>
            <button className='btn btn-danger me-2' onClick={() => navigate(1)}> go forward 1 page</button>
            <button className='btn btn-danger me-2' onClick={() => navigate(2)}> go forward 2 page</button>
        </>
    )
}

export default Dashboard