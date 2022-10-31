import "./Hobbies.css"
import Nba from "../../Img/NbaPic.png"
import Audio from "../../Img/AudioPic.jpeg"
import Nfl from "../../Img/FootballPic.png"
import Xbox from "../../Img/XboxPic.png"
import Dogs from "../../Img/OnyxCody.jpeg"
import useThemeContext from "../../Hooks/useThemeContext";


const Hobbies = () => {
  const { darkMode } = useThemeContext();
  return (
    <div className="hobbies">
      {/*left */}
     <div className="hobby">
            <span style={{color: darkMode && "white"}}>My Hobbies</span>
            <span>Spending Time With my Dogs (Onyx & Cody) </span>
            <span>Avid sports fan (Giants, Bulls, Mets)<br/>Gamer (X-Box)</span>
            <span>Music (Audio Engineer)</span>
            <span>Coding of course 😎</span>
                  <button className="button s-button">Contact Me</button>
                <div className="blur h-blur1" style={{background: "#409FF6"}}></div>
                <div className="blur h-blur2" style={{background: "#EC5B6C"}}></div>
        </div>
        {/*right */}
        <div className="h-right">
          <div className="h-mainCircle">
            <div className="h-secCircle">
              <img src={Nba} alt="Nba" />
            </div>
            <div className="h-secCircle">
              <img src={Nfl} alt="Nfl" />
            </div>
            <div className="h-secCircle">
              <img src={Dogs} alt="Nfl" />
            </div>
            <div className="h-secCircle">
              <img src={Audio} alt="Audio" />
            </div>
            <div className="h-secCircle">
              <img src={Xbox} alt="Xbox" />
            </div>
          </div>
          <div className="h-backgroundImg blueCircle"></div>
          <div className="h-backgroundImg redCircle"></div>
        </div>
    </div>
  )
}

export default Hobbies