import React, { createContext, useContext } from 'react'
import Section from './Section'
import ThemeProvider, { ThemeContext } from "./ThemeContext"



// props theme: light, dark
// Context: createContext()
// Provider: Cung cap value cho context
// Consumer: Lay ra gia tri tu context


function Blog() {
    const ctx = useContext(ThemeContext)
    console.log(ctx)

    return (
        <>
            <Section />
            <button onClick={ctx.toggleTheme}>Toggle Theme</button>
        </>
    )
}

export default Blog
