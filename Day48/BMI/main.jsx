const App = () => {
    const [BMI, setBMI] = React.useState(0)
    const [weightValid, setWeightValid] = React.useState("")
    const [heightValid, setHeightValid] = React.useState("")
    const [weight, setWeight] = React.useState("")
    const [height, setHeight] = React.useState("")

    function validate() {
        console.log(weight, height)
        if (!weight) {
            setWeightValid("Weight cannot be blank")
        } else if (isNaN(weight)) {
            setWeightValid("Weight is not formatted correctly")
        } else if (weight <= 0) {
            setWeightValid("Weight must be greater than 0")
        } else {
            setWeightValid("")
        }

        if (!height) {
            setHeightValid("Height cannot be blank")
        } else if (isNaN(height)) {
            setHeightValid("Height is not formatted correctly")
        } else if (height <= 0) {
            setHeightValid("Height must be greater than 0")
        } else {
            setHeightValid("")
        }

        if (!isNaN(weight) && weight > 0 && !isNaN(height) && height > 0) {
            setBMI(weight / (height * height))
        } else {
            setBMI(0)
        }
    }

    return (
        <div>
            <input type="text" id="weight-input" placeholder="Enter your weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
            <p className="weight-validation" style={{ color: 'red' }}>{weightValid}</p>

            <input type="text" id="height-input" placeholder="Enter your height" value={height} onChange={(e) => setHeight(e.target.value)} />
            <p className="height-validation" style={{ color: 'red' }}>{heightValid}</p>

            <button id="calc" onClick={() => validate()}>Calculate</button>
            <div>BMI: <span id="bmi-res">{BMI}</span></div>
        </div>
    )
}
// Root Dom
const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(<App />)