import React from 'react'
import "./Card.css"
import useThemeContext from "../../Hooks/useThemeContext";
import { motion } from "framer-motion"

const Card = ({emoji, text, detail, site}) => {

  const { darkMode } = useThemeContext();
  return (
    <div className="card">
        <img src={emoji} alt={emoji}/>
        <span>{text}</span>
        <span style={{color: darkMode && "white"}}>{detail}</span>
        <a href={site} alt="text">
        <button className="c-button">Learn More</button>
        </a>
    </div>
  )
}

export default Card