import "./FloatingDiv.css"
const FloatingDiv = ({image, txt1, txt2}) => {
  return (
    <div className="floatingDiv">
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
