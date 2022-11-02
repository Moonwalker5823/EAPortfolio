import React from 'react'
import "./Intro.css"
import Github from "../../assets/Img/github.png"
import Linkedin from "../../assets/Img/linkedin.png"
import YouTube from "../../assets/Img/youTube2.png"
import BasketBall from "../../assets/Img/basketball.png"
import Football from "../../assets/Img/football.png"
import VidGame from "../../assets/Img/2k.png"
import DogHeart from "../../assets/Img/dogheart.png"
import Me from "../../assets/Img/Me1.png"
import Music from "../../assets/Img/music.jpeg"
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Car from "../../assets/Img/car.png"
import CV from "../../assets/CoverLetter.pdf"
import useThemeContext from "../../Hooks/useThemeContext";
import { motion } from "framer-motion"

const Intro = () => {
    const { darkMode } = useThemeContext();
    const transition = {duration: 2, type: "spring", bounce: .6}

  return (
    <div className="intro" id="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode && "white"}}>Hello! I am </span>
                <span >Eric Askew </span>
                <span>A dedicated Software Engineer with a passion for frontend technology & design.</span>
            </div>
       
        <a  className="buttonTag" href={CV
        } download>
            <button className="button i-button" type='submit' alt="Resume" style={{border: darkMode && "2px solid white"}}>Download CV</button>
        </a>
        <div className="i-icons">
            <a className="gitTag" href="https://github.com/Moonwalker5823" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="Github"/>
            </a>
            <a className="linkedinTag" href="https://www.linkedin.com/in/eric-askew-8a91714a/" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="LinkedIn" />
            </a>
            <a className="YouTubeTag" href="https://www.youtube.com/watch?v=ReZv011cCu0" target="_blank" rel="noopener noreferrer">
            <img src={YouTube} alt="YouTube" />
            </a>
        </div>
        </div>
        <div className="i-right">
            <img className="introColor"src={Music} alt="MusicbackgrondImage"/>
            <img src={Me} alt="MyPicture" />
            <motion.div 
                initial={{left: "-26%"}}
                whileInView={{left: "-0%"}}
                transition={transition}
                className='i-rightFloatingDiv floating-div'
                
                >
                <img src={Football} alt="" />
                <img src={VidGame} alt="" />
                <img src={Car} alt="" />
            </motion.div>

            <motion.div 
                initial={{top: "-4%", left: "74%"}}
                whileInView={{left: "35%"}}
                transition={transition}
                style={{top: '-4%', left: '60%'}}
                className="floating-div"
            >
                <FloatingDiv 
                    image={DogHeart} txt1="Web" txt2="Developer"/>
            </motion.div>

            <motion.div 
                initial={{left: "9rem", top: "18rem"}}
                whileInView={{left: "0rem",top: "20rem"}}
                transition={transition}
                style={{top: '18rem', left: '0rem'}}
                className="floating-div"
            >
                <FloatingDiv image={BasketBall} txt1="Responsive" txt2="Design"/>
            </motion.div>
            <div className="blur" style={{background: '#409FF6'}}></div>
            <div className="blur2" style={{background: '#EC5B6C'}}></div>
        </div>
    </div>
  )
}

export default Intro