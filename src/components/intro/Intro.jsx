import React from 'react'

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hello! I am </span>
                <span>Eric Askew </span>
                <span>Software Engineer with a passion for frontend technology and design.</span>
            </div>
        </div>
        <a href='https://docs.google.com/document/d/18PxRP97Ol9js9mTZvpxjsNPYE63B57ExSMUJ7zZcTS0/edit#heading=h.iiy9p81ivgql' download>
            <button className="button i-button" type='submit' alt="Resume">Download Resume</button>
        </a>
    </div>
  )
}

export default Intro