const Counter = () => {
    const [count, setCount] = React.useState(0)
    const [color, setColor] = React.useState("#333333")
    // Ham setState la asynchoronous

    const plusCount = () => {
        setCount(count + 1)
        changeColor()
    }
    
    const minusCount = () => {
        setCount(count - 1)
        changeColor()
    }

    React.useEffect(() => {
        changeColor()
    }, [count])

    const changeColor = () => {
        if (count > 0) {
            setColor("green")
        } else if (count == 0) {
            setColor("#333333")
        } else {
            setColor("red")
        }
    }

    return (
        <div className="main-container">
            <h1 className="title">Đếm số</h1>
            <h1 id="counter" style={{ color: color }}>{count}</h1>
            <div className="btn-container">
                <button className="btn counterBtn prevBtn" onClick={minusCount}>Trừ</button>
                <button className="btn counterBtn nextBtn" onClick={plusCount}>Cộng</button>
            </div>
        </div>
    )
}

// Root Dom
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Counter />)