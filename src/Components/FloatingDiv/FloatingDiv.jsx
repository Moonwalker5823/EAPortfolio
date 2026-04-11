import "./FloatingDiv.css"
import useThemeContext from "../../Hooks/useThemeContext";
const FloatingDiv = ({image, txt1, txt2, imgStyle}) => {
  const { darkMode } = useThemeContext();
  return (
    <div className="floatingDiv" style={{
      background: darkMode ? 'var(--blue)' : 'whitesmoke',
      border: darkMode ? '1px solid white' : '2px solid var(--blue)',
    }}>
      <img
        src={image}
        alt={txt1}
        style={{
          ...imgStyle,
          ...(darkMode ? { filter: 'brightness(0) invert(1)' } : {})
        }}
      />
      <span style={{color: darkMode ? 'white' : ''}}>
        {txt1}
        <br/>
        {txt2}
      </span>
    </div>
  )
}

export default FloatingDiv
