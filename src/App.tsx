import { BrowserRouter, Routes, Route } from "react-router-dom";
import StarBackground from "./components/StarBackground";
import AboutMe from "./components/AboutMe/AboutMe";
import RocketShip from "./components/Visuals/Rocket/RocketShip";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TechSkills from "./components/TechSkills/TechSkills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <StarBackground />

      {/* Navbar on all pages */}
      <Navbar />

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <AboutMe />
              <TechSkills />
              <Experience />
              <Projects />
              <RocketShip />
            </>
          }
        />

        {/* Contact page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer on all pages */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;





