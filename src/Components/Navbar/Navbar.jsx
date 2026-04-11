import Toggle from "../Toggle/Toggle"
import "./Navbar.css"
import {Link} from "react-scroll"
import useThemeContext from "../../Hooks/useThemeContext";

const scrollTo = (id) => {
  if (id === 'intro') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (id === 'Scroollheader') {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  }
};

const Navbar = () => {
    const { darkMode } = useThemeContext();

  return (
   <div className={`n-wrapper ${darkMode ? 'dark' : ''}`}>
    <div className="n-left">
        <div className="n-name">Eric Askew</div>
        <div className="n-toggle">
          <Toggle/>
          <span className="n-toggle-label">Dark Mode</span>
        </div>
    </div>
    <div className="n-right">
        <div className="n-list">
            <ul>
                <li onClick={() => scrollTo('intro')}>Home</li>
                <li onClick={() => scrollTo('Services')}>Services</li>
                <li onClick={() => scrollTo('Experience')}>Experience</li>
                <li onClick={() => scrollTo('Hobbies')}>Hobbies</li>
                <li onClick={() => scrollTo('Portfolio')}>Portfolio</li>
                <li onClick={() => scrollTo('Testimonial')}>Testimonials</li>
            </ul>
        </div>
        <button className="button n-contact-btn" onClick={() => scrollTo('Scroollheader')}>Contact Me</button>
    </div>
   </div>
  )
}

export default Navbar
