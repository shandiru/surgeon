// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Page/Home";
import VulvarCancerPage from "../src/Page/VulvarCancePage"; // <-- EXACT match
import VulvarGuidePage from "../src/Page/VulvarGuide"; // <-- EXACT match
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
import Colposcopy from "./Page/Colposcopy";
import PostcoitalBleeding from "./Page/PostcoitalBleeding"
import Ultrasound from "./Page/Ultrasound";
import Hysteroscopy from "./Page/Hysteroscopy";
import Pelvic from "./Page/Pelvic";
import Vulvar from "./Page/Vulvar";
import PostmenopausalBleedingPage from "./Page/PostmenopausalBleedingPage";
import VaginalGuidePage from "./Page/VaginalGuidePage";
import OvarianCancerGuide from "./Page/OvarianCancerGuide"
import EndometrialGuidePage from "./Page/EndometrialGuidePage";
import CervicalCancerGuide from "./Page/CervicalCancerGuide"
import CervicalScreeningGuide from "./Page/CervicalScreeningGuide"
import IrregularBleedingGuide from "./Page/IrregularBleedingGuide";
import OvarianCystsGuide from "./Page/OvarianCystsGuide";
import RoboticGuide from "./Page/RoboticGuidePage";
import EndometriosisGuide from "./Page/EndometriosisGuidePage";
import PostmenopausalBleedingGuide from "./Page/PostmenopausalBleedingGuide"
import PublicationsPage from "./Page/PublicationsPage"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cancer/Vulvar" element={<VulvarCancerPage />} />
        <Route path="/Cancer/VaginalCancer" element={<  VaginalCancerInformationPage />} />
        <Route path="/VaginalGuidePage" element={<VaginalGuidePage />} />
        <Route path="/VulvarGuidePage" element={<VulvarGuidePage />} />
        <Route path="/Cancer/OvarianCancer" element={<  OvarianCancerInformationPage />} />
        <Route path="/OvarianCancerGuide" element={<OvarianCancerGuide />} />
        <Route path="/Cancer/EndometrialCancer" element={<   EndometrialCancerInformationPage />} />
        <Route path="/EndometrialCancerGuide" element={<EndometrialGuidePage />} />
        <Route path="/Cancer/CervicalCancer" element={<  CervicalCancerOverviewPage />} />
        <Route path="/CervicalCancerGuide" element={<CervicalCancerGuide />} />
        <Route path="/RoboticSurgery" element={<   RoboticSurgeryPage />} />
        <Route path="/RoboticSurgeryGuide" element={<   RoboticGuide />} />
        <Route path="/CervicalScreening" element={<   CervicalScreeningPage />} />
        <Route path="/CervicalScreeningGuide" element={<CervicalScreeningGuide />} />
        <Route path="/IrregularBleedingInfo" element={<   IrregularBleedingInfoPage />} />
        <Route path="/IrregularBleedingGuide" element={< IrregularBleedingGuide />} />
        <Route path="/EndometriosisInformation" element={<   EndometriosisInformation />} />
        <Route path="/EndometriosisGuide" element={<   EndometriosisGuide />} />
        <Route path="/FibroidInformation" element={< FibroidInformationPage />} />
        <Route path="/MenstrualDisordersInformation" element={< MenstrualDisordersInformationPage />} />
        <Route path="/OvarianCystsPage" element={<OvarianCystsPage />} />
        <Route path="/OvarianCystsGuide" element={<OvarianCystsGuide />} />
        <Route path="/PostcoitalBleeding" element={< PostcoitalBleeding />} />
        <Route path="/postmenopausal-bleeding" element={< PostmenopausalBleedingPage />} />
         <Route path="/PostmenopausalBleedingGuide" element={<PostmenopausalBleedingGuide />} />
        <Route path="/colposcopy" element={< Colposcopy />} />
        <Route path="/ultrasound" element={< Ultrasound />} />
        <Route path="/hysteroscopy" element={< Hysteroscopy />} />
        <Route path="/pelvic-pain-information" element={< Pelvic />} />
        <Route path="/vulvar-vaginal-lumps" element={< Vulvar />} />

        <Route path="/PublicationsPage" element={<PublicationsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;