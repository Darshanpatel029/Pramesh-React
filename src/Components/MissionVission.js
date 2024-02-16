import React from "react";
import BannerImg1 from "../images/lazy.png";

const MissionVission = () => {
  return (
    <div className="main-page-wrapper">
      <div
        className="block-feature-two mt-80"
        style={{ backgroundColor: "#ebf3ee" }}
      >
        <div className="container">
          <div className="wrapper">
            <div className="row align-items-center">
              <div className="col-md-4">
                <div className="card-style-three pt-45 md-pt-30 pb-35 sm-pb-30">
                  <img
                    src={BannerImg1}
                    alt="img"
                    data-src="images/icon/icon_10.png"
                    className="lazy-img icon"
                  />
                  <h4 className="fw-bold mt-40 sm-mt-20 mb-20">Our Mission</h4>
                  <p>
                    To help those who are at the bottom of the pyramid. To work
                    with our, dedication and innovation to achieve excellence in
                    service, quality, reliability, safety and customer care as
                    the ultimate goal. To earn the trust and confidence of all
                    stakeholders, exceeding their expectations and making the
                    Company a respected household name.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="border-line h-100 ps-lg-5 pe-lg-5 ps-md-3 pe-md-3">
                  <div className="card-style-three pt-45 md-pt-30 pb-35 sm-pb-30">
                    <img
                      src={BannerImg1}
                      data-src="images/icon/icon_11.png"
                      alt="img"
                      className="lazy-img icon"
                    />
                    <h4 className="fw-bold mt-40 sm-mt-20 mb-20">
                      Our company vision.
                    </h4>
                    <p>
                      To attain globally best standards and become a
                      world-className financial services enterprise – guided by
                      its purpose to move towards a greater degree of
                      sophistication and maturity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="ps-lg-5 sm-pb-30 sm-pt-30">
                  <div className="numb fw-500">
                    <span className="counter">13</span>+
                  </div>
                  <p className="m0">
                    Years Experience <br />
                    with proud.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVission;
