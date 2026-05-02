import React, { useState, useEffect } from 'react'
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
import CV from "../../Assets/EAskew_Cover_Letter_2026_v2.pdf"
import useThemeContext from "../../Hooks/useThemeContext";
import { motion } from "framer-motion"

const blueFilter = "brightness(0) saturate(100%) invert(66%) sepia(21%) saturate(469%) hue-rotate(201deg) brightness(104%)"

const Intro = () => {
    const { darkMode } = useThemeContext();
    const transition = {duration: 2, type: "spring", bounce: .6}
    const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 962px)').matches);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 962px)');
        const handler = (e) => setIsMobile(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

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
                <img src={Github} alt="Github" style={{filter: blueFilter}}/>  
                </a>
                <a className="linkedinTag" href="https://www.linkedin.com/in/easkew51/" target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="LinkedIn" style={{filter: blueFilter}}/> 
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
                <img src={Football} alt="" style={{filter: blueFilter }} />
                <img src={VidGame} alt="" style={{filter: blueFilter}} />
                <img src={Car} alt="" style={{filter: blueFilter}} />
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
                    image={DogHeart} txt1="Web" txt2="Developer" imgStyle={{filter: !darkMode ? blueFilter : undefined}}/>
            </motion.div>

            {/* Responsive Design Floating Tab */}
            <motion.div
                key={isMobile ? 'responsive-mobile' : 'responsive-desktop'}
                initial={isMobile ? {left: "-4rem", top: "9rem"} : {left: "9rem", top: "18rem"}}
                {...(isMobile
                    ? { animate: {left: "-4rem", top: "9rem"} }
                    : { whileInView: {left: "0rem", top: "20rem"} }
                )}
                transition={isMobile ? {duration: 0} : transition}
                style={isMobile ? {top: '9rem', left: '-4rem'} : {top: '18rem', left: '0rem'}}
                className="floating-div"
            >
                <FloatingDiv image={BasketBall} txt1="Responsive" txt2="Design" imgStyle={{filter: !darkMode ? blueFilter : undefined}}/>
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
                        filter: !darkMode ? blueFilter : undefined,
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