import React from 'react'
import "./Card.css"

const Card = ({emoji, text, detail, site}) => {
  return (
    <div className="card">
        <img src={emoji} alt={emoji}/>
        <span>{text}</span>
        <span>{detail}</span>
        <a href={site} alt="text">
        <button className="c-button">Learn More</button>
        </a>
    </div>
  )
}

export default Card