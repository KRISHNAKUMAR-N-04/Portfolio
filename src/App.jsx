import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans pl-18  pr-18"
    >
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills/> 
      <Experience/>
      <Projects/>
      <Contact />
      
      {/* Next: About, Education, Skills, Experience, Projects, Contact, Footer */}
    </div>
  );
}

export default App;
