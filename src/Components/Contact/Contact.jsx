import "./Contact.css"
import { useState } from "react"
import useThemeContext from "../../Hooks/useThemeContext";
import Onyx from "../../Assets/img/Onyx.jpg"
import Cody from "../../Assets/img/Cody.jpg"

const Contact = () => {
    const [done, setdone] = useState(false);
    const [error, setError] = useState(false);
    const { darkMode } = useThemeContext();

    const handleSubmit = (e) => {
        const name = e.target.elements.name.value.trim();
        const email = e.target.elements.email.value.trim();
        const message = e.target.elements.message.value.trim();
        if (!name || !email || !message) {
            e.preventDefault();
            setError(true);
            return;
        }
        setError(false);
        setdone(true);
    };

  return (
    <div className={`contact-form ${darkMode ? 'dark' : ''}`} id="Contact">
        <div className="w-left" id="Scroollheader">
            <span className="c-heading" style={{color: darkMode ? "white" : "var(--black)"}}>Get in contact with me</span>
        </div>
        <div className="c-dogs">
            <div className="c-right">
                <form action="https://formsubmit.co/easkew81@yahoo.com" method="POST" onSubmit={handleSubmit} noValidate>
                    <input type="text" name="name" className="user" placeholder="Name" />
                    <input type="email" name="email" className="user" placeholder="Email" />
                    <textarea name="message" placeholder="Message" cols="30" rows="6" className="user"></textarea>
                    <input type="submit" value="Send" className="button" style={{border: darkMode ? "2px solid white" : "none"}} />
                    {error && <span className="c-error">Don't be shy—fill me in! 🐶✍️</span>}
                    {done && <span className="c-thankyou">Thank you for reaching out! I'll respond shortly.</span>}
                    <input type="hidden" name="_autoresponse" value="Thank You for contacting Eric Askew. I will respond shortly." />
                </form>
                <div className="blur c-blur2" style={{background: "#EC5B6C"}}></div>
            </div>
            <div className="c-dog-images">
                <div className="c-dog-circle" style={{background: darkMode ? "lightgray" : "white"}}>
                    <img src={Cody} alt="Cody" />
                </div>
                <div className="c-dog-circle" style={{background: darkMode ? "lightgray" : "white"}}>
                    <img src={Onyx} alt="Onyx" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
