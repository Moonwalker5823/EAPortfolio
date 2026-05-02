import "./Portfolio.css"
import Beamql from "../../Assets/img/beamql.jpeg"
import Digiheart from "../../Assets/img/Digiheart.png"
import Hemmings from "../../Assets/img/hemmingsLogo.png"
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
          <div style={{width:'100%', aspectRatio:'1', borderRadius:'19px', border:'2px solid var(--blue)', boxShadow:'0px 8px 24px rgba(0,0,0,0.35)', overflow:'hidden', background:'#2f5f56', position:'relative'}}>
            <img src={Hemmings} alt="Hemmings" style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', objectFit:'cover', display:'block', border:'none', boxShadow:'none', borderRadius:'0', transform:'scale(1.35)', transformOrigin:'center'}} />
          </div>
          <span id='title'>Hemmings</span>
          <span id='subtitle'>Contact Page | Membership (One Page Checkout) | Checkout Flows | Bidding System</span>
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://digiheart.vercel.app/" target="_blank" rel="noreferrer" className="portfolioCard">
          <div style={{width:'100%', aspectRatio:'1', borderRadius:'19px', border:'2px solid var(--blue)', boxShadow:'0px 8px 24px rgba(0,0,0,0.35)', overflow:'hidden', background:'rgb(228 215 215)', position:'relative'}}>
            <img src={Digiheart} alt="Digiheart" style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', objectFit:'cover', display:'block', border:'none', boxShadow:'none', borderRadius:'0', mixBlendMode:'multiply'}} />
          </div>
          <span id='title'>Digiheart</span>
          <span id='subtitle'>Full-stack memorial app with protected profiles and media galleries</span>
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://erictruckstarfoodfinder.vercel.app/" target="_blank" rel="noreferrer" className="portfolioCard">
          <div style={{width:'100%', aspectRatio:'1', borderRadius:'19px', border:'2px solid var(--blue)', boxShadow:'0px 8px 24px rgba(0,0,0,0.35)', display:'flex', alignItems:'center', justifyContent:'center', background:'#111827'}}>
            <h1 style={{background:'linear-gradient(to bottom right, #fb923c, #fde047)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', fontFamily:'Gumela, cursive', fontSize:'2.5rem', fontWeight:'bold', margin:0}}>Truck Star</h1>
          </div>
          <span id='title'>TruckStar</span>
          <span id='subtitle'>Real-time food trucks near you, powered by Google Maps</span>
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://vibelist-psi.vercel.app/" target="_blank" rel="noreferrer" className="portfolioCard">
          <div style={{width:'100%', aspectRatio:'1', borderRadius:'19px', border:'2px solid var(--blue)', boxShadow:'0px 8px 24px rgba(0,0,0,0.35)', overflow:'hidden', background:'#252464', position:'relative'}}>
            <img src={VibeList} alt="VibeList" style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', objectFit:'cover', display:'block', border:'none', boxShadow:'none', borderRadius:'0'}} />
          </div>
          <span id='title'>VibeList</span>
            <span id='subtitle'>Claude AI · Last.fm · Mood Detection</span>
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://traderoots.vercel.app" target="_blank" rel="noreferrer" className="portfolioCard">
          <div style={{width:'100%', aspectRatio:'1', borderRadius:'19px', border:'2px solid #409FF6', boxShadow:'0px 8px 24px rgba(0,0,0,0.35)', display:'flex', alignItems:'center', justifyContent:'center', background:'#0f1117'}}>
          <svg width="220" height="60" viewBox="0 0 220 60" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#C9A227" />
              </linearGradient>
            </defs>
            <g transform="translate(10,10)">
              <circle cx="20" cy="20" r="6" fill="url(#logoGold)" />
              <path
                d="M20 26 L12 40 M20 26 L20 42 M20 26 L28 40"
                stroke="#FFD700"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M20 14 L26 8 L32 12 L40 4"
                fill="none"
                stroke="url(#logoGold)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <polygon points="40,4 36,4 39,1" fill="#FFD700" />
            </g>
            <text
              x="70"
              y="38"
              fontFamily="Inter, Arial, sans-serif"
              fontSize="24"
              fontWeight="600"
              fill="#FFFFFF"
            >
              Trade<tspan fill="#FFD700">Roots</tspan>
            </text>
          </svg>
          </div>
          <span id='title'>TradeRoots</span>
          <span id='subtitle'>An interactive commodity explorer for learning global markets through data, context, and history.</span>
        </a>
        </SwiperSlide>
      </Swiper>
      <div className="blur p-blur2" style={{background: "#EC5B6C"}}></div>
    </div>
  )
}

export default Portfolio
