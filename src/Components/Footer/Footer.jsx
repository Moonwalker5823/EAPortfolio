import "./Footer.css"
import Wave from "../../Assets/Img/musicWave.jpeg"
import Github from "@iconscout/react-unicons/icons/uil-github"
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin"
import useThemeContext from "../../Hooks/useThemeContext";

const Footer = () => {
    const { darkMode } = useThemeContext();
  return (
    <div className={`footer ${darkMode ? 'dark' : ''}`} id="Footer">
        <img src={Wave} alt="wave decoration" className="footerWave"/>
        <div className="f-content">
            <a href="mailto:Easkew81@yahoo.com" className="f-email">Easkew81@yahoo.com</a>
            <div className="f-icons">
                <a href="https://github.com/Moonwalker5823" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github size={'2rem'}/>
                </a>
                <a href="https://www.linkedin.com/in/eric-askew-5a7a47168/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin size={'2rem'}/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer
