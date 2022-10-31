import "./Portfolio.css"
import { Swiper, SwiperSlide } from "swiper/react"
import Beamql from "../../Img/beamql.jpeg"
import Digiheart from "../../Img/Digiheart.png"
import Mpf from "../../Img/MPFormReact.png"
import 'swiper/css';
import useThemeContext from "../../Hooks/useThemeContext";

const Portfolio = () => {
  const { darkMode } = useThemeContext();
  return (
    <div className="portfolio">
      {/*heading*/}
      <span style={{color: darkMode && "white"}}>Recent Projects</span>
      <span>Portfolio</span>

      {/*Slides*/}
      <Swiper 
        spaceBetween={20}
        slidesPerView={2}
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
    </div>
  )
}

export default Portfolio