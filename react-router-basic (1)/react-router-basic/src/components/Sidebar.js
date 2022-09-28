import React from 'react'

function Sidebar() {
    return (
        <>
            <h2 className="my-3 text-white text-center">Application</h2>
            <div className="pt-3">
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Orders</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Products</a>
                        <ul className="mt-1">
                            <li className="nav-item">
                                <a href="#" className="nav-link">Laptop</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Desktop</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Customers</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar