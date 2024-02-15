import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import shape from "../../images/shape/shape_26.png";
import Img1 from "../../images/media/certificates.jpg";
import { Link } from "react-router-dom";

const Certificates = () => {
  return (
    <>
      <Navbar />
      <div
        className="inner-banner-one pt-225 lg-pt-200 md-pt-150 pb-100 md-pb-70 position-relative"
        style={{ backgroundImage: `url(${Img1})` }}
      >
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-heading d-inline-block position-relative me-xxl-4 me-lg-5">
                Certificates
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
                <li>Certificates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div classNameName="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one  lg-mt-80">
          <div className="container ">
            <div className="position-relative mb-3">
              <div className="row">
                <div className="col-lg-4 col-md-6 d-flex wow fadeInUp">
                  <div className="style-two vstack tran3s w-100 mt-30">
                    <img
                      src={"https://www.prameshwealth.com/eng2/z1.jpg"}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex wow fadeInUp">
                  <div className="style-two vstack tran3s w-100 mt-30">
                    <img
                      src={"https://www.prameshwealth.com/eng2/z2.jpg"}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex wow fadeInUp">
                  <div className="style-two vstack tran3s w-100 mt-30">
                    <img
                      src={"https://www.prameshwealth.com/eng2/z3.jpg"}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex wow fadeInUp">
                  <div className="style-two vstack tran3s w-100 mt-30">
                    <img
                      src={"https://www.prameshwealth.com/eng2/z4.jpg"}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex wow fadeInUp">
                  <div className="style-two vstack tran3s w-100 mt-30">
                    <img
                      src={"https://www.prameshwealth.com/eng2/z5.jpg"}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex wow fadeInUp">
                  <div className="style-two vstack tran3s w-100 mt-30">
                    <img
                      src={"https://www.prameshwealth.com/eng2/z6.jpg"}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex wow fadeInUp">
                  <div className="style-two vstack tran3s w-100 mt-30">
                    <img
                      src={"https://www.prameshwealth.com/eng2/z7.jpg"}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex wow fadeInUp">
                  <div className="style-two vstack tran3s w-100 mt-30">
                    <img
                      src={"https://www.prameshwealth.com/eng3/x1.jpg"}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex wow fadeInUp">
                  <div className="style-two vstack tran3s w-100 mt-30">
                    <img
                      src={"https://www.prameshwealth.com/eng3/x2.jpg"}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex wow fadeInUp">
                  <div className="style-two vstack tran3s w-100 mt-30">
                    <img
                      src={"https://www.prameshwealth.com/eng3/x3.jpg"}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex wow fadeInUp">
                  <div className="style-two vstack tran3s w-100 mt-30">
                    <img
                      src={"https://www.prameshwealth.com/eng3/x4.jpg"}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex wow fadeInUp">
                  <div className="style-two vstack tran3s w-100 mt-30">
                    <img
                      src={"https://www.prameshwealth.com/eng3/x5.jpg"}
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Certificates;
