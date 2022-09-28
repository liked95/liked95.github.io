import React, { useState, useRef, useEffect } from 'react'
import video from "./demo-video.mp4"

const colors = ["red", "blue", "green", "yellow"]

function randomColor(currentColor) {
    let newColor = currentColor
    while (newColor == currentColor) {
        let idx = Math.floor(Math.random() * colors.length)
        newColor = colors[idx]
    }
    return newColor
}

function RefContent() {
    const [value, setValue] = useState('')
    const [time, setTime] = useState(100)
    const [color, setColor] = useState("red")

    const inputRef = useRef()
    const countRef = useRef(0)
    const videoRef = useRef()
    const timeRef = useRef()
    const colorRef = useRef()

    countRef.current++

    // useEffect(() => {

    //     inputRef.current.focus()
    // })

    const handlePlay = () => {
        videoRef.current.play()
    }

    const handlePause = () => {
        videoRef.current.pause()

    }

    const handleStart = () => {
        if (!timeRef.current) {
            timeRef.current = setInterval(() => {
                setTime(time => time - 1)
            }, 100)
        }
    }

    const handleStop = () => {
        clearInterval(timeRef.current)
    }

    const handleChangeColor = () => {
        let newColor = randomColor(colorRef.current)
        console.log(newColor)
        console.log(color)
        setColor(newColor)
    }



    return (
        <div>
            <div onClick={handleChangeColor} style={{ width: "200px", height: "200px", backgroundColor: color }}></div>
            <hr />
            <h1>Dong ho bam gio: {time} </h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>

            <h1>Render {countRef.current}</h1>
            <input
                ref={inputRef}
                placeholder='Entername'
                onChange={e => setValue(e.target.value)}
            />

            {console.log("render")}

            <video src={video} width={"250px"} ref={videoRef} />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    )
}

export default RefContent