import React from "react";
import BannerOne from "./BannerOne";
import Navbar from "./Navbar";
import Services from "./Services";
import MissionVission from "./MissionVission";
import WhyChoose from "./WhyChoose";
import Advisor from "./Advisor";
import Faq from "./Faq";
import Contact from "./Contact";
import Footer from "./Footer";
import BannerThree from "./BannerTwo";

function Main() {
  return (
    <div className="main-page-wrapper">
      <Navbar />
      <BannerOne />
      <BannerThree/>
      <Services />
      <MissionVission />
      <WhyChoose />
      <Advisor />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
export default Main;
