import "./FloatingDiv.css"
import useThemeContext from "../../Hooks/useThemeContext";
const FloatingDiv = ({image, txt1, txt2}) => {
  const { darkMode } = useThemeContext();
  return (
    <div className="floatingDiv" style={{color: darkMode? "black" : ""}}>
            <img src={image} alt="basketball" />
            <span>
                {txt1}
                <br/>
                {txt2}
            </span>
    </div>
  )
}

export default FloatingDiv
