import React from "react";
import BannerImg1 from "../images/lazy.png";

const WhyChoose = () => {
  return (
    <>
      <div className="project-details-one position-relative pb-150 lg-pb-80 mt-3">
        <div className="container">
          <div className="feedback-section-one mt-150 lg-mt-80 pb-80">
            <div className="container">
              <div className="position-relative">
                <div className="title-one sm-mb-40">
                  <h2>Why Choose Pramesh</h2>
                  <div className="mt-3">
                    <ul>
                      <li>
                        <b>Client-Centricity:</b> We prioritize the needs and
                        goals of our clients, providing personalized service and
                        building long-term relationships based on trust and
                        reliability.
                      </li>
                      <li>
                        <b>Value Creation: </b>We believe in creating value for
                        our clients by focusing on prudent investments and
                        offering a comprehensive range of investment options
                        that align with their financial objectives.
                      </li>
                      <li>
                        <b> Trust Worthiness : </b>We aim to be a trusted
                        advisor, demonstrating integrity, transparency, and
                        ethical conduct in all our interactions and
                        recommendations
                      </li>
                      <li>
                        <b> Innovative and Latest Technology Focus: </b> We
                        embrace innovation and leverage technology to enhance
                        our services, offering an all-inclusive and holistic
                        approach to personal finance management.
                      </li>
                      <li>
                        <b> Global Perspective:</b> We offer global products and
                        solutions, ensuring our clients have access to a diverse
                        range of opportunities, irrespective of geographical
                        limitations.
                      </li>
                      <li>
                        <b> Expertise and Wisdom: </b> With our combined
                        experience and expertise, we provide sound suggestions
                        and guidance that lead to better possible returns and
                        higher client satisfaction.
                      </li>
                      <li>
                        <b> Reliability and Personalization: </b>We are
                        committed to being a reliable and personalized service
                        provider, tailoring our offerings to meet the unique
                        needs and preferences of our clients.
                      </li>
                    </ul>
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
    </>
  );
};

export default WhyChoose;
