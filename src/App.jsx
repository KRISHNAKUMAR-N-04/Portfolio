import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import bgImage from "./assets/Background-drop.png";

function App() {
  return (
    <div className="font-sans pl-18  pr-18"
    >
      <Navbar />
      <Hero />
      {/* Next: About, Education, Skills, Experience, Projects, Contact, Footer */}
    </div>
  );
}

export default App;
