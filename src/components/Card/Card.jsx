import React from 'react'
import "./Card.css"

const Card = ({emoji, text, detail}) => {
  return (
    <div className="card">
        <img src={emoji} alt={emoji}/>
        <span>{text}</span>
        <span>{detail}</span>
        <button className="c-button">Learn More</button>
    </div>
  )
}

export default Card