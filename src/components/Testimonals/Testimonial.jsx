import "./Testimonial.css"
import { Swiper, SwiperSlide } from "swiper/react"
import Konstantin from "../../assets/Img/KonstantineHamilton.jpeg"
import Brian from "../../assets/Img/Brian.png"
import { Pagination } from "swiper"
import 'swiper/css/pagination'
import 'swiper/css'
import useThemeContext from "../../Hooks/useThemeContext";

const Testimonial = () => {
  const { darkMode } = useThemeContext();
  const clients = [
    {
      id: 1,
      img: Konstantin,
      title: "Software Engineer",
      name: "Konstatin Hamilton", 
      review: "Eric's grasp of algorithmic concepts and design patterns make him a privilege to work with. He is a talented, driven, and empathetic engineer with deep expertise, particularly in node and react."
    },
    {
      id: 5,
      img: Brian, 
      name: "Brian Grosso",
      title: "Sr. Engineer Capital One",
      review: "Eric is the most perseverant engineer I know, having maintained and improved developer tools we built together for several years while also continuously honing his skills.  He has eclectic interests and a diversity of experiences which helped him bring creativity and personality to the user experience we created, and also made the work fun for the entire team.  Can't wait to see where he goes next!"
    },
  ];

  return (
   <div className="t-wrapper" id="Testimonial">
      <div className="t-heading">
        <span>Track record of excellence </span><br/>
        <span>with clients and fellow professionals</span>
        <div className="blur t-blur1" style={{background: "#409FF6"}}>
        </div>
        <div className="blur t-blur2" style={{background: "#EC5B6C"}}></div>
      </div>
      {/* Slides */}
      <Swiper className="testimonialWrapper" 
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}

      >
        {clients.map((client) =>
          <SwiperSlide key={client.id}>
            <div className="testimonial">
              <img src={client.img} alt={client.title} />
              <span>{client.name}</span>
              <span>{client.title}</span>
              <p style={{color: darkMode && "white"}}>{client.review}</p>
            </div>
          </SwiperSlide>
       )}
      </Swiper>
   </div>
  )
}

export default Testimonial