import React from 'react'
import "./Intro.css"
import Github from "../../img/github.png"
import Linkedin from "../../img/linkedin.png"
import BasketBall from "../../img/basketball.png"
import Football from "../../img/football.png"
import VidGame from "../../img/2k.png"
import DogHeart from "../../img/dogheart.png"
import Me from "../../img/Me.jpeg"
import Music from "../../img/music.jpeg"
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Car from "../../img/car.png"

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hello! I am </span>
                <span>Eric Askew </span>
                <span>A dedicated Software Engineer with a passion for frontend technology & design.</span>
            </div>
       
        <a  className="buttonTag" href='https://docs.google.com/document/d/18PxRP97Ol9js9mTZvpxjsNPYE63B57ExSMUJ7zZcTS0/edit#heading=h.iiy9p81ivgql' download>
            <button className="button i-button" type='submit' alt="Resume">Download Resume</button>
        </a>
        <div className="i-icons">
            <a className="gitTag" href="https://github.com/Moonwalker5823">
            <img src={Github} alt="Github" />
            </a>
            <a className="linkedinTag" href="https://www.linkedin.com/in/eric-askew-8a91714a/">
            <img src={Linkedin} alt="LinkedIn" />
            </a>
        </div>
        </div>
        <div className="i-right">
            <img className="introColor"src={Music} alt="MusicbackgrondImage"/>
            <img src={Me} alt="MyPicture" />
            <div className='i-rightFloatingDiv'>
                <img src={Football} alt="" />
                <img src={VidGame} alt="" />
                <img src={Car} alt="" />
            </div>
            <div style={{top: '-4%', left: '60%'}}>
                <FloatingDiv image={DogHeart} txt1="Web" txt2="Developer"/>
            </div>
            <div style={{top: '18rem', left: '0rem'}}>
                <FloatingDiv image={BasketBall} txt1="Responsive" txt2="Design"/>
            </div>
            <div className="blur" style={{background: '#409FF6'}}></div>
            <div className="blur2" style={{background: '#EC5B6C'}}></div>
        </div>
    </div>
  )
}

export default Intro