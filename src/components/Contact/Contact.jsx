import "./Contact.css"
import { useState } from "react"

const Contact = () => {
    const [done, setdone] = useState(false);


  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="hobby">
                <span>Get in touch</span>
                <span>Contact me</span>
                
            </div>
        </div>

        <div className="c-right">
            <form action="https://formsubmit.co/easkew81@yahoo.com" method="POST">
                <input type="text" name="name" className="user" placeholder="Name" required/>
                <input type="email" name="email" className="user" placeholder="Email" required/>
                <textarea type="textarea" name="message" placeholder="Message" cols="30" rows="10" className="user"></textarea>
                <input type="submit" onClick={()=> setdone(!done)}value="Send" className="button"/>
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
