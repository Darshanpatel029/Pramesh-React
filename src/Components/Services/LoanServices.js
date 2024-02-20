import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import shape from "../../images/shape/shape_26.png";
import Img1 from "../../images/media/img_32.jpg";
import BannerImg1 from "../../images/lazy.png";
import { Link } from "react-router-dom";

const LoanServices = () => {
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
                Services
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
                <li>LoanServices</li>
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
                  src={"https://www.prameshwealth.com/loan/e1.jpg"}
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
                      <h4 className="fw-bold mt-20 mb-15">EDUCATION LOAN</h4>
                      <p>
                        In either case, an education loan is a good idea and a
                        commonly sought after resort. Pursuing higher studies
                        usually involves high fees and an education loan comes
                        in handy at this point. Banks provide education loans
                        for graduation/PG, diploma or professional courses, at
                        attractive interest rates.
                      </p>
                      <p>
                        To get a loan from a lender, you generally have to
                        pledge security such as house property, fixed deposits,
                        shares, bond, etc., to take the loan. There is no margin
                        requirement if you apply for a loan within this limit
                        through a scheduled commercial bank under the CGFSEL
                        scheme.
                      </p>
                      <div className="d-flex justify-content-end">
                        <Link to="/contactUs" className="btn-one tran3s">
                          Get in Touch
                        </Link>
                      </div>
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
                      <h4 className="fw-bold mt-20 mb-15">PERSONAL LOAN</h4>
                      <p>
                        A personal loan is a loan that does not require
                        collateral or security and is offered with minimal
                        documentation. You can use the funds from this loan for
                        any legitimate financial need. Like any other loan, you
                        must repay it accordance to the agreed terms with the
                        bank.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 wow fadeInLeft">
                <img
                  src={"https://www.prameshwealth.com/loan/p1.jpg"}
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
                  src={"https://www.prameshwealth.com/loan/h1.jpg"}
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
                          data-src={"images/icon/icon_55.png"}
                          alt="img"
                          className="lazy-img"
                        />
                      </div>
                      <h4 className="fw-bold mt-20 mb-15">Home Loan</h4>
                      <p>
                        A home loan is a secured loan that is obtained to
                        purchase a property by offering it as collateral. Home
                        loans offer high-value funding at economical interest
                        rates and for long tenors. They are repaid through EMIs.
                        After repayment, the property's title is transferred
                        back to the borrower.
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
                      <h4 className="fw-bold mt-20 mb-15">Business Loan</h4>
                      <p>
                        Those whose business has been profit making for the
                        previous 2 years. The business should have a Minimal
                        Annual Income (ITR) of Rs. 1.5 lakhs per annum. The
                        applicant should be at least 21 years at the time of
                        applying for the loan, and should be no older than 65
                        years at the time of loan maturity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 wow fadeInLeft">
                <img
                  src={"https://www.prameshwealth.com/loan/b1.jpg"}
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
                  src={"https://www.prameshwealth.com/loan/c1.jpg"}
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
                      <h4 className="fw-bold mt-20 mb-15">
                        COMMERCIAL PURCHASE
                      </h4>
                      <p>
                        A commercial purchase agreement allows for a seller to
                        make a deal with an eligible buyer to transfer ownership
                        of their real estate in exchange for cash or other
                        trade. The buyer will commonly be required to deposit
                        earnest money, known as “consideration”, in order for
                        the contract to be valid.
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
                      <h4 className="fw-bold mt-20 mb-15">BALANCE TRANSFER</h4>
                      <p>
                        A balance transfer is moving a debt balance from one
                        account to another account. The most common type of
                        balance transfer is shifting debt from one credit card
                        to another credit card. Most often, people transfer a
                        balance in order to take advantage of a lower interest
                        rate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 wow fadeInLeft">
                <img
                  src={"https://www.prameshwealth.com/loan/bt1.jpg"}
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
                  src={"https://www.prameshwealth.com/loan/t1.jpg"}
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
                      <h4 className="fw-bold mt-20 mb-15">TOP UP</h4>
                      <p>
                        A Top up loan meaning an extra loan is a financing
                        option that is offered over and above the existing loan
                        amount for products such as home loan and personal loan.
                        The top-up loan is offered to customers who have an
                        existing relationship with the lender, have a good
                        credit score and have repayment ability
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

export default LoanServices;
