import "./Services.css"
import Cool from "../../Assets/Img/coolemoji.png"
import Smile from "../../Assets/Img/smileemoji.png"
import Wink from "../../Assets/Img/winkemoji.png"
import Card from "../Card/Card"
import Resume from "../../Assets/EricResume.pdf"
import useThemeContext from "../../Hooks/useThemeContext";
import { motion } from "framer-motion"

const Services = () => {
    const { darkMode } = useThemeContext();
    const transition = {duration: '2', type: "spring", bounce: .5}

  return (
    <div className="services" id="Services">
        {/*Left */}
        <div className="service">
            <span style={{color: darkMode && "white"}}>My Services</span>
            <span> 
            Innovative software engineer. </span>
            <span>
            Excited and passionate about responsive, scalable web design
            <br/>
            using modern libraries and frameworks.
                  </span>
                  <a href={Resume} download>
                  <button className="button s-button" style={{border: darkMode && "2px solid white"}}>Download Resume</button>
                  </a>
                <div className="blur s-blur1" style={{background: "#409FF6"}}></div>
        </div>
        {/*Right */}
        <div className="cards">

            <motion.div 
             initial={{ left: "15rem" }}
             whileInView={{ left: "-2rem" }}
             transition={transition}
             className="l-card">
                <Card 
                    emoji= {Cool}
                    text="Design"
                    detail={"Figma, Sketch, Photoshop, Excalidraw"}
                />
            </motion.div>
            <motion.div 
                initial={{ left: "-35rem", top: "12rem" }}
                whileInView={{ left: "-20rem" }}
                transition={transition}
            className="r-card">
                <Card 
                    emoji= {Smile}
                    text="Engineer"
                    detail={"React, Node.js, Next.js, Axios, SQL, Mongodb"}
                />
            </motion.div>
            <motion.div initial={{ top: "19rem", right: "-40rem" }}
                whileInView={{ left: "-2rem" }}
                transition={transition}
                className="m-card">
                <Card 
                    emoji= {Wink}
                    text="UI/UX"
                    detail={"Bootstrap, Material UI, Emotion "}
                />
            </motion.div>
        </div>
        <div className="blur s-blur2" style={{background: "#EC5B6C"}}></div>
    </div>
  )
}

export default Services
