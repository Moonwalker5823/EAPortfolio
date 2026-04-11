import "./Toggle.css"
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import useThemeContext from "../../Hooks/useThemeContext";

const Toggle = () => {

    const { darkMode, handleClick } = useThemeContext();

  return (
    <div className="toggle" onClick={handleClick}>
    <Moon />
      <Sun/>
      <div
        className="t-button"
        style={darkMode?  { left: "2px", backgroundColor: "white"}: { right: "2px", backgroundColor: "blue"}}
      >
      </div>
    </div>
  )
}

export default Toggle