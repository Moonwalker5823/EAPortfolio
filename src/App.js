import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Work from './components/Hobbies/Hobbies';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonals/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
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
