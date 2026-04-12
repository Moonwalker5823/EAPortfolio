import "./Services.css"
import Cool from "../../Assets/img/coolemoji.png"
import Smile from "../../Assets/img/smileemoji.png"
import Wink from "../../Assets/img/winkemoji.png"
import Card from "../Card/Card"
import Resume from "../../Assets/Eric_Askew_Resume.pdf"
import useThemeContext from "../../Hooks/useThemeContext";
import { motion } from "framer-motion"

const Services = () => {
    const { darkMode } = useThemeContext();
    const transition = {duration: 2, type: "spring", bounce: .5}

  return (
    <div className="services" id="Services">
        {/*Left */}
        <div className="service">
            <span  id='scrollHeader' style={{color: darkMode && "white"}}>My Services</span>
            <span>Design & Engineering Consulting</span>
            <span>
                Who's passionate about building responsive, scalable web experiences using modern libraries, frameworks, and thoughtful design.
            </span>
            <a href={Resume} download>
            <button className="button s-button"
                style={{border: darkMode && "2px solid white"}}
            >Download Resume</button>
            </a>
            <div className="blur s-blur1" style={{background: "#409FF6"}}></div>
        </div>
        {/*Right */}
        <div className="cards">

            <motion.div 
             initial={{ left: "10rem" }}
             whileInView={{ left: "8rem" }}
             transition={transition}
             className="l-card">
                <Card 
                    emoji= {Cool}
                    text="Design / Frontend"
                    detail={"Translating ideas into clean, functional interfaces using Figma, Excalidraw, Sketch, and Photoshop. Experienced collaborating with product and design teams to bring concepts to life through thoughtful frontend implementation."}
                />
            </motion.div>
            <motion.div 
                initial={{ left: "-35rem", top: "12rem" }}
                whileInView={{ left: "-20rem" }}
                transition={transition}
            className="r-card">
                <Card 
                    emoji= {Smile}
                    text="Full Stack Engineering"
                    detail={"Delivering production-grade full stack solutions using React, Vue.js, Laravel, Node.js, Express, Next.js, GraphQL, MySQL, and MongoDB. 4+ years of experience shipping features end-to-end and advising on scalable architecture decisions."}
                />
            </motion.div>
            <motion.div
                initial={{ top: "20rem", left: "20rem" }}
                whileInView={{ left: "2rem" }}
                transition={transition}
                className="m-card">
                <Card 
                    emoji= {Wink}
                    text="UI/UX"
                    detail={"Crafting polished, accessible user experiences with Tailwind CSS, Bootstrap, Material UI, and Emotion. Focused on responsive design, usability, and building intuitive, maintainable component systems."}
                />
            </motion.div>
        </div>
        <div className="blur s-blur2" style={{background: "#EC5B6C"}}></div>
    </div>
  )
}

export default Services
