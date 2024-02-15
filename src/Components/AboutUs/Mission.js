import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BannerImg from "../../images/lazy.png";
import shape from "../../images/shape/shape_26.png";
import Img1 from "../../images/media/img_31.jpg";
import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <div className="main-page-wrapper">
      <Navbar />
      <div
        className="inner-banner-one pt-225 lg-pt-200 md-pt-150 pb-100 md-pb-70 position-relative"
        style={{ backgroundImage: `url(${Img1})` }}
      >
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-heading d-inline-block position-relative me-xxl-4 me-lg-5">
                Our Vision
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
                <li>ourVision</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 wow fadeInLeft">
                <img
                  src={"https://www.prameshwealth.com/images/g1.png"}
                  alt="img"
                />
              </div>
              <div className="col-lg-6 ms-auto">
                <div className="row">
                  <div className="d-flex wow fadeInUp">
                    <div className="card-style-twelve mb-40 lg-mb-20">
                      <div className="icon tran3s d-flex align-items-center justify-content-center rounded-circle">
                        <img
                          src={BannerImg}
                          data-src="images/icon/icon_55.png"
                          alt="img"
                          className="lazy-img"
                        />
                      </div>
                      <h4 className="fw-bold mt-20 mb-15">OUR MISSION</h4>
                      <p>
                        To help those who are at the bottom of the pyramid. To
                        work with vigour, dedication and innovation to achieve
                        excellence in service, quality, reliability, safety and
                        customer care as the ultimate goal. To earn the trust
                        and confidence of all stakeholders, exceeding their
                        expectations and making the Company a respected
                        household name.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one  lg-mt-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 ms-auto">
                <div className="row">
                  <div className="d-flex wow fadeInUp">
                    <div className="card-style-twelve mb-40 lg-mb-20">
                      <div className="icon tran3s d-flex align-items-center justify-content-center rounded-circle">
                        <img
                          src={BannerImg}
                          data-src="images/icon/icon_55.png"
                          alt="img"
                          className="lazy-img"
                        />
                      </div>
                      <h4 className="fw-bold mt-20 mb-15">OUR VISION</h4>
                      <p>
                        To attain globally best standards and become a
                        world-class financial services enterprise – guided by
                        its purpose to move towards a greater degree of
                        sophistication and maturity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 wow fadeInLeft">
                <img
                  src={"https://www.prameshwealth.com/images/g2.png"}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 wow fadeInLeft">
                <img
                  src={"https://www.prameshwealth.com/images/g3.png"}
                  alt="img"
                />
              </div>
              <div className="col-lg-6 ms-auto">
                <div className="row">
                  <div className="d-flex wow fadeInUp">
                    <div className="card-style-twelve mb-40 lg-mb-20">
                      <div className="icon tran3s d-flex align-items-center justify-content-center rounded-circle">
                        <img
                          src={BannerImg}
                          data-src="images/icon/icon_55.png"
                          alt="img"
                          className="lazy-img"
                        />
                      </div>
                      <h4 className="fw-bold mt-20 mb-15">OUR VALUES</h4>
                      <p>
                        To our customers, we are committed to providing quality
                        products and services that consistently represent an
                        exceptional value and result in high customer
                        satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mission;
