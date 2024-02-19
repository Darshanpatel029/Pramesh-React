import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import shape from "../../images/shape/shape_26.png";
import Img1 from "../../images/media/insurance.jpg";
import { Link } from "react-router-dom";

const Insurance = () => {
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
                Insurance
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
                <li>Insurance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow rounded">
        <div className="text-feature-one  lg-mt-80">
          <div className="container">
            <div>
              <img
                src={"https://www.prameshwealth.com/log1/jugnu5.jpg"}
                alt="img"
              />
              <h2 style={{ fontSize: "42px", fontWeight: "200" }}>Insurance</h2>
            </div>
            <div>
              <p>
                Insurance is a contract, represented by a policy, in which an
                individual or entity receives financial protection or
                reimbursement against losses from an insurance company. The
                company pools clients' risks to make payments more affordable
                for the insured.
              </p>
              <p>
                Insurance is a way to manage your risk. When you buy insurance,
                you purchase protection against unexpected financial losses. The
                insurance company pays you or someone you choose if something
                bad happens to you. If you have no insurance and an accident
                happens, you may be responsible for all related costs.
              </p>
              <p>
                Insurance policies can cover up medical expenses, vehicle
                damage, loss in business or accidents while traveling, etc. Life
                Insurance and General Insurance are the two major types of
                insurance coverage. General Insurance can further be classified
                into sub-categories that clubs in various types of policies.
              </p>
              <p>
                Insurance policies can cover up medical expenses, vehicle
                damage, loss in business or accidents while traveling, etc. Life
                Insurance and General Insurance are the two major types of
                insurance coverage. General Insurance can further be classified
                into sub-categories that clubs in various types of policies.
              </p>
              <div className="d-flex justify-content-end">
                <Link to="/contactUs" className="btn-one tran3s">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow rounded">
        <div className="text-feature-one  lg-mt-80">
          <div className="container">
            <div>
              <h2 style={{ fontSize: "38px", fontWeight: "200" }}>
                Insurance in India can be broadly divided into three categories:
              </h2>
              <p>
                Life insurance. As the name suggests, life insurance is
                insurance on your life.
              </p>
              <p>
                Health insurance. Health insurance is bought to cover medical
                costs for expensive treatments.
              </p>
              <p>
                Car insurance. <br />
                Education Insurance.
                <br />
                Home insurance.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow rounded">
        <div className="text-feature-one  lg-mt-80">
          <div className="container">
            <div>
              <p>
                In the case of the Insured Event, the Insurer shall compensate
                the affected party for the property or health damage for which
                the Insured is liable, i.e. pay the costs of the Insured
                associated with the return of the situation to the previous
                condition.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow rounded">
        <div className="text-feature-one  lg-mt-80">
          <div className="container">
            <div>
              <p>
                Every insurance policy has five parts: declarations, insuring
                agreements, definitions, exclusions and conditions. Many
                policies contain a sixth part: endorsements. Use these sections
                as guideposts in reviewing the policies. Examine each part to
                identify its key provisions and requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow rounded">
        <div className="text-feature-one  lg-mt-80">
          <div className="container">
            <p>
              Final Additional Bonus (FAB) is a one-time additional bonus, which
              is paid along with the maturity amount of participating (with
              profit) policies. FAB is paid in addition to the simple
              reversionary bonus declared and added to the policy account.
            </p>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow rounded">
        <div className="text-feature-one  lg-mt-80">
          <div className="container">
            <p>
              Higher Returns – Unlike traditional insurance policies, investment
              insurance maximizes your earning potential by linking some of your
              investment to stocks and bonds. These can result in bigger funds
              compared to what you hoped to gain with your premium.
            </p>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow rounded">
        <div className="text-feature-one  lg-mt-80">
          <div className="container">
            <p>
              Higher Returns – Unlike traditional insurance policies, investment
              insurance maximizes your earning potential by linking some of your
              investment to stocks and bonds. These can result in bigger funds
              compared to what you hoped to gain with your premium.
            </p>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow rounded">
        <div className="text-feature-one  lg-mt-80">
          <div className="container">
            <p>
              Insurance stocks can make a great addition to any investor's stock
              portfolio. Not only does the insurance business have the potential
              to produce excellent long-term returns, but it's also a business
              that works in strong economies, during recessions, and anytime in
              between.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Insurance;
