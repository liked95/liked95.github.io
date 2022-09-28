import React, { useState, useEffect } from 'react'

function Clock() {
    const [time, setTime] = useState(() => {
        let now = new Date()
        return now.toLocaleTimeString()
    })

    useEffect(() => {
       let intervalID = setInterval(() => {
            console.log("inside interval")
            setTime(new Date().toLocaleTimeString())
        }, 1000);

        //option clean up: được chạy 1 lần duy nhất truoc khi component bị unmount
        // chạy sau khi component bị rerender và chạy trước hàm call back được thực hiện
        return () => {
            clearInterval(intervalID)
        }
    }, [])


    // useEffect(()=> {
    //     const handleScroll = () => {
    //         console.log("handleScroll")
    //     }
    //     window.addEventListener("scroll", handleScroll)
    // }, [])


    return (
        <div >
            <h1>Clock: {time}</h1>
            {console.log("Clock render")}
        </div>
    )
}

export default Clock