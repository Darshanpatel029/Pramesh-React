import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import shape from "../../images/shape/shape_26.png";
import Img1 from "../../images/media/realEstate.jpg";
import BannerImg1 from "../../images/lazy.png";
import { Link } from "react-router-dom";

const RealEstate = () => {
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
                Real Estate
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
                <li>RealEstate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one  lg-mt-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 wow fadeInLeft">
                <img
                  src={"https://www.prameshwealth.com/loan/r1.jpg"}
                  alt="img"
                />
              </div>
              <div className="col-lg-6 ms-auto">
                <div className="row">
                  <div className="d-flex wow fadeInUp">
                    <div className="card-style-twelve mb-40 lg-mb-20">
                      <div className="icon tran3s d-flex align-items-center justify-content-center rounded-circle">
                        <img
                          src={BannerImg1}
                          data-src="images/icon/icon_55.png"
                          alt="img"
                          className="lazy-img"
                        />
                      </div>
                      <h4 className="fw-bold mt-20 mb-15">BUY</h4>
                      <p>
                        Real estate is a className of "real property" that
                        includes land and anything permanently attached to it,
                        whether natural or man-made.You can invest in real
                        estate directly by purchasing a home, rental property or
                        other property, or indirectly through a real estate
                        investment trust (REIT).
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
                          src={BannerImg1}
                          data-src="images/icon/icon_55.png"
                          alt="img"
                          className="lazy-img"
                        />
                      </div>
                      <h4 className="fw-bold mt-20 mb-15">SELL</h4>
                      <p>
                        The most popular way is to buy an investment property
                        and slowly build up your portfolio. Generally, there are
                        two primary ways to make money from real estate assets —
                        appreciation, which is an increase in property value
                        over a period of time, and rental income collected by
                        renting out the property to tenants.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 wow fadeInLeft">
                <img
                  src={"https://www.prameshwealth.com/loan/r2.jpg"}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one  lg-mt-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 wow fadeInLeft">
                <img
                  src={"https://www.prameshwealth.com/loan/r3.jpg"}
                  alt="img"
                />
              </div>
              <div className="col-lg-6 ms-auto">
                <div className="row">
                  <div className="d-flex wow fadeInUp">
                    <div className="card-style-twelve mb-40 lg-mb-20">
                      <div className="icon tran3s d-flex align-items-center justify-content-center rounded-circle">
                        <img
                          src={BannerImg1}
                          data-src="images/icon/icon_55.png"
                          alt="img"
                          className="lazy-img"
                        />
                      </div>
                      <h4 className="fw-bold mt-20 mb-15">RENT</h4>
                      <p>
                        Rental income is any payment you receive for the use or
                        occupation of property. You must report rental income
                        for all your properties. In addition to amounts you
                        receive as normal rent payments, there are other amounts
                        that may be rental income and must be reported on your
                        tax return.
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

export default RealEstate;
