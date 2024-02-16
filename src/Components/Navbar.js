import React from "react";
import img1 from "../images/logo/logo_01.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header
        className="theme-main-menu menu-overlay menu-style-one white-vr sticky-menu"
        style={{ position: "fixed", backgroundColor: "#b3cfbed1" }}
      >
        <div className="inner-content position-relative">
          <div className="top-header">
            <div className="d-flex align-items-center justify-content-around">
              <div className="logo order-lg-0">
                <Link to="/" className="d-flex align-items-center navImg">
                  <img src={img1} alt="img" />
                </Link>
              </div>
              <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
                <ul className="d-flex align-items-center style-none">
                  <li className="d-none d-md-block">
                    <Link to="/contactUs" className="btn-one tran3s">
                      Get in Touch
                    </Link>
                  </li>
                </ul>
              </div>
              <nav className="navbar navbar-expand-lg p0 order-lg-2">
                <button
                  className="navbar-toggler d-block d-lg-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav align-items-lg-center">
                    <li className="d-block d-lg-none">
                      <div className="logo"></div>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        to="/"
                        className="nav-link dropdown-toggle fw-bold"
                        style={{ color: "black" }}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle fw-bold"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                        style={{ color: "black" }}
                      >
                        About Us
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="/OurStory" className="dropdown-item">
                            <span>Our Story</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/Vision" className="dropdown-item">
                            <span>Mission & Vision</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/Certificates" className="dropdown-item">
                            <span>Certificates & Awards</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle fw-bold"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                        style={{ color: "black" }}
                      >
                        Services
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="/MutualFund" className="dropdown-item">
                            <span>Mutual Funds</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/EquityInvestment"
                            className="dropdown-item"
                          >
                            <span>Equity Investments</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/Insurance" className="dropdown-item">
                            <span>Insurance</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/LoanServices" className="dropdown-item">
                            <span>Loan Services</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/RealEstate" className="dropdown-item">
                            <span>Real Estate</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        to="/Team"
                        className="nav-link dropdown-toggle fw-bold"
                        role="button"
                        style={{ color: "black" }}
                      >
                        Our Team
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        to="/Downloads"
                        className="nav-link dropdown-toggle fw-bold"
                        role="button"
                        style={{ color: "black" }}
                      >
                        Downloads
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        to="/"
                        className="nav-link dropdown-toggle fw-bold"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                        style={{ color: "black" }}
                      >
                        Log In
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link
                            to="https://iinvestoffice.com/Login.aspx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dropdown-item"
                          >
                            <span>Admin Log In</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://iinvestoffice.com/branchlogin.aspx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dropdown-item"
                          >
                            {" "}
                            <span>Branch Log In</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://crm.prameshwealth.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dropdown-item"
                          >
                            {" "}
                            <span>Employee Log In</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://iinvestoffice.com/clientlogin.aspx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dropdown-item"
                          >
                            {" "}
                            <span>Customer Log In</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="d-md-none ps-2 pe-2">
                      <Link
                        to="/contactUs"
                        className="btn-one w-100 mt-15 tran3s"
                      >
                        Get in Touch
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
