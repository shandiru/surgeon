// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Page/Home";
import VulvarCancePage from "./Page/VulvarCancePage"; // ✅ import your page

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Vulvar Cancer Page */}
        <Route path="/Cancer/Vulvar" element={<VulvarCancePage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
