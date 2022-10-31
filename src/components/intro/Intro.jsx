import React from 'react'
import "./Intro.css"
import Github from "../../Img/github.png"
import Linkedin from "../../Img/linkedin.png"
import BasketBall from "../../Img/basketball.png"
import Football from "../../Img/football.png"
import VidGame from "../../Img/2k.png"
import DogHeart from "../../Img/dogheart.png"
import Me from "../../Img/Me.jpeg"
import Music from "../../Img/music.jpeg"
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Car from "../../Img/car.png"
import CV from "./CV.docx"
import useThemeContext from "../../Hooks/useThemeContext";

const Intro = () => {

    const { darkMode } = useThemeContext();

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode && "white"}}>Hello! I am </span>
                <span >Eric Askew </span>
                <span>A dedicated Software Engineer with a passion for frontend technology & design.</span>
            </div>
       
        <a  className="buttonTag" href={CV
        } download>
            <button className="button i-button" type='submit' alt="Resume">Download CV</button>
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