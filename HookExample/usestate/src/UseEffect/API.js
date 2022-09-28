import React, { useState, useEffect } from 'react'

const options = ["posts", "comments", "albums"]

function API() {
    const [data, setData] = useState([])
    const [type, setType] = useState(options[0])

    useEffect(() => {
        console.log("FETCH API");
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type])


    return (
        <>
            <div>API</div>
            <h1>{type}</h1>

            {options.map((option, index) =>
                <button
                    key={index}
                    style = {option === type ? {backgroundColor: "#000", color: "#fff"} : {}}
                    onClick={() => setType(option)}>{option}</button>)}
            {/* {console.log(data)} */}
            <ul>
                {console.log(data)}
                {data.map((item, idx) => {
                    <li key={idx}>{item.title}</li>
                })}
            </ul>



            {console.log("renderred")}
        </>

    )
}

export default API