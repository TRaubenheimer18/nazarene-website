// src/App.jsx
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
import AtlantisProfile from "./pages/ChurchProfiles/AtlantisProfile";
import BelharProfile from "./pages/ChurchProfiles/BelharProfile";
import BethanyProfile from "./pages/ChurchProfiles/BethanyProfile";
import BishopLavisProfile from "./pages/ChurchProfiles/BishopLavisProfile";
import BluedownsProfile from "./pages/ChurchProfiles/BluedownsProfile";
import BonteheuwelProfile from "./pages/ChurchProfiles/BonteheuwelProfile";
import CapricornProfile from "./pages/ChurchProfiles/CapricornProfile";
import ChatsworthProfile from "./pages/ChurchProfiles/ChatsworthProfile";
import CovenantProfile from "./pages/ChurchProfiles/CovenantProfile";
import DelftProfile from "./pages/ChurchProfiles/DelftProfile";
import EastridgeProfile from "./pages/ChurchProfiles/EastridgeProfile";
import EbenezerProfile from "./pages/ChurchProfiles/EbenezerProfile";
import ElShaddaiProfile from "./pages/ChurchProfiles/ElShaddaiProfile";
import FactretonProfile from "./pages/ChurchProfiles/FactretonProfile";
import GraceProfile from "./pages/ChurchProfiles/GraceProfile";
import GreenPasturesProfile from "./pages/ChurchProfiles/GreenPasturesProfile";
import GroenheuwelProfile from "./pages/ChurchProfiles/GroenheuwelProfile";
import HolinessEvangelismProfile from "./pages/ChurchProfiles/HolinessEvangelismProfile";
import HopeCityProfile from "./pages/ChurchProfiles/HopeCityProfile";
import ImmanuelProfile from "./pages/ChurchProfiles/ImmanuelProfile";
import KhayelitshaProfile from "./pages/ChurchProfiles/KhayelitshaProfile";
import LeidenProfile from "./pages/ChurchProfiles/LeidenProfile";
import ManenbergProfile from "./pages/ChurchProfiles/ManenbergProfile";
import MatroosfonteinProfile from "./pages/ChurchProfiles/MatroosfonteinProfile";
import MitchellsPlainProfile from "./pages/ChurchProfiles/MitchellsPlainProfile";
import MontaguProfile from "./pages/ChurchProfiles/MontaguProfile";
import NewOrleansProfile from "./pages/ChurchProfiles/NewOrleansProfile";
import NorthpineProfile from "./pages/ChurchProfiles/NorthpineProfile";
import OvercomeProfile from "./pages/ChurchProfiles/OvercomeProfile";
import PaarlProfile from "./pages/ChurchProfiles/PaarlProfile";
import ParkwoodProfile from "./pages/ChurchProfiles/ParkwoodProfile";
import RestorationProfile from "./pages/ChurchProfiles/RestorationProfile";
import RuachProfile from "./pages/ChurchProfiles/RuachProfile";
import SirLowrysPassProfile from "./pages/ChurchProfiles/SirLowrysPassProfile";
import SteenbergProfile from "./pages/ChurchProfiles/SteenbergProfile";
import StrandfonteinProfile from "./pages/ChurchProfiles/StrandfonteinProfile";
import SunnysideProfile from "./pages/ChurchProfiles/SunnysideProfile";
import VictoryProfile from "./pages/ChurchProfiles/VictoryProfile";
import WesbankProfile from "./pages/ChurchProfiles/WesbankProfile";
import WellingtonProfile from "./pages/ChurchProfiles/WellingtonProfile";

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
          <Route path="/churches/atlantis-nazarene" element={<AtlantisProfile />} />
          <Route path="/churches/belhar-nazarene" element={<BelharProfile />} />
          <Route path="/churches/bethany-nazarene" element={<BethanyProfile />} />
          <Route path="/churches/bishop-lavis-nazarene" element={<BishopLavisProfile />} />
          <Route path="/churches/bluedowns-nazarene" element={<BluedownsProfile />} />
          <Route path="/churches/bonteheuwel-nazarene" element={<BonteheuwelProfile />} />
          <Route path="/churches/capricorn-nazarene" element={<CapricornProfile />} />
          <Route path="/churches/chatsworth-nazarene" element={<ChatsworthProfile />} />
          <Route path="/churches/covenant-nazarene" element={<CovenantProfile />} />
          <Route path="/churches/delft-nazarene" element={<DelftProfile />} />
          <Route path="/churches/eastridge-nazarene" element={<EastridgeProfile />} />
          <Route path="/churches/ebenezer-nazarene" element={<EbenezerProfile />} />
          <Route path="/churches/elshaddai-nazarene" element={<ElShaddaiProfile />} />
          <Route path="/churches/factreton-nazarene" element={<FactretonProfile />} />
          <Route path="/churches/grace-nazarene" element={<GraceProfile />} />
          <Route path="/churches/greenpastures-nazarene" element={<GreenPasturesProfile />} />
          <Route path="/churches/groenheuwel-nazarene" element={<GroenheuwelProfile />} />
          <Route path="/churches/holinessevangelism-nazarene" element={<HolinessEvangelismProfile />} />
          <Route path="/churches/hopecity-nazarene" element={<HopeCityProfile />} />
          <Route path="/churches/immanuel-nazarene" element={<ImmanuelProfile />} />
          <Route path="/churches/khayelitsha-nazarene" element={<KhayelitshaProfile />} />
          <Route path="/churches/leiden-nazarene" element={<LeidenProfile />} />
          <Route path="/churches/manenberg-nazarene" element={<ManenbergProfile />} />
          <Route path="/churches/matroosfontein-nazarene" element={<MatroosfonteinProfile />} />
          <Route path="/churches/mitchellsplain-nazarene" element={<MitchellsPlainProfile />} />
          <Route path="/churches/montagu-nazarene" element={<MontaguProfile />} />
          <Route path="/churches/neworleans-nazarene" element={<NewOrleansProfile />} />
          <Route path="/churches/northpine-nazarene" element={<NorthpineProfile />} />
          <Route path="/churches/overcome-nazarene" element={<OvercomeProfile />} />
          <Route path="/churches/paarl-nazarene" element={<PaarlProfile />} />
          <Route path="/churches/parkwood-nazarene" element={<ParkwoodProfile />} />
          <Route path="/churches/restoration-nazarene" element={<RestorationProfile />} />
          <Route path="/churches/ruach-nazarene" element={<RuachProfile />} />
          <Route path="/churches/sirlowryspass-nazarene" element={<SirLowrysPassProfile />} />
          <Route path="/churches/steenberg-nazarene" element={<SteenbergProfile />} />
          <Route path="/churches/strandfontein-nazarene" element={<StrandfonteinProfile />} />
          <Route path="/churches/sunnyside-nazarene" element={<SunnysideProfile />} />
          <Route path="/churches/victory-nazarene" element={<VictoryProfile />} />
          <Route path="/churches/wesbank-nazarene" element={<WesbankProfile />} />
          <Route path="/churches/wellington-nazarene" element={<WellingtonProfile />} />
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
