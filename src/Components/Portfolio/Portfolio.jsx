import "./Portfolio.css"
import Beamql from "../../Assets/img/beamql.jpeg"
import Digiheart from "../../Assets/img/Digiheart.png"
import Hemmings from "../../Assets/img/hemmingsLogo.png"
import TruckStar from "../../Assets/img/TruckStar.png"
import useThemeContext from "../../Hooks/useThemeContext";

const Portfolio = () => {
  const { darkMode } = useThemeContext();
  return (
    <div className="portfolio" id="Portfolio">
      <span id='scrollHeader' style={{color: darkMode && "white"}}>Portfolio</span>
      <div className="blur p-blur1" style={{background: "#409FF6"}}></div>
      <div className="portfolio-cards">
        <a href="https://hemmings.com" target="_blank" rel="noreferrer" className="portfolioCard">
          <img src={Hemmings} alt="Hemmings" style={{aspectRatio: '1', objectFit: 'cover'}} />
          <span id='title'>Hemmings</span>
          <span id='subtitle'>Contact Page | Membership (One Page Checkout) | Checkout Flows | Bidding System</span>
        </a>
        <a href="https://digiheart.vercel.app/" target="_blank" rel="noreferrer" className="portfolioCard">
          <img src={Digiheart} alt="Digiheart" />
          <span id='title'>Digiheart (May 2026)</span>
          <span id='subtitle'>Digital Keepsake for Precious Memories</span>
        </a>
        <a href="https://erictruckstarfoodfinder.vercel.app/" target="_blank" rel="noreferrer" className="portfolioCard">
          <img src={TruckStar} alt="TruckStar" style={{aspectRatio: '1', objectFit: 'cover'}} />
          <span id='title'>TruckStar</span>
          <span id='subtitle'>Food Truck Finder</span>
        </a>
        <a href="https://github.com/Moonwalker5823" target="_blank" rel="noreferrer" className="portfolioCard">
          <img src={Beamql} alt="beamql" />
          <span id='title'>BeamQl</span>
          <span id='subtitle'>Streamline migration to GraphQL</span>
        </a>
      </div>
      <div className="blur p-blur2" style={{background: "#EC5B6C"}}></div>
    </div>
  )
}

export default Portfolio
