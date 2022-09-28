let initialColors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]
const App = () => {
    const [colors, setColors] = React.useState(initialColors)

    const addMoreBox = () => {

    }

    function removeBox(index) {
        let newColors = [...colors]
        newColors.splice(index, 1)
        console.log(index)
        setColors(newColors)
    }


    return (
        <div className="wrap">
            <h1> JS DOM</h1>
            <button id="btn" onClick={addMoreBox}>More boxes</button>
            <h4 id="score"> Total box:<span className="points">{colors.length}</span></h4>

            <div className="boxes">
                {colors.map((color, index) => <Box key={index} index={index} color={color} removeBox={removeBox} />)}
            </div>


        </div>
    )
}

const Box = ({ color, removeBox, index }) => {
    console.log(color)
    return (
        <div
            className="box"
            style={{ backgroundColor: color }}
            onClick={() => { removeBox(index) }}
        ></div>
    )
}
// Root Dom
const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(<App />)