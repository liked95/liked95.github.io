import React, { useState } from 'react'
import Shop from "./shop"
import useToggle from './useToggle'
import ColorBox from './ColorBox'

function Content() {
    // const [isShow, setIsShow] = useState(true)
    // const handleToggle = () => setIsShow(!isShow)

    const [isShow, handleToggle] = useToggle(true)

    return (
        <div>
            <button onClick={handleToggle}>Toggle</button>
            {isShow && <p>This is just an example paragraph right? This is just an example paragraph right? This is just an example paragraph right? This is just an example paragraph right?This is just an example paragraph right? </p>}

            <Shop />
            <ColorBox />
        </div>
    )
}

export default Content