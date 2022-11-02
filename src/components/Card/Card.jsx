import React from 'react'
import "./Card.css"
import useThemeContext from "../../Hooks/useThemeContext";
import { motion } from "framer-motion"

const Card = ({emoji, text, detail}) => {

  const { darkMode } = useThemeContext();
  return (
    <div className="card">
        <img src={emoji} alt={emoji}/>
        <span>{text}</span>
        <span style={{color: darkMode && "white"}}>{detail}</span>
    </div>
  )
}

export default Card