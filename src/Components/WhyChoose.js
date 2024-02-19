import React from "react";

const WhyChoose = () => {
  return (
    <div className="main-page-wrapper">
      <div className="team-section-one mt-100 lg-mt-80">
        <div className="container">
          <div className="position-relative">
            <div className="title-one mb-40 lg-mb-20 wow fadeInUp">
              <h2 style={{ fontSize: "42px", fontWeight: "200" }}>
                Why Choose Pramesh
              </h2>
            </div>
            <div className="row">
              <div className="d-flex flex-wrap gap-4 justify-content-center">
                <div className="col-lg-3 col-sm-6 wow fadeInUp choose slide-left-to-right">
                  <div className="card-style-four mt-35">
                    <h3 className="text-center fw-bold">Client-Centricity</h3>
                    <div>
                      We prioritize the needs and goals of our clients,
                      providing personalized service and building long-term
                      relationships based on trust and reliability.
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp choose slide-left-to-right">
                  <div className="card-style-four mt-35">
                    <h3 className="text-center fw-bold">Value Creation</h3>
                    <div>
                      We believe in creating value for our clients by focusing
                      on prudent investments and offering a comprehensive range
                      of investment options that align with their financial
                      objectives.
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp choose slide-left-to-right">
                  <div className="card-style-four mt-35">
                    <h3 className="text-center fw-bold">Trust Worthiness</h3>
                    <div>
                      We aim to be a trusted advisor, demonstrating integrity,
                      transparency, and ethical conduct in all our interactions
                      and recommendations.
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap gap-4 justify-content-center">
                <div className="col-lg-3 col-sm-6 wow fadeInUp choose slide-right-to-left">
                  <div className="card-style-four mt-35">
                    <h3 className="text-center fw-bold">
                      Innovative and Latest Technology Focus
                    </h3>
                    <div>
                      We embrace innovation and leverage technology to enhance
                      our services, offering an all-inclusive and holistic
                      approach to personal finance management.
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp choose slide-right-to-left">
                  <div className="card-style-four mt-35">
                    <h3 className="text-center fw-bold">Global Perspective</h3>
                    <div>
                      We offer global products and solutions, ensuring our
                      clients have access to a diverse range of opportunities,
                      irrespective of geographical limitations.
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp choose slide-right-to-left">
                  <div className="card-style-four mt-35">
                    <h3 className="text-center fw-bold">
                      Expertise and Wisdom
                    </h3>
                    <div>
                      With our combined experience and expertise, we provide
                      sound suggestions and guidance that lead to better
                      possible returns and higher client satisfaction.
                    </div>
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

export default WhyChoose;
