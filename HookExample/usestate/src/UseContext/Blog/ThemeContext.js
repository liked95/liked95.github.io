import React,{createContext} from 'react'
import { useState } from 'react'



export const ThemeContext = createContext()


function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark")

    const toggleTheme = () => {
        setTheme(theme == "dark" ? "light" : "dark")
    }

    let ctx = {
        theme,
        toggleTheme,
    }


    return (
        <ThemeContext.Provider value={ctx}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider