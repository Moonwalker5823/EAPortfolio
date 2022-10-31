import "./Footer.css"
import Wave from "../../Img/musicWave.jpeg"
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"
import Github from "@iconscout/react-unicons/icons/uil-github"

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" className="footerWave"/>
        <div className="f-content">
            <span>Easkew81@yahoo.com</span>
            <div className="f-icons">
            <Github color="black" size={'3rem'}/>
            <Facebook color="black" size={"3rem"}/>
            </div>
        </div>
       
    </div>
  )
}

export default Footer