import React from 'react'
import "./Card.css"
import useThemeContext from "../../Hooks/useThemeContext";

const Card = ({emoji, text, detail}) => {

  const { darkMode } = useThemeContext();
  return (
    <div className="card" style={{
        background: darkMode ? 'var(--blue)' : 'rgba(255, 255, 255, 0.55)',
        border: darkMode ? '2px solid white' : '2px solid var(--blue)',
    }}>
        <img src={emoji} alt={text}/>
        <span style={{color: darkMode ? 'white' : ''}}>{text}</span>
        <span style={{color: darkMode ? 'white' : 'var(--black)'}}>{detail}</span>
    </div>
  )
}

export default Card