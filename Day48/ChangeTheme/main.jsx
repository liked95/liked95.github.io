const App = () => {
    const themes = [
        {
            colorHeading: "#2C3639", // light theme
            colorText: "#3F4E4F",
            bg: "#F9F5EB",
        },
        {
            colorHeading: "#EAE3D2", // dark theme
            colorText: "#F9F5EB",
            bg: "#100720",
        },
    ];

    const [theme, setTheme] = React.useState(themes[0])
    const {colorHeading, colorText, bg} = theme
    console.log(colorHeading, colorText, bg)

    function changeTheme(value) {
        if (value == "Light Theme") setTheme(themes[0])
        else setTheme(themes[1])
    }








    return (
        <div style={{backgroundColor: bg}}>
            <select onChange={(e) => changeTheme(e.target.value)}>
                <option>Light Theme</option>
                <option>Dark Theme</option>
            </select>

            <h2 style={{color: colorHeading}}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h2>
            <p style={{color: colorText}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                placeat necessitatibus, vitae laboriosam in quos, nesciunt modi
                error sit porro, reprehenderit voluptatem dolore libero
                incidunt. Illo mollitia fugit quam inventore?
            </p>
        </div>
    )
}
// Root Dom
const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(<App />)