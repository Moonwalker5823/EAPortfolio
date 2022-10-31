import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Work from './components/Hobbies/Hobbies';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonals/Testimonial';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Intro/>
       <Services/>
       <Experience/>
       <Work/>
       <Portfolio/>
       <Testimonial/>
       <Contact/>
    </div>
  );
}

export default App;
