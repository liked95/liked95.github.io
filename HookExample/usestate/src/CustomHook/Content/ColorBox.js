import React, {useState} from 'react'
import useRandomColor from './useRandomColor'

function ColorBox() {
    const [color, handleChangeColor] = useRandomColor()
    return (
        <div>
            <div onClick={handleChangeColor} style={{ width: "200px", height: "200px", backgroundColor: color }}></div>
        </div>
    )
}

export default ColorBox