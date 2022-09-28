import React, {useEffect, useState} from 'react'

function List({ getItems }) {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems())
        console.log("Updated items already")
    }, [getItems])
    
    return (
        <div>
            {items.map((item, index) => <p
                key={index}>
                {item}
            </p>)}
        </div>
    )
}

export default List