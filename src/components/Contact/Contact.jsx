import "./Contact.css"
import { useRef } from "react"
import emailjs from "emailjs/browser"

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="hobby">
                <span>Get in touch</span>
                <span>Contact me</span>
                
            </div>
        </div>

        <div className="c-right">
            <form action="">
                <input type="text" name="userName" className="user" placeholder="Name"/>
                <input type="email" name="email" className="user" placeholder="Email"/>
                <textarea name="message" placeholder="Message" cols="30" rows="10" className="user"></textarea>
                <input type="submit" value="Send" className="button"/>
                <div className="blur c-blur1" style={{background: "#409FF6"}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact
