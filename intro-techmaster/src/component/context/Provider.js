import React, {useContext} from 'react'
import Context from '.'
import courses from '../Filter/Data'

function Provider({children}) {


  return (
    <Context.Provider value={courses}>
        {children}
    </Context.Provider>
  )
}

export default Provider