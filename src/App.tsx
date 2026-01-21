import StarBackground from "./components/StarBackground";
import AboutMe from "./components/AboutMe/AboutMe";
import RocketShip from "./components/Visuals/Rocket/RocketShip";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TechSkills from "./components/TechSkills/TechSkills";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <div>
      <StarBackground />

      {/* Page content*/}
      <Navbar />
      <AboutMe />
      <TechSkills />
      <Experience />
      <RocketShip />
      <Footer />
      {/* Other sections here later */}
    </div>
  );
}

export default App;




