import React from 'react'
import {Outlet, Navigate} from "react-router-dom"

function PrivateRoutes() {
    const isAuth = true;

    return isAuth ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes