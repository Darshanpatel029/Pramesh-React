import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import shape from "../../images/shape/shape_28.png";
import Img1 from "../../images/media/img_17.jpg";
import { Link } from "react-router-dom";

const Downloads = () => {
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
                Downloads
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
                <li>Downloads</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container ">
        <div className="text-feature-one mt-50 mb-50 lg-mt-50">
          <div className="container">
            <div>
              <p>
                1. CAMSKRA Non Individual Form-May 2021_0
                <a
                  href="files/CAMSKRA Non Individual Form-May 2021_0.pdf"
                  className="btn-six mt-10 ms-2"
                  download="CAMSKRA Non Individual Form-May 2021_0"
                >
                  Download Now!!
                </a>
              </p>
              <p>
                2. CKYC-KRA-KYC-FormforIndividuals
                <a
                  href="files/CKYC-KRA-KYC-FormforIndividuals.pdf"
                  className="btn-six mt-10 ms-2"
                  download="CKYC-KRA-KYC-FormforIndividuals"
                >
                  Download Now!!
                </a>
              </p>
              <p>
                3. Comman Transaction - Pramesh
                <a
                  href="files/Comman Transaction - Pramesh.pdf"
                  className="btn-six mt-10 ms-2"
                  download="Comman Transaction - Pramesh"
                >
                  Download Now!!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Downloads;
