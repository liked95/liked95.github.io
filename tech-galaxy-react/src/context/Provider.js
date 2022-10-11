import React from 'react'
import Context from '.'
import initProducts from 'data/index'

function Provider({children}) {
  if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify(initProducts))
  }
  
  const products = JSON.parse(localStorage.getItem('products'))


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