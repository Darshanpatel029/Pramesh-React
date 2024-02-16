import React from "react";
import "../css/style.css";
import img1 from "../images/bannerImg/icon1.jpg";
import img2 from "../images/bannerImg/icon2.jpg";
import img3 from "../images/bannerImg/icon3.jpg";
import img4 from "../images/bannerImg/icon4.jpg";
import img5 from "../images/bannerImg/icon5.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="main-page-wrapper">
      <div className="block-feature-one position-relative pt-75 mt-4">
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-md-6">
                <div className="title-one text-center text-md-start mb-30 sm-mb-10">
                  <h2 style={{ fontSize: "42px", fontWeight: "200" }}>
                    Our Services
                  </h2>
                </div>
              </div>
            </div>
            <div className="investment-options">
              <Link className="option" to="/MutualFund">
                <div className="icon equity">
                  <img src={img1} alt="" />
                </div>
                <h3 className="fw-bold">MutualFund</h3>
                <p className="text-dark">
                  A mutual fund is an investment vehicle where many investors
                  pool their money to earn returns on their capital over a
                  period.
                </p>
              </Link>
              <Link className="option" to="/EquityInvestment">
                <div className="icon margin-trading">
                  <img src={img2} alt="" />
                </div>
                <h3 className="fw-bold">Equity Investments</h3>
                <p className="text-dark">
                  An equity investment is money that is invested in a company by
                  purchasing shares of that company in the stock market. These
                  shares are typically traded on a stock exchange.
                </p>
              </Link>
              <Link className="option" to="/Insurance">
                <div className="icon commodities">
                  <img src={img3} alt="" />
                </div>
                <h3 className="fw-bold">Insurance</h3>
                <p className="text-dark">
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
                  <h3 className="fw-bold">Loan Services</h3>
                  <p className="text-dark">
                    The loan services enable Spice Money Adhikaris and customers
                    to avail attractive loans at low interest rates.
                  </p>
                </Link>
                <Link className="option" to="/RealEstate">
                  <div className="icon currency">
                    <img src={img5} alt="" />
                  </div>
                  <h3 className="fw-bold">Real E state</h3>
                  <p className="text-dark">
                    Real estate is defined as the land and any permanent
                    structures, like a home, or improvements attached to the
                    land, whether natural or man-made.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
