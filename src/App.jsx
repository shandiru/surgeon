// src/App.jsx
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Page/Home";
import VulvarCancerPage from "./Page/VulvarCancerPage";
import VaginalCancerInformationPage from "./Page/VaginalCancerInformationPage";
import OvarianCancerInformationPage from "./Page/OvarianCancerInformationPage";
import EndometrialCancerInformationPage from "./Page/EndometrialCancerInformationPage";
import CervicalCancerOverviewPage from "./Page/CervicalCancerOverviewPage";
import RoboticSurgeryPage from "./Page/RoboticSurgeryPage";
import RoboticSurgeryExperiencePage from "./Page/RoboticSurgeryExperiencePage";
import CervicalScreeningPage from "./Page/CervicalScreeningPage";
import IrregularBleedingInfoPage from "./Page/IrregularBleedingInfoPage";
import EndometriosisInformationPage from "./Page/EndometriosisInformationPage";
import FibroidInformationPage from "./Page/FibroidInformationPage";
import MenstrualDisordersInformationPage from "./Page/MenstrualDisordersInformationPage";
import OvarianCystsPage from "./Page/OvarianCystsPage";
import PostcoitalBleedingPage from "./Page/PostcoitalBleedingPage";
import PelvicPage from "./Page/PelvicPage";
import VulvarVaginalLumpsPage from "./Page/VulvarVaginalLumpsPage";
import PostmenopausalBleedingPage from "./Page/PostmenopausalBleedingPage";
import PublicationsPage from "./Page/PublicationsPage";
import EventListPage from "./Page/EventListPage";
import EventPage from "./Page/EventPages/EventPage1";
import GuidePage from "./components/GuidePage/GuidePage";
import TreatmentGuidesPage from "./Page/TreatmentGuidesPage";
import PatientCentrePage from "./Page/PatientCentrePage";
import PrivacyPolicyPage from "./Page/PrivacyPolicyPage";
import TermsAndConditionsPage from "./Page/TermsAndConditionsPage";
import ScrollToTop from "./components/ScrollToTop";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-primary-pink mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page not found</p>
      <a
        href="/"
        className="bg-primary-pink text-white px-6 py-3 rounded-lg hover:bg-[#E03E7C] transition-all"
      >
        Return Home
      </a>
    </div>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 80 });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cancer/vulvar" element={<VulvarCancerPage />} />
          <Route
            path="/cancer/vaginal"
            element={<VaginalCancerInformationPage />}
          />
          <Route
            path="/cancer/ovarian"
            element={<OvarianCancerInformationPage />}
          />
          <Route
            path="/cancer/endometrial"
            element={<EndometrialCancerInformationPage />}
          />
          <Route
            path="/cancer/cervical"
            element={<CervicalCancerOverviewPage />}
          />
          <Route path="/robotic-surgery" element={<RoboticSurgeryPage />} />
          <Route
            path="/robotic-surgery-experience"
            element={<RoboticSurgeryExperiencePage />}
          />
          <Route
            path="/cervical-screening"
            element={<CervicalScreeningPage />}
          />
          <Route
            path="/irregular-bleeding"
            element={<IrregularBleedingInfoPage />}
          />
          <Route
            path="/endometriosis"
            element={<EndometriosisInformationPage />}
          />
          <Route
            path="/fibroids"
            element={<FibroidInformationPage />}
          />
          <Route
            path="/menstrual-disorders"
            element={<MenstrualDisordersInformationPage />}
          />
          <Route path="/ovarian-cysts" element={<OvarianCystsPage />} />
          <Route path="/postcoital-bleeding" element={<PostcoitalBleedingPage />} />
          <Route
            path="/postmenopausal-bleeding"
            element={<PostmenopausalBleedingPage />}
          />
          <Route path="/pelvic-pain" element={<PelvicPage />} />
          <Route path="/vulvar-vaginal-lumps" element={<VulvarVaginalLumpsPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/events" element={<EventListPage />} />
          <Route path="/events/:id" element={<EventPage />} />
          <Route path="/guide/:slug" element={<GuidePage />} />
          <Route path="/treatment-guides" element={<TreatmentGuidesPage />} />
          <Route path="/patient-centre" element={<PatientCentrePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
