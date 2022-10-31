import "./Experience.css"
import useThemeContext from "../../Hooks/useThemeContext";

const Experience = () => {
  const { darkMode } = useThemeContext();
  return (
    <div className="experience" id="Experience">
      <div className="achievement">
        <div style={{border: darkMode && "7px solid #FF0327"}} className="circle">3+</div>
        <span>Years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div style={{border: darkMode && "7px solid #FF0327"}} className="circle">10+</div>
        <span>Projects</span>
        <span>Completed</span>
      </div>
      <div className="achievement">
        <div style={{border: darkMode && "7px solid #FF0327"}}className="circle">5+</div>
        <span>Open-Source</span>
        <span>Companies</span>
      </div>
    </div>
  )
}

export default Experience
