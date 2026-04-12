import "./Hobbies.css"
import Nba from "../../Assets/img/NbaPic.png"
import Audio from "../../Assets/img/AudioPic.jpeg"
import Nfl from "../../Assets/img/FootballPic.png"
import Xbox from "../../Assets/img/XboxPic.png"
import Dogs from "../../Assets/img/cartoon_dogs.png"
import useThemeContext from "../../Hooks/useThemeContext";
import { motion } from "framer-motion"
import {Link} from "react-scroll"


const Hobbies = () => {
  const { darkMode } = useThemeContext();
  return (
    <div className="hobbies" id="Hobbies">
      {/*left */}
     <div className="hobby">
        <span id="Header" style={{color: darkMode && "white"}}>My Hobbies</span>
        <span id="hobby_text" style={{color: darkMode ? "white" : "var(--black)"}}>
          When I'm not pushing code, you can find me...<br/><br/>
          🐾 Hanging with Onyx &amp; Cody — My pitbull Onyx and morkie Cody keep life entertaining. Best debugging companions in the business.<br/><br/>
          🏈 Diehard Sports Fan — Giants, Bulls, and Mets through the good times and the bad. Fantasy football is basically a second job at this point.<br/><br/>
          🎮 Xbox Gamer — Whether it's competing online or just unwinding after a long sprint, gaming is my reset button.<br/><br/>
          🎵 Music &amp; Audio Engineering — Before I was writing code I was behind the console recording sessions with major artists in NYC. Music never leaves you — it just changes how you build things.<br/><br/>
          💻 Coding (Obviously 😎) — Building side projects, exploring new frameworks, contributing to open source. If there's a problem worth solving, there's probably a weekend project about it.
        </span>
        <Link spy={true} smooth={true} to="Contact">
        <button className="button s-button" style={{border: darkMode && "2px solid white"}}>Contact Me</button></Link>
        <div className="blur h-blur1" style={{background: "#409FF6"}}></div>
        <div className="blur h-blur2" style={{background: "#EC5B6C"}}></div>
        </div>
        {/*right */}
        <div className="h-right">
          <motion.div 
            initial={{ rotate: 90 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="h-mainCircle"
            style={{background: "var(--blue)"}}
          >
            <div className="h-secCircle">
              <img src={Nba} alt="Nba" />
            </div>
            <div className="h-secCircle">
              <img src={Nfl} alt="Nfl" />
            </div>
            <div className="h-secCircle">
              <img id="dogs" src={Dogs} alt="Dogs" style={{width: '600px', border: '4px solid var(--blue)', borderRadius: '10%'}} />
            </div>
            <div className="h-secCircle">
              <img src={Audio} alt="Audio" />
            </div>
            <div className="h-secCircle">
              <img src={Xbox} alt="Xbox" />
            </div>
          </motion.div>
          <div className="h-backgroundImg blueCircle"></div>
          <div className="h-backgroundImg redCircle"></div>
        </div>
    </div>
  )
}

export default Hobbies