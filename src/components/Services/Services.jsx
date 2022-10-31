import "./Services.css"
import Cool from "../../Img/coolemoji.png"
import Smile from "../../Img/smileemoji.png"
import Wink from "../../Img/winkemoji.png"
import Card from "../Card/Card"
import Resume from "./EricResume.pdf"
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
            Excited and passionate about responsive, scalable web design,
            <br/>
            using modern libraries and framworks.
                  </span>
                  <a href={Resume} download>
                  <button className="button s-button">Download Resume</button>
                  </a>
                <div className="blur s-blur1" style={{background: "#409FF6"}}></div>
        </div>
        {/*Right */}
        <motion.div 
            whileInView={{left: "5rem"}}
            initial={{left: "30%"}}
            transition={transition}
            className="cards"
        >
            <div className="l-card">
                <Card 
                    emoji= {Cool}
                    text="Design"
                    detail={"Figma, Sketch, Photoshop, Excalidraw"}
                    site="https://www.figma.com/design-systems/?utm_source=google&utm_medium=cpc&utm_campaign=18674170714&utm_term=&utm_content=629977413034&gclid=Cj0KCQjwwfiaBhC7ARIsAGvcPe5aliIktcXbbpwsrLvc2_RBB1H1UGGSZLW6R_bpfp0uCf1ro_UQ4LQaAnv-EALw_wcB"
                />
            </div>
            <div className="blur s-blur2" style={{background: "#EC5B6C"}}></div>
            <div className="r-card">
                <Card 
                    emoji= {Smile}
                    text="Engineer"
                    detail={"React, Node.js, Next.js, Axios, SQL, Mongodb"}
                    site="https://reactjs.org/docs/getting-started.html"
                />
            </div>
            <div className="m-card">
                <Card 
                    emoji= {Wink}
                    text="UX/UI"
                    detail={"Bootstrap, Material UI, Emotion, "}
                    site="https://mui.com/"
                />
            </div>
        </motion.div>
    </div>
  )
}

export default Services
