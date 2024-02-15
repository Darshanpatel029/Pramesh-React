import React from "react";
import BannerOne from "./BannerOne";
import Navbar from "./Navbar";
import BannerTwo from "./BannerTwo";
import Services from "./Services";
import MissionVission from "./MissionVission";
import Awards from "./Awards";
import WhyChoose from "./WhyChoose";
import Advisor from "./Advisor";
import Faq from "./Faq";
import Contact from "./Contact";
import Footer from "./Footer";

function Main() {
  return (
    <div className="main-page-wrapper">
      <Navbar />
      <BannerOne />
      <BannerTwo />
      <Services />
      <MissionVission />
      <Awards />
      <WhyChoose />
      <Advisor />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
export default Main;
