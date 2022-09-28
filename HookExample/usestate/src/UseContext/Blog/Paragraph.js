import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Paragraph() {
  const context = useContext(ThemeContext)
  console.log(context)
  return (
    <p className={context.theme}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
  )
}

export default Paragraph