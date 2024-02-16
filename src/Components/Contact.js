import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="main-page-wrapper">
      <div className="fancy-banner-two mt-150 lg-mt-80 mb-150 lg-mb-60">
        <div className="container">
          <div className="text-center wow fadeInUp">
            <div className="row">
              <div className="col-lg-8 m-auto">
                <div className="title-one">
                  <h2 style={{ fontSize: "42px", fontWeight: "200" }}>
                    Want to chat? Feel free to contact our team.
                  </h2>
                </div>
                <p className="text-lg mt-40 lg-mt-30 mb-30">
                  Contact our friendly team for quick and helpful answers.
                </p>
                <div className="d-inline-flex flex-wrap justify-content-center">
                  <Link to="/contactUs" className="btn-six mt-10 ms-2">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
