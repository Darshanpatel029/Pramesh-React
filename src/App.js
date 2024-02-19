import "./App.css";
import OurStory from "./Components/AboutUs/OurStory";
import Mission from "./Components/AboutUs/Mission";
import Certificates from "./Components/AboutUs/Certificates";
import Main from "./Components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MutualFund from "./Components/Services/MutualFund";
import EquityInvestment from "./Components/Services/EquityInvestment";
import Insurance from "./Components/Services/Insurance";
import LoanServices from "./Components/Services/LoanServices";
import RealEstate from "./Components/Services/RealEstate";
import Team from "./Components/Team/Team";
import Downloads from "./Components/Download/Downloads";
import ContactUs from "./Components/Contact/ContactUs";
import Privacy from "./Components/Privacy";
import TermAndCondition from "./Components/TermAndCondition";
import Disclosure from "./Components/Disclosure";
import MobileMenu from "./Components/MobileMenu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/OurStory" element={<OurStory />} />
        <Route path="/Vision" element={<Mission />} />
        <Route path="/Certificates" element={<Certificates />} />
        <Route path="/MutualFund" element={<MutualFund />} />
        <Route path="/Insurance" element={<Insurance />} />
        <Route path="/RealEstate" element={<RealEstate />} />
        <Route path="/EquityInvestment" element={<EquityInvestment />} />
        <Route path="/LoanServices" element={<LoanServices />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Downloads" element={<Downloads />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/TermAndCondition" element={<TermAndCondition />} />
        <Route path="/Disclosure" element={<Disclosure />} />
      </Routes>
      <MobileMenu />
    </Router>
  );
}

export default App;
