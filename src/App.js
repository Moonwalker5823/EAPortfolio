import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';
import Work from './Components/Hobbies/Hobbies';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonial from './Components/Testimonals/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import useThemeContext from './Hooks/useThemeContext';

function App() {
  const { darkMode } = useThemeContext();


  return (
    <div className="App" 
      style={{
      background : darkMode && "#121212",
      color : darkMode && "white"
      }}
      >
       <Navbar/>
       <Intro/>
       <Services/>
       <Experience/>
       <Work/>
       <Portfolio/>
       <Testimonial/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
