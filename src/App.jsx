// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Page/Home";
import VulvarCancerPage from "../src/Page/VulvarCancePage"; // <-- EXACT match
import VaginalCancerInformationPage from "../src/Page/VaginalCancerInformationPage"; // <-- EXACT match
import OvarianCancerInformationPage from "../src/Page/OvarianCancerInformationPage";
import EndometrialCancerInformationPage from "../src/Page/EndometrialCancerInformationPage";
import CervicalCancerOverviewPage from "../src/Page/CervicalCancerOverviewPage";
import RoboticSurgeryPage from "../src/Page/RoboticSurgeryPage";
import CervicalScreeningPage from "./Page/CervicalScreeningPage";
import IrregularBleedingInfoPage from "./Page/IrregularBleedingInfoPage";
import EndometriosisInformation from "./Page/EndometriosisInformation";
import FibroidInformationPage from "./Page/FibroidInformationPage";
import MenstrualDisordersInformationPage from "./Page/MenstrualDisordersInformationPage"
import OvarianCystsPage from "./Page/OvarianCystsPage"
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
         <Route path="/Cancer/CervicalCancer" element={<  CervicalCancerOverviewPage />} />
         <Route path="/RoboticSurgery" element={<   RoboticSurgeryPage />} />
          <Route path="/CervicalScreening" element={<   CervicalScreeningPage />} />
          <Route path="/IrregularBleedingInfo" element={<   IrregularBleedingInfoPage />} />
          <Route path="/EndometriosisInformation" element={<   EndometriosisInformation />} />
          <Route path="/FibroidInformation" element={< FibroidInformationPage />} />
           <Route path="/MenstrualDisordersInformation" element={< MenstrualDisordersInformationPage />} />
            <Route path="/OvarianCystsPage" element={<OvarianCystsPage />} />

       
      
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
