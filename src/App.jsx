// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Page/Home";
import VulvarCancerPage from "../src/Page/VulvarCancePage"; // <-- EXACT match

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/sgan" element={<Home />} />
        <Route path="/" element={<VulvarCancerPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
