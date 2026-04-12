import React from 'react'
import "./Intro.css"
import Github from "../../Assets/img/github.png"
import Linkedin from "../../Assets/img/linkedin.png"
import BasketBall from "../../Assets/img/basketball.png"
import Football from "../../Assets/img/football.png"
import VidGame from "../../Assets/img/2k.png"
import DogHeart from "../../Assets/img/dogheart.png"
import UP from "../../Assets/img/up.png"
import Me from "../../Assets/img/Me1.png"
import Music from "../../Assets/img/music.jpeg"
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Car from "../../Assets/img/car.png"
import CV from "../../Assets/Eric_Askew_Cover_Letter.pdf"
import useThemeContext from "../../Hooks/useThemeContext";
import { motion } from "framer-motion"

const Intro = () => {
    const { darkMode } = useThemeContext();
    const transition = {duration: 2, type: "spring", bounce: .6}

  return (
    <div className="intro" id="intro">
        {/* Header */}
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode && "white"}}>Hello! I am </span>
                <span >Eric Askew </span>
                <span id="i-name-text" style={{color: darkMode && "white"}}>Full Stack Software Engineer specializing in JavaScript, React, Vue.js, and Laravel. I love building intuitive interfaces and scalable systems — and I bring a unique perspective from my years as a professional audio engineer.</span>
            </div>
       
            <a className="buttonTag" href={CV} download>
            <button className="button i-button" type='submit' alt="Resume" style={{border: darkMode && "2px solid white"}}>Download CV</button>
            </a>
            <div className="i-icons">
                <a className="gitTag" href="https://github.com/Moonwalker5823" target="_blank" rel="noopener noreferrer">
                <img src={Github} alt="Github"/>
                </a>
                <a className="linkedinTag" href="https://www.linkedin.com/in/easkew51/" target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="LinkedIn" />
                </a>
            </div>
        </div>

        {/* Picture Header */}
        <div className="i-right">

            {/* Music Background */}
            <img className="introColor"src={Music} alt="MusicbackgrondImage"/>
            <img id="Me" style={{filter: darkMode && "brightness(65%)"}} src={Me} alt="MyPicture" />
            
            {/* Footbal/2K/Cars Floating Tab */}
            <motion.div 
                initial={{left: "-26%"}}
                whileInView={{left: "-0%"}}
                transition={transition}
                className='floating-div'
                
                >
                <img src={Football} alt="" />
                <img src={VidGame} alt="" />
                <img src={Car} alt="" />
            </motion.div>

            {/* Web Dev Floating Tab */}
            <motion.div 
                initial={{top: "-4%", left: "74%"}}
                whileInView={{left: "50%"}}
                transition={transition}
                style={{top: '-4%', left: '60%'}}
                className="floating-div"
            >
                <FloatingDiv 
                    image={DogHeart} txt1="Web" txt2="Developer"/>
            </motion.div>

            {/* Responsive Design Floating Tab */}
            <motion.div 
                initial={{left: "9rem", top: "18rem"}}
                whileInView={{left: "0rem", top: "20rem"}}
                transition={transition}
                style={{top: '18rem', left: '0rem'}}
                className="floating-div"
            >
                <FloatingDiv image={BasketBall} txt1="Responsive" txt2="Design"/>
            </motion.div>

            {/* Scalable Systems Floating Tab */}
            <motion.div 
                initial={{left: "10%", top: "30rem"}}
                whileInView={{left: "30%"}}
                transition={transition}
                style={{top: '30rem', left: '30%'}}
                className="floating-div"
            >
                <FloatingDiv
                    image={UP}
                    txt1="Scalable"
                    txt2="Systems"
                    imgStyle={{
                        height: '2.5rem',
                        width: 'auto',
                        filter: 'brightness(0) saturate(100%) invert(12%) sepia(100%) saturate(6000%) hue-rotate(237deg) brightness(105%)'
                    }}
                />
            </motion.div>

            <div className="blur" style={{background: '#409FF6'}}></div>
            <div className="blur2" style={{background: '#EC5B6C'}}></div>
        </div>
    </div>
  )
}

export default Intro