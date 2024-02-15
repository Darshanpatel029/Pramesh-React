import React from "react";
import img1 from "../images/media/bannerMain.jpg";
import BannerImg1 from "../images/lazy.png";
import { Link } from "react-router-dom";

const BannerOne = () => {
  return (
    <>
      <div className="hero-banner-one pt-225 xl-pt-200 lg-pt-150 pb-150 lg-pb-100 position-relative">
        <div className="hero-slider-one m0">
          <div className="item m0">
            <div
              className="hero-img"
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
          </div>
        </div>
        <div className="container position-relative">
          <div className="row">
            <div className="col-xl-6 col-lg-7 ms-auto">
              <h1 className="hero-heading d-inline-block position-relative wow fadeInUp">
                A Complete Investment <br />
                Solution For <br />
                Wealth Creation.
              </h1>
              <p
                className="text-xl text-white pt-35 pb-25 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Empowering businesses with innovative strategies and actionable
                recommendations
              </p>
              <Link
                to="/contactUs"
                className="btn-two icon-link wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <span>Let’s Talk</span>
                <img src={BannerImg1} alt="img" className="lazy-img icon ms-2" />
              </Link>
            </div>
          </div>
        </div>
        <Link
          to="/contactUs"
          className="more-btn rounded-circle d-flex align-items-center justify-content-center tran3s wow fadeInLeft"
        >
          <i className="bi bi-arrow-up-right"></i>
        </Link>
      </div>
    </>
  );
};

export default BannerOne;
