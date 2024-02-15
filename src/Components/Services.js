import React from "react";
import BannerImg1 from "../images/lazy.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="block-feature-one position-relative pt-75">
        <div className="upper-wrapper mb-110 lg-mb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 wow fadeInUp">
                <div className="card-style-one d-flex w-100 mb-35">
                  <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                    <img src={BannerImg1} alt="img" className="lazy-img" />
                  </div>
                  <div className="text ps-4">
                    <h4 className="fw-bold">Low Fees</h4>
                    <p className="pe-xl-4"></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="card-style-one d-flex w-100 mb-35">
                  <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                    <img src={BannerImg1} alt="img" className="lazy-img" />
                  </div>
                  <div className="text ps-4">
                    <h4 className="fw-bold">Expert Advisor</h4>
                    <p className="pe-xl-4"></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                <div className="card-style-one d-flex w-100 mb-35">
                  <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                    <img src={BannerImg1} alt="img" className="lazy-img" />
                  </div>
                  <div className="text ps-4">
                    <h4 className="fw-bold">Effective Support</h4>
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
                  <h2>Provide quality Services.</h2>
                </div>
              </div>
            </div>
            <div className="justify-content-center d-flex">
              <div className="col-lg-4 col-md-6 d-flex wow fadeInUp p-2">
                <div className="card-style-two vstack tran3s w-100 mt-30">
                  <img
                    src={BannerImg1}
                    alt="img"
                    className="lazy-img icon me-auto"
                  />
                  <h4 className="fw-bold mt-30 mb-25">Mutual fund</h4>
                  <p className="mb-20">
                    A mutual fund is an investment vehicle that pools money from
                    various investors and invests it in a diversified portfolio
                    of stocks, bonds, or other securities. The mutual fund is
                    managed by a professional fund manager who buys and sells
                    securities on behalf of the investors.
                  </p>
                  <Link
                    to="/MutualFund"
                    className="arrow-btn tran3s mt-auto stretched-link"
                  >
                    <img src={BannerImg1} alt="img" className="lazy-img" />
                  </Link>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex wow fadeInUp p-2"
                data-wow-delay="0.1s"
              >
                <div className="card-style-two vstack tran3s w-100 mt-30">
                  <img
                    src={BannerImg1}
                    alt="img"
                    className="lazy-img icon me-auto"
                  />
                  <h4 className="fw-bold mt-30 mb-25">Insurance</h4>
                  <p className="mb-20">
                    Insurance is a contract, represented by a policy, in which
                    an individual or entity receives financial protection or
                    reimbursement against losses from an insurance company. The
                    company pools clients' risks to make payments more
                    affordable for the insured.
                  </p>
                  <Link
                    to="/Insurance"
                    className="arrow-btn tran3s mt-auto stretched-link"
                  >
                    <img src={BannerImg1} alt="img" className="lazy-img" />
                  </Link>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex wow fadeInUp p-2"
                data-wow-delay="0.2s"
              >
                <div className="card-style-two vstack tran3s w-100 mt-30">
                  <img
                    src={BannerImg1}
                    alt="img"
                    className="lazy-img icon me-auto"
                  />
                  <h4 className="fw-bold mt-30 mb-25">Equity Investment</h4>
                  <p className="mb-20">
                    We work continuous of Research on Fundamentals – Value,
                    Growth & Technical, which gives you Opportunity base theme
                    for Investing
                  </p>
                  <Link
                    to="/EquityInvestment"
                    className="arrow-btn tran3s mt-auto stretched-link"
                  >
                    <img src={BannerImg1} alt="img" className="lazy-img" />
                  </Link>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex wow fadeInUp p-2"
                data-wow-delay="0.2s"
              >
                <div className="card-style-two vstack tran3s w-100 mt-30">
                  <img
                    src={BannerImg1}
                    alt="img"
                    className="lazy-img icon me-auto"
                  />
                  <h4 className="fw-bold mt-30 mb-25">Capital Protection</h4>
                  <p className="mb-20">
                    World's Best Strategy Blend with Investment through MIP &
                    transfer interest income to balanced funds. Best for
                    moderate F
                  </p>
                  <Link
                    to="/LoanServices"
                    className="arrow-btn tran3s mt-auto stretched-link"
                  >
                    <img src={BannerImg1} alt="img" className="lazy-img" />
                  </Link>
                </div>
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
    </>
  );
};

export default Services;
