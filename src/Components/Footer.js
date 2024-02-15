import React from "react";
import FtrImg from "../images/logo/logo_01.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main-page-wrapper">
      <div className="footer-one">
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <div className="col-xl-4 col-md-3 footer-intro mb-30">
                <div className="logo mb-15">
                  <Link to="/" className="d-inline-block d-lg-none navImg">
                    <img src={FtrImg} alt="img" />
                  </Link>
                </div>
                <p className="text-white lh-sm mb-35">
                  <span className="opacity-50">
                    Founded in 2001, the Pramesh has grown to become one of the
                    leading Wealth Management Company. Our wide network spans
                    more than 5 own branches in Gujarat and serving an esteemed
                    clientele of 5000 investors.
                  </span>
                </p>
                <ul className="style-none d-flex align-items-center social-icon">
                  <li>
                    <Link
                      to="https://www.facebook.com/Prameshwealth"
                      className="bi bi-facebook"
                    >
                      <i></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=" https://twitter.com/pramesh_wealth"
                      className="bi bi-twitter"
                    >
                      <i></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.instagram.com/pramesh_wealth/"
                      className="bi bi-instagram"
                    >
                      <i></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
                <h5 className="footer-title">Links</h5>
                <ul className="footer-nav-link style-none">
                  <li>
                    {" "}
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/OurStory">About us</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/Team">Our Team</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/Downloads">Downloads</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/contactUs">Contacts</Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
                <h5 className="footer-title">Services</h5>
                <ul className="footer-nav-link style-none">
                  <li>
                    {" "}
                    <Link to="/MutualFund">Mutual Funds</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/EquityInvestment">Equity Investments</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/Insurance">Insurance</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/LoanServices">Loan Services</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/RealEstate">Real Estate</Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
                <h5 className="footer-title">Contact Us</h5>
                <ul className="footer-nav-link style-none">
                  <li>
                    <Link to="/">
                      “Pramesh House” 8, Vedant Bunglow, Main Kalali road,
                      Kalali, Vadodara- 390012
                    </Link>
                  </li>
                  <li>
                    <Link to="/">+91 89800 27229</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="bottom-footer">
            <div className="row align-items-center">
              <div className="col-lg-5 order-lg-last mb-15">
                <div className="footer-newsletter float-xl-end">
                  <h5 className="footer-title">Subscribe Newsletter</h5>
                  <form action="#">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                    />
                    <button>
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-7 order-lg-first mb-15">
                <Link to="/" className="d-none d-lg-inline-block mb-25 navImg">
                  <img src={FtrImg} alt="img" />
                </Link>

                <div className="d-xl-flex align-items-center">
                  <ul className="style-none bottom-nav d-flex flex-wrap justify-content-center justify-content-lg-start order-lg-last">
                    <li>
                      {" "}
                      <Link to="/Privacy">Privacy Policy</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/TermAndCondition">Terms & Conditions</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/Disclosure">Disclosure</Link>
                    </li>
                  </ul>
                  <div className="copyright me-xl-4 lg-mt-10 order-lg-first">
                    © 2022 Pramesh Wealth Pvt Ltd. All Rights Reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
