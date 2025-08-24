// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Page/Home";
import VulvarCancerPage from "../src/Page/VulvarCancePage"; // <-- EXACT match
import VaginalCancerInformationPage from "../src/Page/VaginalCancerInformationPage"; // <-- EXACT match
import OvarianCancerInformationPage from "../src/Page/OvarianCancerInformationPage";
import EndometrialCancerInformationPage from "../src/Page/EndometrialCancerInformationPage";

import RoboticSurgeryPage from "../src/Page/RoboticSurgeryPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cancer/Vulvar" element={<VulvarCancerPage />} />
       <Route path="/Cancer/VaginalCancer" element={<  VaginalCancerInformationPage />} />
        <Route path="/Cancer/OvarianCancer" element={<  OvarianCancerInformationPage />} />
        <Route path="/Cancer/EndometrialCancer" element={<   EndometrialCancerInformationPage />} />
         <Route path="/RoboticSurgery" element={<   RoboticSurgeryPage />} />


       
      
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
