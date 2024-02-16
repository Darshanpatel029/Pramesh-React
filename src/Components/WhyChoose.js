import React from "react";
import BannerImg1 from "../images/lazy.png";

const WhyChoose = () => {
  return (
    <div>
      <div className="project-details-one position-relative pb-150 lg-pb-80 mt-3 mb-4">
        <div className="container">
          <div className="feedback-section-one mt-150 lg-mt-80 pb-80">
            <div className="container">
              <div className="position-relative">
                <div className="title-one sm-mb-40">
                  <h2 style={{ fontSize: "42px", fontWeight: "200" }}>
                    Why Choose Pramesh
                  </h2>
                  <div className="investment-options ">
                    <div className="card p-4 mt-2 col-4 option slide-left-to-right">
                      <h3 className="text-center fw-bold">Client-Centricity</h3>
                      <div>
                        We prioritize the needs and goals of our clients,
                        providing personalized service and building long-term
                        relationships based on trust and reliability.
                      </div>
                    </div>
                    <div className="card p-4 mt-2 col-4 option slide-left-to-right">
                      <h3 className="text-center fw-bold">Value Creation</h3>
                      <div>
                        We believe in creating value for our clients by focusing
                        on prudent investments and offering a comprehensive
                        range of investment options that align with their
                        financial objectives.
                      </div>
                    </div>
                    <div className="card p-4 mt-2 col-4 option slide-left-to-right">
                      <h3 className="text-center fw-bold">Trust Worthiness</h3>
                      <div>
                        We aim to be a trusted advisor, demonstrating integrity,
                        transparency, and ethical conduct in all our
                        interactions and recommendations
                      </div>
                    </div>
                  </div>
                  <div className="investment-options">
                    <div className="card p-4 mt-2 col-4 option slide-right-to-left">
                      <h3 className="text-center fw-bold">Innovative and Latest Technology Focus</h3>
                      <div>
                        We embrace innovation and leverage technology to enhance
                        our services, offering an all-inclusive and holistic
                        approach to personal finance management.
                      </div>
                    </div>
                    <div className="card p-4 mt-2 col-4 option slide-right-to-left">
                      <h3 className="text-center fw-bold">Global Perspective</h3>
                      <div>
                        We offer global products and solutions, ensuring our
                        clients have access to a diverse range of opportunities,
                        irrespective of geographical limitations.
                      </div>
                    </div>
                    <div className="card p-4 mt-2 col-4 option slide-right-to-left">
                      <h3 className="text-center fw-bold">Expertise and Wisdom</h3>
                      <div>
                        With our combined experience and expertise, we provide
                        sound suggestions and guidance that lead to better
                        possible returns and higher client satisfaction.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="icon d-flex align-items-center justify-content-center rounded-circle">
                  <img
                    src={BannerImg1}
                    data-src="images/icon/icon_12.png"
                    alt="img"
                    className="lazy-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
