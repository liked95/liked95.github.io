import React, {useState, useRef} from 'react'

const colors = ["red", "blue", "green", "yellow"]

function randomColor(currentColor) {
    let newColor = currentColor
    while (newColor == currentColor) {
        let idx = Math.floor(Math.random() * colors.length)
        newColor = colors[idx]
    }
    return newColor
}

const useRandomColor = () => {
    const [color, setColor] = useState("red")
    const colorRef = useRef()

    const handleChangeColor = () => {
        let newColor = randomColor(colorRef.current)
        console.log(newColor)
        console.log(color)
        setColor(newColor)
    }

    return [color, handleChangeColor]
}

export default useRandomColor