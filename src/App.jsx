// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Page/Home";
import VulvarCancerPage from "../src/Page/VulvarCancePage";
import VaginalCancerInformationPage from "../src/Page/VaginalCancerInformationPage";
import OvarianCancerInformationPage from "../src/Page/OvarianCancerInformationPage";
import EndometrialCancerInformationPage from "../src/Page/EndometrialCancerInformationPage";
import CervicalCancerOverviewPage from "../src/Page/CervicalCancerOverviewPage";
import RoboticSurgeryPage from "../src/Page/RoboticSurgeryPage";
import RoboticSurgeryExperiencePage from "./Page/RoboticSurgeryExperiencePage";
import CervicalScreeningPage from "./Page/CervicalScreeningPage";
import IrregularBleedingInfoPage from "./Page/IrregularBleedingInfoPage";
import EndometriosisInformation from "./Page/EndometriosisInformation";
import FibroidInformationPage from "./Page/FibroidInformationPage";
import MenstrualDisordersInformationPage from "./Page/MenstrualDisordersInformationPage";
import OvarianCystsPage from "./Page/OvarianCystsPage";
import PostcoitalBleeding from "./Page/PostcoitalBleeding";
import Pelvic from "./Page/Pelvic";
import Vulvar from "./Page/Vulvar";
import PostmenopausalBleedingPage from "./Page/PostmenopausalBleedingPage";
import PublicationsPage from "./Page/PublicationsPage";
import EventListPage from "./Page/EventListPage";
import EventPage from "./Page/EventPages/EventPage1";
import GuidePage from "./components/GuidePage/GuidePage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cancer/Vulvar" element={<VulvarCancerPage />} />
          <Route path="/Cancer/VaginalCancer" element={<VaginalCancerInformationPage />} />
          <Route path="/Cancer/OvarianCancer" element={<OvarianCancerInformationPage />} />
          <Route path="/Cancer/EndometrialCancer" element={<EndometrialCancerInformationPage />} />
          <Route path="/Cancer/CervicalCancer" element={<CervicalCancerOverviewPage />} />
          <Route path="/RoboticSurgery" element={<RoboticSurgeryPage />} />
          <Route path="/robotic-surgery-experience" element={<RoboticSurgeryExperiencePage />} />
          <Route path="/CervicalScreening" element={<CervicalScreeningPage />} />
          <Route path="/IrregularBleedingInfo" element={<IrregularBleedingInfoPage />} />
          <Route path="/EndometriosisInformation" element={<EndometriosisInformation />} />
          <Route path="/FibroidInformation" element={<FibroidInformationPage />} />
          <Route path="/MenstrualDisordersInformation" element={<MenstrualDisordersInformationPage />} />
          <Route path="/OvarianCystsPage" element={<OvarianCystsPage />} />
          <Route path="/PostcoitalBleeding" element={<PostcoitalBleeding />} />
          <Route path="/postmenopausal-bleeding" element={<PostmenopausalBleedingPage />} />
          <Route path="/pelvic-pain-information" element={<Pelvic />} />
          <Route path="/vulvar-vaginal-lumps" element={<Vulvar />} />
          <Route path="/PublicationsPage" element={<PublicationsPage />} />
          <Route path="/event-list" element={<EventListPage />} />
          <Route path="/event/:id" element={<EventPage />} />
          <Route path="/guide/:slug" element={<GuidePage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
