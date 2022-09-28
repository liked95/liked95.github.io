import React, {useContext} from 'react'
import Context from '.'
import courses from '../components/Data'

function Provider({children}) {


  return (
    <Context.Provider value={{courses, searchInput:null}}>
        {children}
    </Context.Provider>
  )
}

export default Provider