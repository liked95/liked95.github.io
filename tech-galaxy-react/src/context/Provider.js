import React from 'react'
import Context from '.'
import products from 'data/index'

function Provider({children}) {
  
  let value = {
    products,
  }

  return (
    <Context.Provider value = {value} >
        {children}
    </Context.Provider>
  )
}

export default Provider