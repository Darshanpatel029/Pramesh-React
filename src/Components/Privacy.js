import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import shape from "../images/shape/shape_26.png";
import Img1 from "../images/media/img_32.jpg";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="main-page-wrapper">
      <Navbar />
      <div
        className="inner-banner-one pt-225 lg-pt-200 md-pt-150 pb-70 md-pb-70 position-relative"
        style={{ backgroundImage: `url(${Img1})` }}
      >
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-heading d-inline-block position-relative me-xxl-4 me-lg-5">
                Privacy Policy
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
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <div>
              <h2 style={{ fontSize: "42px", fontWeight: "200" }}>
                PRIVACY POLICY
              </h2>
            </div>
            <p>
              Welcome to the website/mobile application of the Pramesh Wealth
              Management Private Limited (referred as PWMPL). We understand that
              our customers and website/mobile application visitors are
              concerned about the privacy of information. At PWMPL, we are
              strongly committed to protect the personal and financial
              information that you submit to us and would endeavour to protect
              it from unauthorized use.
            </p>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <div>
              <h2 style={{ fontSize: "42px", fontWeight: "200" }}>
                Collection of Information
              </h2>
            </div>
            <p>
              In the course of using this website/mobile application or availing
              the products and services, PWMPL may become privy to the personal
              information of the Users of the website/mobile application,
              including information that is of a confidential & sensitive
              nature. We may collect information about you from several sources.
              You may provide information as part of the application or
              enrollment process or our landing pages during online campaigns..
              We also develop and retain information about you based on our
              transactions and experience with you. Finally, we obtain
              information about you through Internet technology, including our
              website/mobile application. For the purposes of this document, the
              term Users means any person accessing or using the website
              www.prameshwealth.com or mobile application or any of its products
              or services or features. PWMPL is strongly committed to protecting
              the privacy of the Users and has taken all necessary and
              reasonable measures to protect the confidentiality of the User
              information and its transmission through the world wide web and it
              shall not be held liable for disclosure of the confidential
              information when in accordance with this Privacy Commitment or in
              terms of the agreements, if any, with the Users.
            </p>
            <p>
              Therefore, you should be careful with usage of the username and
              password by maintaining confidentiality and ensure that you do not
              knowingly or accidentally share, provide and facilitate
              unauthorized use of it.
            </p>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <div>
              <h2 style={{ fontSize: "42px", fontWeight: "200" }}>
                Use and disclosure of Personal & Financial Information
              </h2>
            </div>
            <p>
              We will protect your personal information against unauthorized
              use, dissemination or publication in the same manner in which we
              would protect our confidential information of like nature. However
              under certain conditions we may share this information. We may use
              the personal information to improve our services to you and to
              keep you updated about our new products or other information that
              may be of interest to you.
            </p>
            <p>
              We may share information in the course of normal business
              operations, such as providing services you have subscribed for,
              and any activity related to these services such as collection of
              fee. It may become necessary for PWMPL to disclose your personal
              information to its agents and contractors in the course of normal
              business operations for the above referred purpose. However these
              parties would be required to use the information obtained from
              PWMPL for such purposes exclusively. PWMPL will endeavour to take
              all reasonable steps to ensure that the confidentiality of your
              information is maintained by imposing strict confidentiality
              standards on all the third parties to whom it discloses such
              information.
            </p>
            <p>
              The User authorises PWMPL to exchange, share, part with all
              information related to the details and transaction history of the
              Users to its Affiliates / Subsidiaries / banks / financial
              institutions / credit bureaus / agencies/participation in any
              telecommunication or electronic clearing network as may be
              required by law, customary practice, credit reporting, statistical
              analysis and credit scoring, verification or risk management and
              shall not hold PWMPL liable for use or disclosure of this
              information.
            </p>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <div>
              <h2 style={{ fontSize: "42px", fontWeight: "200" }}>
                Amendments
              </h2>
            </div>
            <p>
              Due to changes in legislation or enhancements to functionality and
              content on the website/mobile application, we may make changes to
              privacy policy (without being obliged to do so) and would reflect
              those changes in this privacy policy statement. Hence you are
              requested to go through the privacy policy statement on a regular
              basis.
            </p>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <div>
              <h2 style={{ fontSize: "42px", fontWeight: "200" }}>
                Non-Binding
              </h2>
            </div>
            <p>
              Please note that this privacy policy does not create any
              contractual or other legal rights in or on behalf of any party,
              nor is it intended to do so.
            </p>
            <p>
              At PWMPL, We only do what's right for you and will at all time
              strive to ensure your privacy.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
