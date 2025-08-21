// App.jsx
// src/App.jsx

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection"
import About from "./components/AboutSection"

import Experience from "./components/Experience";
import Expertise from "./components/Expertise";
import EducationLanguagesSection from "./components/EducationLanguagesSection";
import GetInTouchSection from "./components/GetInTouchSection";
import Footer from "./components/Footer";



function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
      <About />
      <Experience />
      <Expertise />
      <EducationLanguagesSection />
      <GetInTouchSection />
      <Footer />
      
    </>
  );
}

export default App;
