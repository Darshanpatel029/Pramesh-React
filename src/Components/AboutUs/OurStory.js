import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BannerImg from "../../images/lazy.png";
import shape from "../../images/shape/shape_26.png";
import Img1 from "../../images/media/img_32.jpg";
import Img2 from "../../images/ourStory/ourStory2.jpeg";
import Img3 from "../../images/ourStory/ourStory1.jpeg";
import Img4 from "../../images/ourStory/ourStory4.jpeg";
import Img5 from "../../images/ourStory/ourStory5.jpg";
import { Link } from "react-router-dom";

const OurStory = () => {
  return (
    <div className="main-page-wrapper">
      <Navbar />
      <div
        className="inner-banner-one pt-225 lg-pt-200 md-pt-150 pb-100 md-pb-70 position-relative  "
        style={{ backgroundImage: `url(${Img1})` }}
      >
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-heading d-inline-block position-relative me-xxl-4 me-lg-5">
                OurStory
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
                <li>OurStory</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded  mt-4 p-4 bx-shadow rounded shadow-sm">
        <div className="text-feature-one  lg-mt-80">
          <div className="row">
            <div className="col-lg-5 wow fadeInLeft">
              <img src={Img3} alt="img" />
            </div>
            <div className="col-lg-6 ms-auto">
              <div className="row">
                <div className="d-flex wow fadeInUp">
                  <div className="card-style-twelve mb-40 lg-mb-20">
                    <div className="icon tran3s d-flex align-items-center justify-content-center rounded-circle">
                      <img src={BannerImg} className="lazy-img" alt="img" />
                    </div>
                    <h4 className="fw-bold mt-20 mb-15">
                      Build Your Income With Right Way
                    </h4>
                    <p>
                      Founded in 2001, the Pramesh has grown to become one of
                      the leading Responsible Financial Products Distributor.
                      Our wide network spans more than 5 own branches in Gujarat
                      and serving an esteemed clientele of 5000+ investors.
                    </p>
                    <p>
                      Presently, the company is engage in the business of a
                      multiple areas of Financial Services Provider – Mutual
                      Fund, Insurance, Fixed Income Securities, Stock Broking,
                      Commodities and Currency Broking, Corporate Real Estate
                      Agent, Various Types of Loan arrangement as Direct Selling
                      Agent with reputed Banks, PMS, Corporate FDs, NCD, Bonds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p>
                Over the Stages of your lifetime, wealth will play different
                roles for you. At Pramesh, First, we understand Clients
                financial needs/goals, risk appetite, Investment Time Horizons
                etc and offer to clients a comprehensive suite of Wealth
                Creation Services that match clients financial and lifestyle
                needs/goals.
              </p>
              <p>
                Our financial advisors are dedicated to helping clients
                carefully plan to afford life's necessities, achieve a
                comfortable lifestyle, feel confident about financial security
                and help others in meaningful ways - according to clients unique
                financial and lifetime needs/goals.
              </p>
              <p>
                At Pramesh Wealth Pvt. Ltd., we deliver our services on a
                personalize level, in the context of a one-on-one relationship
                with an experienced financial teams. The management team
                consists of professionals with in-depth financial expertise in
                the Financial Investment Management.
              </p>
              <p>
                Mr. Ram Patel is the Founder Director of the company and having
                three other dedicated Directors, Mr. Akash Patel, Mr.Ashay Shah
                and Mr. Ronak Bhatt.
                <br /> We're here to help our clients in Creating, Managing and
                protecting wealth by ethical and professional financial services
                by having concept of Long Term, Systematic investment in line
                with investment objective of the clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="block-feature-one position-relative light-bg-deep mt-100 lg-mt-60 pt-120 lg-pt-60 pb-130 lg-pb-60 ">
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex wow fadeInUp">
                <div className="style-two vstack tran3s w-100 mt-30">
                  <img src={Img2} alt="img" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex wow fadeInUp">
                <div className="style-two vstack tran3s w-100 mt-30">
                  <img src={Img5} alt="img" style={{ height: "100%" }} />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex wow fadeInUp">
                <div className="style-two vstack tran3s w-100 mt-30">
                  <img src={Img4} alt="img" style={{ height: "100%" }} />
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

export default OurStory;
