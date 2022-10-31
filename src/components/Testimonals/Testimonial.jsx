import "./Testimonial.css"
import { Swiper, SwiperSlide } from "swiper/react"
import ProfilePic1 from "../../Img/Profile1.jpeg"
import ProfilePic2 from "../../Img/Profile2.jpeg"
import ProfilePic3 from "../../Img/Profile3.jpeg"
import ProfilePic4 from "../../Img/Profile4.jpeg"
import Brian from "../../Img/Brian.png"
import { Pagination } from "swiper"
import 'swiper/css/pagination'
import 'swiper/css'
import useThemeContext from "../../Hooks/useThemeContext";

const Testimonial = () => {
  const { darkMode } = useThemeContext();
  const clients = [
    {
      id: 1,
      img: ProfilePic1,
      title: "Innovator", 
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus viverra vitae. Nisl nunc mi ipsum faucibus vitae aliquet."
    },
    {
      id: 2,
      img: ProfilePic2, 
      title: "Former President",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas integer eget aliquet. Laoreet suspendisse interdum consectetur libero."
    },
    {
      id: 3,
      img: ProfilePic3,
      title: "Bussineess Man", 
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque elit eget gravida cum sociis natoque."
    },
    {
      id: 4,
      img: ProfilePic4, 
      title: "Money Mogul",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quam id leo in vitae turpis massa sed. Quam nulla porttitor massa id neque aliquam. Bibendum at varius vel pharetra vel. Suspendisse sed nisi lacus sed viverra tellus in hac."
    },
    {
      id: 5,
      img: Brian, 
      title: "Sr. Engineer Capital One",
      review: "Eric is the most perseverant engineer I know, having maintained and improved developer tools we built together for several years while also continuously honing his skills.  He has eclectic interests and a diversity of experiences which helped him bring creativity and personality to the user experience we created, and also made the work fun for the entire team.  Can't wait to see where he goes next!"
    },
  ];

  return (
   <div className="t-wrapper">
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