import "./Portfolio.css"
import { Swiper, SwiperSlide } from "swiper/react"
import Beamql from "../../assets/Img/beamql.jpeg"
import Digiheart from "../../assets/Img/Digiheart.png"
import Mpf from "../../assets/Img/MPFormReact.png"
import 'swiper/css';
import useThemeContext from "../../Hooks/useThemeContext";

const Portfolio = () => {
  const { darkMode } = useThemeContext();
  return (
    <div className="portfolio" id="Portfolio">
      {/*heading*/}
      <span style={{color: darkMode && "white"}}>Recent Projects</span>
      <span>Portfolio</span>
      <div className="blur p-blur1" style={{background: "#409FF6"}}></div>
      {/*Slides*/}
      <Swiper 
        spaceBetween={50}
        slidesPerView={1}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide className="swiperSlide">
          <img src={Beamql} alt="beamql" />
          <span>BeamQl</span>
          <span>Streamline migration to GraphQL</span>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={Mpf} alt="Mpf" />
          <span>MultiPartForm React</span>
          <span>Multi-Part React Form </span>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={Digiheart} alt="Digiheart" />
          <span>Digiheart (Coming Dec 2022)</span>
          <span>Digital Keepsake for Precious Memories</span>
        </SwiperSlide>
      </Swiper>
      <div className="blur p-blur2" style={{background: "#EC5B6C"}}></div>
    </div>
  )
}

export default Portfolio