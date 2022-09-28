import React, {useState} from 'react'
import useToggle from './useToggle'

function Shop() {
    
    const [isShow, handleToggle] = useToggle(true)

    return (
        <div>
            <button onClick = {handleToggle}>Toggle</button>
            {isShow && <h1>This is just an example paragraph right? This is just an example paragraph right? This is just an example paragraph right? This is just an example paragraph right?This is just an example paragraph right? </h1>}
        </div>
    )
}

export default Shop