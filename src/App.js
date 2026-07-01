import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Churches from "./pages/Churches";
import Ministries from "./pages/Ministries";
import Events from "./pages/Events";
import Resources from "./pages/Resources";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import College from "./pages/College";
import Calendar from "./pages/Calendar";
import ChurchProfile from "./pages/ChurchProfiles/ChurchProfile";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/churches" element={<Churches />} />
          <Route path="/churches/:id" element={<ChurchProfile />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/events" element={<Events />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/college" element={<College />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
