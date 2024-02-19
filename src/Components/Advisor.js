import React from "react";
import profileImg from "../images/media/profile.jpg";
import { Link } from "react-router-dom";

const Advisor = () => {
  return (
    <div className="main-page-wrapper">
      <div className="team-section-one mt-100 lg-mt-80">
        <div className="container">
          <div className="position-relative">
            <div className="title-one mb-40 lg-mb-20 wow fadeInUp">
              <h2 style={{ fontSize: "42px", fontWeight: "200" }}>
                Our Advisor
              </h2>
            </div>
            <div className="row justify-content-around">
              <div className="col-lg-2 col-sm-6 wow fadeInUp">
                <div className="card-style-four mt-35">
                  <div className="media d-flex align-items-center justify-content-center position-relative overflow-hidden ">
                    <img
                      src={profileImg}
                      alt="img"
                      className="lazy-img w-100"
                    />
                    <Link
                      to="/Team"
                      className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
                    >
                      {" "}
                      <i className="bi bi-arrow-up-right"></i>
                    </Link>
                  </div>
                  <h4 className="fw-500 pt-20 m0">Mr. Ramchandra R. Patel</h4>
                  <div className="fs-6">Founder & Managing Director</div>
                </div>
              </div>
              <div
                className="col-lg-2 col-sm-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="card-style-four mt-35">
                  <div className="media d-flex align-items-center justify-content-center position-relative overflow-hidden">
                    <img
                      src={profileImg}
                      alt="img"
                      className="lazy-img w-100"
                    />
                    <Link
                      to="/Team"
                      className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
                    >
                      {" "}
                      <i className="bi bi-arrow-up-right"></i>
                    </Link>
                  </div>
                  <h4 className="fw-500 pt-20 m0">Mr. Ronak N. Bhatt </h4>
                  <div className="fs-6">Director</div>
                </div>
              </div>
              <div
                className="col-lg-2 col-sm-6 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="card-style-four mt-35">
                  <div className="media d-flex align-items-center justify-content-center position-relative overflow-hidden">
                    <img
                      src={profileImg}
                      alt="img"
                      className="lazy-img w-100"
                    />
                    <Link
                      to="/Team"
                      className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
                    >
                      {" "}
                      <i className="bi bi-arrow-up-right"></i>
                    </Link>
                  </div>
                  <h4 className="fw-500 pt-20 m0">Mr. Ashay J. Shah</h4>
                  <div className="fs-6">Director</div>
                </div>
              </div>
              <div
                className="col-lg-2 col-sm-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="card-style-four mt-35">
                  <div className="media d-flex align-items-center justify-content-center position-relative overflow-hidden">
                    <img
                      src={profileImg}
                      data-src="images/media/img_12.jpg"
                      alt="img"
                      className="lazy-img w-100"
                    />
                    <Link
                      to="/Team"
                      className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
                    >
                      {" "}
                      <i className="bi bi-arrow-up-right"></i>
                    </Link>
                  </div>
                  <h4 className="fw-500 pt-20 m0">Mr.x</h4>
                  <div className="fs-6">Senior Officer</div>
                </div>
              </div>
            </div>
            <div className="section-btn sm-mt-40">
              <Link to="/Team" className="btn-five icon-link">
                {" "}
                <span className="text">See all Experts</span>
                <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-arrow-up-right"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisor;
