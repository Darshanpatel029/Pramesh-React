import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import shape from "../../images/shape/shape_26.png";
import BannerImg1 from "../../images/lazy.png";
import Img1 from "../../images/media/contactUs.jpg";
import { Link } from "react-router-dom";

const ContactUs = () => {
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
                Contact Us
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
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us-section pt-150 lg-pt-80">
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-12 m-auto">
                <div className="row">
                  <div className="col-md-4">
                    <div className="address-block-one text-center mb-40 wow fadeInUp">
                      <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
                        <img src={BannerImg1} alt="img" className="lazy-img" />
                      </div>
                      <h5 className="title">Our Address</h5>
                      <p>
                        Pramesh Wealth Pvt. Ltd. “Pramesh House” 8, Vedant
                        Bunglow, <br />
                        Main Kalali road, Kalali, Vadodara- 390012
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="address-block-one text-center mb-40 wow fadeInUp">
                      <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
                        <img src={BannerImg1} alt="img" className="lazy-img" />
                      </div>
                      <h5 className="title">Contact Info</h5>
                      <p>
                        Open a chat or give us call at <br />
                        <a
                          href="tel:+91-8980027229 "
                          className="call text-lg fw-500"
                        >
                          +91-8980027229
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="address-block-one text-center mb-40 wow fadeInUp">
                      <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
                        <img src={BannerImg1} alt="img" className="lazy-img" />
                      </div>
                      <h5 className="title">Live Support</h5>
                      <p>
                        live chat service <br />
                        <Link className="webaddress">
                          www.prameshwealth.com
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-wrapper light-bg mt-80 lg-mt-40 mb-4">
              <div className="row">
                <div className="col-lg-5">
                  <div className="d-flex flex-column flex-lg-column-reverse">
                    <div className="row">
                      <div className="col-md-8 col-6 me-auto ms-auto">
                        <img
                          src={BannerImg1}
                          alt="img"
                          className="lazy-img me-auto ms-auto"
                        />
                      </div>
                    </div>
                    <div className="title-one text-center text-lg-start md-mt-20 md-mb-30">
                      <h2 style={{ fontSize: "42px", fontWeight: "200" }}>
                        Have inquiries? Reach out via message
                      </h2>
                      <div className="map-banner lg-mt-80">
                        <div className="gmap_canvas h-100 w-100">
                          <iframe
                            className="gmap_iframe h-100 w-100"
                            src={
                              "https://maps.google.com/maps?q=pramesh%20wealth&t=&z=16&ie=UTF8&iwloc=&output=embed"
                            }
                            title="Google Maps"
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="form-style-one ps-xl-5">
                    <form
                      action="https://html.creativegigstf.com/babun/babun/inc/contact.php"
                      id="contact-form"
                      data-toggle="validator"
                    >
                      <div className="messages"></div>
                      <div className="row controls">
                        <div className="col-12">
                          <div className="input-group-meta form-group mb-30">
                            <label for>Name*</label>
                            <input
                              type="text"
                              placeholder="Your Name*"
                              name="name"
                              required="required"
                              data-error="Name is required."
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-group-meta form-group mb-40">
                            <label for>Email*</label>
                            <input
                              type="email"
                              placeholder="Email Address*"
                              name="email"
                              required="required"
                              data-error="Valid email is required."
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-group-meta form-group mb-40">
                            <label for>Phone*</label>
                            <input
                              type="tel"
                              placeholder="Phone Number*"
                              name="phone"
                              required="required"
                              data-error="Valid phone is required."
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-group-meta form-group mb-35">
                            <textarea
                              placeholder="Your message*"
                              name="message"
                              required="required"
                              data-error="Please,leave us a message."
                            ></textarea>
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-12">
                          <button className="btn-four tran3s w-100 d-block">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="upper-wrapper mb-110 lg-mb-80 mt-4">
              <div class="text-center m-4 p-2">
                <h2 style={{ fontSize: "42px", fontWeight: "200" }}>
                  Our Branches
                </h2>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-lg-4 wow fadeInUp">
                    <div class="card-style-one d-flex w-100 mb-35">
                      <div class="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                        <img src={BannerImg1} alt="" class="lazy-img" />
                      </div>
                      <div class="text ps-4">
                        <h4 class="fw-bold">AKOTA</h4>
                        <p class="pe-xl-4">
                          F-13, Om park Society Opp. Kalash Circle, Near White
                          Potato restaurant, Akota, Vadodara -390012
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="card-style-one d-flex w-100 mb-35">
                      <div class="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                        <img src={BannerImg1} alt="" class="lazy-img" />
                      </div>
                      <div class="text ps-4">
                        <h4 class="fw-bold">MANJALPUR</h4>
                        <p class="pe-xl-4">
                          112-Ronak Plaza, Nr. Tulshidham Char Rasta, Manjalpur
                          , Vadodara-390011
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="card-style-one d-flex w-100 mb-35">
                      <div class="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                        <img src={BannerImg1} alt="" class="lazy-img" />
                      </div>
                      <div class="text ps-4">
                        <h4 class="fw-bold">GANGOTRI</h4>
                        <p class="pe-xl-4">
                          5, swastik apartment, Near Gangotri Apartment, R V
                          desai road, Vadodara – 390001
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="card-style-one d-flex w-100 mb-35">
                      <div class="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                        <img src={BannerImg1} alt="" class="lazy-img" />
                      </div>
                      <div class="text ps-4">
                        <h4 class="fw-bold">WAGHODIA ROAD</h4>
                        <p class="pe-xl-4">
                          FF-D-6 Gajanan park Co-op Hsg Soc., Opp Indrapuri
                          Atithi Gruh, Waghodia road, Vadodara -390019
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="card-style-one d-flex w-100 mb-35">
                      <div class="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                        <img src={BannerImg1} alt="" class="lazy-img" />
                      </div>
                      <div class="text ps-4">
                        <h4 class="fw-bold">BHARUCH</h4>
                        <p class="pe-xl-4">
                          130,nexus business hub, zadeshwar road,bharuch-392001
                        </p>
                      </div>
                    </div>
                  </div>
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

export default ContactUs;
