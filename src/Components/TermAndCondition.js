import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import shape from "../images/shape/shape_26.png";
import Img1 from "../images/media/img_32.jpg";
import { Link } from "react-router-dom";

const TermAndCondition = () => {
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
                T&C
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
                <li>T&C</li>
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
                Terms & Conditions
              </h2>
            </div>
            <p>
              Welcome to our website. If you continue to browse and use this
              website, you are agreeing to comply with and be bound by the
              following terms and conditions of use, which together with our
              ‘Privacy Policy’, govern “Pramesh Wealth Pvt. Ltd”. relationship
              with you. The term “Pramesh Wealth Pvt. Ltd”. (or “us”/“we”/”our”)
              refers to the owner of the website. The term “you” refers to the
              user or viewer of our website.
            </p>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <div>
              <h2 style={{ fontSize: "42px", fontWeight: "200" }}>
                The use of this website is subject to the following terms
              </h2>
            </div>
            <p>
              You well understand and accept that “Pramesh Wealth Pvt. Ltd”.
              maintains the website – “Pramesh Wealth Pvt. Ltd”. or related
              websites (referred to as “site” or “website” on this page) to
              provide visitors with information about us, our services and
              products, and to enable visitors to avail our services. You also
              accept that visitors to the site are required to read the below
              terms, and the use of the site constitutes your acceptance and
              agreement to be bound by such terms. You will also be bound by
              changes therein to the terms from time-to-time as communicated and
              made available on the website.
            </p>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <p>
              You are well aware and accept that all information, content,
              materials, products (including, but not limited to text, content,
              photographs, graphics, video and audio content) on the website is
              protected by copyright in favour of “Pramesh Wealth Pvt. Ltd.”
              under the applicable copyright laws and the general intellectual
              property law.
            </p>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <p>
              You understand and accept that all information submitted by you on
              the site shall be deemed the property of “Pramesh Wealth Pvt.
              Ltd”., and “Pramesh Wealth Pvt. Ltd”. shall be free to use any
              ideas, concepts, know-how or techniques provided by you in any
              manner whatsoever. On initiating contact through the site, you
              agree to being contacted by “Pramesh Wealth Pvt. Ltd”., or any
              other entities with whom “Pramesh Wealth Pvt. Ltd”. has entered
              into an arrangement, via email, phone call, SMS or any other
              means. You agree that you shall not copy, reproduce, sell,
              redistribute, publish, enter into a database, display, perform,
              modify, transmit, license, create derivatives from, transfer, or
              in any way exploit, any part of any information, content,
              materials, services available on or through the site, except that
              which you may download for your own personal, non-commercial use.
            </p>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <p>
              You agree that you shall not use “Pramesh Wealth Pvt. Ltd.’s
              website for any purpose that is unlawful, or prohibited by these
              terms. You also agree you will not use the site in any manner that
              could damage, disable or impair the website, or interfere with any
              other party’s use, or enjoyment of the website.
            </p>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <p>
              You acknowledge that the software and hardware underlying the
              site, as well as other Internet-related software required for
              accessing the website, are the legal property of the respective
              vendors. The permission given by “Pramesh Wealth Pvt. Ltd”. to
              access the website will not convey any proprietary or ownership
              rights in the above software/hardware. You agree that you shall
              not attempt to modify, translate, disassemble, decompile, or
              reverse engineer the software/ hardware underlying the website, or
              create any derivative product based on the software/hardware.
            </p>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <p>
              You understand and accept that not all products and services
              offered on this website are available in all geographic areas, and
              you may not be eligible for all the products or services offered
              by “Pramesh Wealth Pvt. Ltd”. on the site. “Pramesh Wealth Pvt.
              Ltd”. reserves the right to determine the availability and
              eligibility for any product or service.
            </p>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <p>
              You fully understand and accept that “Pramesh Wealth Pvt. Ltd”. is
              not responsible for the availability of content, or other services
              on third-party sites linked from the website. You are aware that
              the access of hyperlinks to other internet sites are at your own
              risk, and the content, accuracy, opinions expressed, and other
              links provided by these sites are not verified, monitored or
              endorsed by “Pramesh Wealth Pvt. Ltd”. in any way. “Pramesh Wealth
              Pvt. Ltd”. does not make any warranties, and expressly disclaims
              all warranties, express or implied, including without limitation,
              those of merchantability and fitness for a particular purpose,
              title or non-infringement with respect to any information or
              services or products that are available or advertised or sold
              through these third-party websites.
            </p>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <p>
              “Pramesh Wealth Pvt. Ltd”. shall not be liable if any transaction
              does not fructify, or may not be completed, or for any failure on
              the part of “Pramesh Wealth Pvt. Ltd”. to perform any of its
              obligations under these terms and conditions, or those applicable
              specifically to its services/facilities if performance is
              prevented, hindered or delayed by a Force Majeure event (defined
              below). In such a case, its obligations shall be suspended for so
              long as the Force Majeure event continues. “Force Majeure Event”
              means any event due to any cause beyond the reasonable control of
              “Pramesh Wealth Pvt. Ltd”., including and without limitations the
              unavailability of any communication systems, breach, or virus in
              the processes or payment or delivery mechanism, sabotage, fire,
              flood, explosion, acts of God, civil commotions, strikes or
              industrial action of any kind, riots, insurrection, war, acts of
              the government, computer hacking, unauthorized access to computer
              data and storage devices, computer crashes, malfunctioning in the
              computer terminal, or the systems getting affected by any
              malicious, destructive or corrupting code or programme, mechanical
              or technical errors/failures or power shutdown, faults or failures
              in telecommunication, etc.
            </p>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <p>
              You understand and accept that “Pramesh Wealth Pvt. Ltd”. has the
              absolute discretion to amend or supplement any of the terms at any
              time, and will give a prior notice of 30 days for such changes.
              The changed terms and conditions shall be communicated to you on
              the website, and by other acceptable modes of communication. By
              using “Pramesh Wealth Pvt. Ltd.’s” services, you shall be deemed
              to have accepted the changed terms and conditions.
            </p>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <p>
              You accept that the Courts in Vadodara alone shall have exclusive
              jurisdiction as regards to any claims or matters arising out of
              dealings with “Pramesh Wealth Pvt. Ltd”. All disputes will be
              governed by the laws of India. For any query or information,
              please do contact us.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermAndCondition;
