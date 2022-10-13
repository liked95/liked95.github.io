import React, { useReducer } from 'react'
import Context from '.'
import usersReducer, { initUsers } from 'store/usersReducer'
import productReducer, { initProducts } from 'store/productReducer'
import authReducer, { initAuth } from 'store/authReducer'

function Provider({ children }) {
  const [users, dispatchUsers] = useReducer(usersReducer, initUsers)
  const [products, dispatchProducts] = useReducer(productReducer, initProducts)
  const [auth, dispatchAuth] = useReducer(authReducer, initAuth)


  let value = {
    users,
    dispatchUsers,
    
    products,
    dispatchProducts,

    auth,
    dispatchAuth,
  }

  return (
    <Context.Provider value={value} >
      {children}
    </Context.Provider>
  )
}

export default Provider