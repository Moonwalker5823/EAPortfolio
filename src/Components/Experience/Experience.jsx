import "./Experience.css"
import useThemeContext from "../../Hooks/useThemeContext";

const Experience = () => {
  const { darkMode } = useThemeContext();
  return (
    <div className="experience" id="Experience">
      <div className="achievement">
        <div className="circle" style={{
          backgroundColor: darkMode ? 'var(--blue)' : 'white',
          color: darkMode ? 'white' : 'var(--black)',
          border: darkMode ? '7px solid #FF0327' : '2px solid var(--blue)',
        }}>Full Stack</div>
        <span>Frontend</span>
        <span>Backend</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{
          backgroundColor: darkMode ? 'var(--blue)' : 'white',
          color: darkMode ? 'white' : 'var(--black)',
          border: darkMode ? '7px solid #FF0327' : '2px solid var(--blue)',
        }}>4+</div>
        <span>Years</span>
        <span>Production Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{
          backgroundColor: darkMode ? 'var(--blue)' : 'white',
          color: darkMode ? 'white' : 'var(--black)',
          border: darkMode ? '7px solid #FF0327' : '2px solid var(--blue)',
        }}>20+</div>
        <span>Projects</span>
        <span>Delivered</span>
      </div>
      
    </div>
  )
}

export default Experience
