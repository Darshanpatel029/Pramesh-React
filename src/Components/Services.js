import React from "react";
import "../css/style.css";
import BannerImg1 from "../images/lazy.png";
import Point1 from "../images/Banner/point1.png";
import Point2 from "../images/Banner/point2.png";
import Point3 from "../images/Banner/point3.png";
import img1 from "../images/bannerImg/icon1.jpg";
import img2 from "../images/bannerImg/icon2.jpg";
import img3 from "../images/bannerImg/icon3.jpg";
import img4 from "../images/bannerImg/icon4.jpg";
import img5 from "../images/bannerImg/icon5.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="main-page-wrapper">
      <div className="block-feature-one position-relative pt-75">
        <div className="upper-wrapper mb-110 lg-mb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 wow fadeInUp">
                <div className="card-style-one d-flex w-100 mb-35">
                  <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                    <img src={Point1} alt="img" className="lazy-img" />
                  </div>
                  <div className="text ps-4">
                    <h4 className="fw-bold">
                      Hassle Free demat and trading account Opening
                    </h4>
                    <p className="pe-xl-4"></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="card-style-one d-flex w-100 mb-35">
                  <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                    <img src={Point2} alt="img" className="lazy-img" />
                  </div>
                  <div className="text ps-4">
                    <h4 className="fw-bold">
                      Unique trading experience with latest technology
                    </h4>
                    <p className="pe-xl-4"></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                <div className="card-style-one d-flex w-100 mb-35">
                  <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                    <img src={Point3} alt="img" className="lazy-img" />
                  </div>
                  <div className="text ps-4">
                    <h4 className="fw-bold">
                      360 degree fundamental & technical analysis
                    </h4>
                    <p className="pe-xl-4"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-md-6">
                <div className="title-one text-center text-md-start mb-30 sm-mb-10">
                  <h2>Product and Services</h2>
                </div>
              </div>
            </div>
            <div className="investment-options">
              <Link className="option" to="/MutualFund">
                <div className="icon equity">
                  <img src={img1} alt="" />
                </div>
                <h3>MutualFund</h3>
                <p>
                  A mutual fund is an investment vehicle where many investors
                  pool their money to earn returns on their capital over a
                  period.
                </p>
              </Link>
              <Link className="option" to="/EquityInvestment">
                <div className="icon margin-trading">
                  <img src={img2} alt="" />
                </div>
                <h3>Equity Investments</h3>
                <p>
                  An equity investment is money that is invested in a company by
                  purchasing shares of that company in the stock market. These
                  shares are typically traded on a stock exchange.
                </p>
              </Link>
              <Link className="option" to="/Insurance">
                <div className="icon commodities">
                  <img src={img3} alt="" />
                </div>
                <h3>Insurance</h3>
                <p>
                  Insurance is a contract, represented by a policy, in which an
                  individual or entity receives financial protection or
                  reimbursement against losses from an insurance company.
                </p>
              </Link>
              <div className="d-flex justify-content-center gap-4 mt-4">
                <Link className="option" to="/LoanServices">
                  <div className="icon securities-lending">
                    <img src={img4} alt="" />
                  </div>
                  <h3>Loan Services</h3>
                  <p>
                    The loan services enable Spice Money Adhikaris and customers
                    to avail attractive loans at low interest rates.
                  </p>
                </Link>
                <Link className="option" to="/RealEstate">
                  <div className="icon currency">
                    <img src={img5} alt="" />
                  </div>
                  <h3>Real E state</h3>
                  <p>
                    Real estate is defined as the land and any permanent
                    structures, like a home, or improvements attached to the
                    land, whether natural or man-made.
                  </p>
                </Link>
              </div>
            </div>
            <div className="section-subheading sm-mt-40">
              <p className="text-lg">
                Inciddnt ut labore et dolor magna aliu. enim ad mim venam, quis
                nostru
              </p>
              <Link to="/MutualFund" className="btn-three icon-link">
                <span>See All Services</span>
                <img
                  src={BannerImg1}
                  alt="img"
                  className="lazy-img icon ms-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
