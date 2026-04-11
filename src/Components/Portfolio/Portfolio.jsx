import "./Portfolio.css"
import Beamql from "../../Assets/Img/beamql.jpeg"
import Digiheart from "../../Assets/Img/Digiheart.png"
import Mpf from "../../Assets/Img/MPFormReact.png"
import TruckStar from "../../Assets/Img/TruckStar.png"
import useThemeContext from "../../Hooks/useThemeContext";

const Portfolio = () => {
  const { darkMode } = useThemeContext();
  return (
    <div className="portfolio" id="Portfolio">
      <span style={{color: darkMode && "white"}}>Portfolio</span>
      <div className="blur p-blur1" style={{background: "#409FF6"}}></div>
      <div className="portfolio-cards">
        <a href="https://github.com/Moonwalker5823" target="_blank" rel="noreferrer" className="portfolioCard">
          <img src={Beamql} alt="beamql" />
          <span id='title'>BeamQl</span>
          <span id='subtitle'>Streamline migration to GraphQL</span>
        </a>
        <a href="https://github.com/Moonwalker5823" target="_blank" rel="noreferrer" className="portfolioCard">
          <img src={Mpf} alt="Mpf" />
          <span id='title'>MultiPartForm React</span>
          <span id='subtitle'>Multi-Part React Form</span>
        </a>
        <a href="https://github.com/Moonwalker5823" target="_blank" rel="noreferrer" className="portfolioCard">
          <img src={TruckStar} alt="TruckStar" style={{aspectRatio: '1', objectFit: 'cover'}} />
          <span id='title'>TruckStar (April 2026)</span>
          <span id='subtitle'>Food truck finder</span>
        </a>
        <a href="https://github.com/Moonwalker5823" target="_blank" rel="noreferrer" className="portfolioCard">
          <img src={Digiheart} alt="Digiheart" />
          <span id='title'>Digiheart (May 2026)</span>
          <span id='subtitle'>Digital Keepsake for Precious Memories</span>
        </a>
      </div>
      <div className="blur p-blur2" style={{background: "#EC5B6C"}}></div>
    </div>
  )
}

export default Portfolio
