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
      <div className="team-section-one mt-100 lg-mt-80">
        <div className="container">
          <div className="position-relative">
            <div className="title-one mb-40 lg-mb-20 wow fadeInUp">
              <h2 style={{ fontSize: "42px", fontWeight: "200" }}>
                Our Services
              </h2>
            </div>
            <div className="row">
              <div className="d-flex flex-wrap gap-4 justify-content-center">
                <Link className="col-lg-3 col-sm-6 wow fadeInUp choose slide-left-to-right" to="/MutualFund">
                  <div className="card-style-four mt-35">
                    <div className="icon">
                      <img src={img1} alt="" />
                    </div>
                    <h3 className="fw-bold">MutualFund</h3>
                    <div>
                      A mutual fund is an investment vehicle where many
                      investors pool their money to earn returns on their
                      capital over a period.
                    </div>
                  </div>
                </Link>
                <Link className="col-lg-3 col-sm-6 wow fadeInUp choose slide-left-to-right" to="/EquityInvestment">
                  <div className="card-style-four mt-35">
                    <div className="icon">
                      <img src={img2} alt="" />
                    </div>
                    <h3 className="fw-bold">Equity Investments</h3>
                    <div>
                      An equity investment is money that is invested in a
                      company by purchasing shares of that company in the stock
                      market. These shares are typically traded on a stock
                      exchange.
                    </div>
                  </div>
                </Link>
                <Link className="col-lg-3 col-sm-6 wow fadeInUp choose slide-left-to-right" to="/Insurance">
                  <div className="card-style-four mt-35">
                    <div className="icon">
                      <img src={img3} alt="" />
                    </div>
                    <h3 className="fw-bold">Insurance</h3>
                    <div className="text-dark">
                      Insurance is a contract, represented by a policy, in which
                      an individual or entity receives financial protection or
                      reimbursement against losses from an insurance company.
                    </div>
                  </div>
                </Link>
              </div>
              <div className="d-flex flex-wrap gap-4 justify-content-center">
                <Link className="col-lg-3 col-sm-6 wow fadeInUp choose slide-right-to-left" to="/LoanServices">
                  <div className="card-style-four mt-35">
                    <div className="icon">
                      <img src={img4} alt="" />
                    </div>
                    <h3 className="fw-bold">Loan Services</h3>
                    <div className="text-dark">
                      The loan services enable Spice Money Adhikaris and
                      customers to avail attractive loans at low interest rates.
                    </div>
                  </div>
                </Link>
                <Link className="col-lg-3 col-sm-6 wow fadeInUp choose slide-right-to-left" to="/RealEstate">
                  <div className="card-style-four mt-35">
                    <div className="icon">
                      <img src={img5} alt="" />
                    </div>
                    <h3 className="fw-bold">Real Estate</h3>
                    <div className="text-dark">
                      Real estate is defined as the land and any permanent
                      structures, like a home, or improvements attached to the
                      land, whether natural or man-made.
                    </div>
                  </div>
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
