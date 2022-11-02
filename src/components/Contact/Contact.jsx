import "./Contact.css"
import { useState } from "react"
import useThemeContext from "../../Hooks/useThemeContext";

const Contact = () => {
    const [done, setdone] = useState(false);
    const { darkMode } = useThemeContext();


  return (
    <div className="contact-form" id="Contact">
        <div className="w-left">
            <div className="hobby">
                <span style={{color: darkMode && "whitesmoke"}}>Get in</span>
                <span>contact with me</span>
                
            </div>
        </div>
        <div className="c-right">
            <form action="https://formsubmit.co/easkew81@yahoo.com" method="POST">
                <input type="text" name="name" className="user" placeholder="Name" required style={{background: darkMode && "lightgray"}}/>
                <input type="email" name="email" className="user" placeholder="Email" required style={{background: darkMode && "lightgray"}}/>
                <textarea type="textarea" name="message" placeholder="Message" cols="30" rows="10" className="user" style={{background: darkMode && "lightgray"}}></textarea>
                <input type="submit" onClick={()=> setdone(!done)}value="Send" className="button" style={{border: darkMode && "2px solid whitesmoke"}}/>
                <span>{done && "Thank You for contacting Me!"}</span>
                <div className="blur c-blur1" style={{background: "#409FF6"}}></div>
                <div className="blur c-blur2" style={{background: "#EC5B6C"}}></div>
                <input type="hidden" name="_autoresponse" value="Thank You! for contacting Eric Askew.  I will respond shortly."></input>
            </form>
        </div>
    </div>
  )
}

export default Contact
