import "./Portfolio.css"
import Beamql from "../../Assets/img/beamql.jpeg"
import Digiheart from "../../Assets/img/Digiheart.png"
import Hemmings from "../../Assets/img/hemmingsLogo.png"
import TruckStar from "../../Assets/img/TruckStar.png"
import VibeList from "../../Assets/img/vibelist.jpg"
import useThemeContext from "../../Hooks/useThemeContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Portfolio = () => {
  const { darkMode } = useThemeContext();
  return (
    <div className="portfolio" id="Portfolio">
      <span id='scrollHeader' style={{color: darkMode && "white"}}>Portfolio</span>
      <div className="blur p-blur1" style={{background: "#409FF6"}}></div>
      <Swiper
        className="portfolio-cards"
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={5}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
      >
        <SwiperSlide>
        <a href="https://hemmings.com" target="_blank" rel="noreferrer" className="portfolioCard">
          <img src={Hemmings} alt="Hemmings" style={{aspectRatio: '1', objectFit: 'cover'}} />
          <span id='title'>Hemmings</span>
          <span id='subtitle'>Contact Page | Membership (One Page Checkout) | Checkout Flows | Bidding System</span>
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://digiheart.vercel.app/" target="_blank" rel="noreferrer" className="portfolioCard">
          <img src={Digiheart} alt="Digiheart" />
          <span id='title'>Digiheart</span>
          <span id='subtitle'>Full-stack memorial app with protected profiles and media galleries</span>
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://erictruckstarfoodfinder.vercel.app/" target="_blank" rel="noreferrer" className="portfolioCard">
          <img src={TruckStar} alt="TruckStar" style={{aspectRatio: '1', objectFit: 'cover'}} />
          <span id='title'>TruckStar</span>
          <span id='subtitle'>Real-time food trucks near you, powered by Google Maps</span>
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://vibelist-psi.vercel.app/" target="_blank" rel="noreferrer" className="portfolioCard">
          <img src={VibeList} alt="VibeList" style={{aspectRatio: '1', objectFit: 'cover'}} />
          <span id='title'>VibeList</span>
            <span id='subtitle'>Claude AI · Last.fm · Mood Detection</span>
        </a>
        </SwiperSlide>
      </Swiper>
      <div className="blur p-blur2" style={{background: "#EC5B6C"}}></div>
    </div>
  )
}

export default Portfolio
