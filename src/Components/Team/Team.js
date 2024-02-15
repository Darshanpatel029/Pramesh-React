import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import shape from "../../images/shape/shape_26.png";
import Img1 from "../../images/media/img_32.jpg";
import { Link } from "react-router-dom";

const Team = () => {
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
                Our Team
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
                <li>Team</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <div>
              <h3>
                <b>Mr. Ramchandra R. Patel</b>
              </h3>
              <p>(Founder & Managing Director)</p>
            </div>
            <p>
              Mr. Ramchandra Patel, is the Founder & Managing Director of
              Pramesh Wealth Pvt. Ltd. with over two decades of rich experience
              in the Equity, Mutual Fund & Financial Services Field. He is the
              main driving force behind the success of Pramesh Wealth Pvt. Ltd.
              His aspiration to become an entrepreneur led to the genesis of
              Pramesh Wealth Pvt. Ltd. with a vision to place the company as the
              most preferred financial services provider. With his sharp
              business acumen and the entrepreneurial skills, he is one of the
              sharpest young brains behind the strong foundation of the
              organization. Not relying on the continuation of a simple mundane
              experience within the organization, he keeps on challenging his
              risk taking abilities and strives to bring something unique which
              would be beneficial to the clients.The analysis of
            </p>
            <p>
              upcoming market and trading trends has been his core strength. He
              believes in a magnanimously generous investment in infrastructure
              and employee; ultimately benefiting the organization and the
              clients alike.
            </p>
            <p>
              As a Managing Director of the Company his Role & Duties & focus
              areas involved: Formulating and successfully implementing company
              policy. * Directing strategy towards the profitable growth and
              operation of the company.* Developing strategic operating plans
              that reflect the longer-term objectives and priorities established
              by the board.* Putting in place adequate operational planning and
              financial control systems.*Ensuring that the operating objectives
              and standards of performance are not only understood but owned by
              the management and other employees.* Taking remedial action where
              necessary and informing the board of significant changes. *
              Maintaining the operational performance of the company.*
              Monitoring the actions of the functional board
              directors.*Representing the company to HNI and Ultra HNI Clients
              and professional associations. Building and maintaining an
              effective executive team.
            </p>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <div>
              <h3>
                <b>Mr. Ronak N. Bhatt</b>
              </h3>
              <p>(Director)</p>
            </div>
            <p>
              Mr. Ronak Bhatt, is the Founder and Director of Pramesh Wealth
              Pvt. Ltd. with over one decade of rich experience in the Equity
              and Financial Services Field. He is assisting to Managing Director
              in his role & duties and focus areas and ensuring the proper
              implementation of various business policies of the Company and
              review the same from time to time and suggest according to
              changing Business environments. He is also developing overseas
              potential NRI’s Clients.
            </p>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <div>
              <h3>
                <b>Mr. Ashay J. Shah</b>
              </h3>
              <p>(Director)</p>
            </div>
            <p>
              Mr. Ashay J. Shah, holds MBA (Finance) Degree and is Director of
              the Pramesh Wealth Pvt. Ltd. with over one and half decades of
              experience in Mutual Fund, Equity, Stock Broking and other allied
              Financial Products . He is monitoring and handling all branches of
              Pramesh Wealth Pvt. Ltd. He is constantly updated with the
              technology has been his interest. His experience varies from
              leading teams, customer handling, to company operations. With one
              and half decades of involvement in the finance field, handing of
              trading related operations within the organization comes to him
              easily.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
