import Toggle from "../Toggle/Toggle"
import "./Navbar.css"
import {Link} from "react-scroll"
import useThemeContext from "../../Hooks/useThemeContext";

const Navbar = () => {
    const { darkMode } = useThemeContext();

  return (
   <div style={{backgroundColor: darkMode && "blue", color: darkMode && "white"}}className="n-wrapper">
    <div className="n-left">
        <div className="n-name">Eric</div>
       <Toggle/>DarkMode
    </div>
    <div className="n-right">
        <div className="n-list">
            <ul>
                <Link spy={true} offset={-200} smooth={true} to="intro">
                <li>Home</li>
                </Link>

                <Link spy={true} offset={-200} smooth={true} to="Services">
                <li>Services</li>
                </Link>

                <Link spy={true} offset={-200} smooth={true} to="Experience">
                <li>Experience</li>
                </Link>

                <Link spy={true} offset={-200} smooth={true} to="Hobbies">
                <li>Hobbies</li>
                </Link>

                <Link spy={true} offset={-200} smooth={true} to="Portfolio">
                <li>Portfolio</li>
                </Link>

                <Link spy={true} smooth={true} to="Testimonial">
                <li>Testimonials</li>
                </Link>
                
            </ul>
        </div>
        <Link spy={true} smooth={true} to="Contact">
        <button className="button" style={{border: darkMode && "2px solid whitesmoke"}}>Contact Me</button>
        </Link>
    </div>
   </div>
  )
}

export default Navbar