import React from "react";
import img1 from "../images/media/bannerMain.jpg";
import BannerImg1 from "../images/lazy.png";
import { Link } from "react-router-dom";

const BannerOne = () => {
  return (
    <div className="main-page-wrapper">
      <div className="hero-banner-one pt-225 xl-pt-200 lg-pt-150 pb-150 lg-pb-100 position-relative">
        <div className="hero-slider-one m0">
          <div className="item m0">
            <div
              className="hero-img"
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
          </div>
        </div>
        <h1
          className="hero-heading d-inline-block position-relative wow fadeInUp"
          style={{ fontSize: "42px" }}
        >
          A Complete Investment <br />
          Solution For <br /> Wealth Creation.
        </h1>
        <p
          className="text-xl text-white wow fadeInUp"
          style={{ padding: "25px" }}
        >
          Empowering businesses with innovative <br /> strategies and actionable
          recommendations
        </p>
        <div style={{ padding: "25px" }}>
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
  );
};

export default BannerOne;
