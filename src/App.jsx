// src/App.jsx
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Page/Home"; // ✅ import Home page

function App() {
  return (
    <>
      <Navbar />
      <Home />   {/* ✅ render Home page */}
      <Footer />
    </>
  );
}

export default App;
