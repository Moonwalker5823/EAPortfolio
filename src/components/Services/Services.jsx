import "./Services.css"
import Cool from "../../Img/coolemoji.png"
import Smile from "../../Img/smileemoji.png"
import Wink from "../../Img/winkemoji.png"
import Card from "../Card/Card"
import Resume from "./EricResume.pdf"

const Services = () => {
  return (
    <div className="services">
        {/*Left */}
        <div className="service">
            <span>My Services</span>
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
        <div className="cards">
            <div className="l-card">
                <Card 
                    emoji= {Cool}
                    text="Design"
                    detail={"Figma, Sketch, Photoshop, Excalidraw"}
                />
            </div>
            <div className="blur s-blur2" style={{background: "#EC5B6C"}}></div>
            <div className="r-card">
                <Card 
                    emoji= {Smile}
                    text="Engineer"
                    detail={"React, Node.js, Next.js, Axios, SQL, Mongodb"}
                />
            </div>
            <div className="m-card">
                <Card 
                    emoji= {Wink}
                    text="UX/UI"
                    detail={"Bootstrap, Material UI, Emotion, "}
                />
            </div>
        </div>
    </div>
  )
}

export default Services
