const App = () => {
    const [listItems, setList] = React.useState(["Item 1", "Item 2", "Item 3"])
    const [showList, setShowList] = React.useState(true)


    function addToList() {
        const inputValue = document.getElementById("input").value
        if (!inputValue) {
            alert("input ko dc de trong");
            return;
        }

        setList([...listItems, inputValue])

        document.getElementById("input").value = ""
    }

    const removeFromList = () => {
        if (listItems.length == 0) {
            alert("Danh sách hiện đang trống");
            return;
        }

        setList(listItems.slice(0, listItems.length - 1))

    }

    const toggleShow = () => {
        if (showList) {
            setShowList(false)
        } else {
            setShowList(true)
        }
    }


    return (
        <div>
            <button onClick={addToList}>Add</button>
            <button onClick={removeFromList}>Remove</button>
            <input type="text" id="input" />

            {showList ? <List listItems = {listItems}/> : null}


            <button style={{display: "block"}}onClick={toggleShow}>Hide List</button>

        </div>


    )
}


const List = ({listItems}) => {
    
    return (
        <ul id="list">
            {listItems.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    )
}


// Root Dom
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App />)