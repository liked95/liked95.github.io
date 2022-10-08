import React, { useReducer } from 'react'
import Context from './Context'
import cartReducer, { initCart } from '../store/cartReducer';
import { courses, topics } from '../data/course-data';
import authReducer, { initAuth } from 'store/authReducer';
import userReducer, {initUsers} from 'store/userReducer';
import orderReducer, {initOrders} from 'store/orderReducer';

function Provider({ children }) {
    const [products, dispatchCart] = useReducer(cartReducer, initCart);
    const [auth, dispatchAuth] = useReducer(authReducer, initAuth);
    const [users, dispatchUsers] = useReducer(userReducer, initUsers);
    const [orders, dispatchOrders] = useReducer(orderReducer, initOrders);

    const value = {
        courses,
        topics,
        users,
        products,
        dispatchCart,
        auth,
        dispatchAuth, 
        dispatchUsers,
        orders,
        dispatchOrders,


    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default Provider