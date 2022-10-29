import "./Navbar.css"

const Navbar = () => {
  return (
   <div className="n-wrapper">
    <div className="n-left">
        <div className="n-name">Eric</div>
        <span>toggle</span>
    </div>
    <div className="n-right">
        <div className="n-list">
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Experience</li>
                <li>Portfolio</li>
                <li>Testimonials</li>
            </ul>
        </div>
        <button className="button">Contact Me</button>
    </div>
   </div>
  )
}

export default Navbar