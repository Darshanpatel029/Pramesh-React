import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import shape from "../images/shape/shape_26.png";
import Img1 from "../images/media/img_32.jpg";
import { Link } from "react-router-dom";

const Disclosure = () => {
  return (
    <div className="main-page-wrapper">
      <Navbar />
      <div
        className="inner-banner-one pt-225 lg-pt-200 md-pt-150 pb-70 md-pb-70 position-relative"
        style={{ backgroundImage: `url(${Img1})` }}
      >
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-heading d-inline-block position-relative me-xxl-4 me-lg-5">
                Disclosure
                <img src={shape} alt="img" />
              </h1>
            </div>
            <div className="col-xl-4 col-lg-5 ms-auto">
              <p className="text-white text-lg mb-70 lg-mb-40">
                Offering solutions & services to address a spectrum of financial
                issues
              </p>
              <ul className="style-none d-inline-flex pager">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>/</li>
                <li>Disclosure</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <div>
              <h2 style={{ fontSize: "42px", fontWeight: "200" }}>
                Disclosure
              </h2>
            </div>
            <p>
              The objective of this publication is to promote the Science & Art
              of TECHNICAL ANALYSIS to forecast price movements. This
              information should not be construed as an offer to buy or sell
              securities of any kind. It is assumed that readers would act with
              due knowledge of all risks involved as per the dynamics & market
              fluctuations. The author does not assume any responsibility or
              liability, whatsoever, resulting from the use of such information,
              judgments and opinions for Trading or Investment purposes. Author
              does not have any positions in the above mentioned items.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Disclosure;
