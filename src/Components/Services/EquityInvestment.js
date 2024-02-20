import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import shape from "../../images/shape/shape_26.png";
import Img1 from "../../images/media/equityInvestment.jpg";
import { Link } from "react-router-dom";

const EquityInvestment = () => {
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
                Services
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
                <li>EquityInvestment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one  lg-mt-80">
          <div className="container">
            <div>
              <img
                src={"https://www.prameshwealth.com/log1/jugnu4.png"}
                alt="img"
              />
              <h2 style={{ fontSize: "42px", fontWeight: "200" }}>
                Equity Investments
              </h2>
            </div>
            <p>
              An equity investment is money that is invested in a company by
              purchasing shares of that company in the stock market. These
              shares are typically traded on a stock exchange.
            </p>
            <div className="d-flex justify-content-end">
              <Link to="/contactUs" className="btn-one tran3s">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one  lg-mt-80">
          <div className="container">
            <div>
              <p>
                Equity investment is buying shares directly from companies or
                other individual investors with the expectation of earning
                dividends or reselling the same when it is profitable. Examples
                of equity investment include equity mutual funds, shares,
                private equity investments, retained earnings, and preferred
                shares.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one  lg-mt-80">
          <div className="container">
            <div>
              <p>
                In reality, the returns and risks are directly proportional to
                each other, which means the higher the risk involved, the higher
                the chances of returns will be. In India, investment options can
                be broadly classified into two categories i.e. financial and
                non-financial assets. We can further divide the financial assets
                into market-linked securities such as mutual funds, live stocks,
                etc. and fixed income products like Bank FDs, Public Provident
                Fund (PPF), Bank RDs, etc. Non-financial assets consist of gold
                investment, real estate, treasury bills, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one  lg-mt-80">
          <div className="container">
            <div>
              <p>
                While choosing the investment plan, it is inevitable to match
                the risk profile of the investor with the related risk of the
                product before investing. There are some investment plans in the
                market which includes high risk but also have the potential to
                gain profitable returns in the long-term as compared to the
                other asset classes. On the other hand, some of the investment
                options include lower risk, but the returns are also low.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one  lg-mt-80">
          <div className="container">
            <div>
              <p>
                By investing in the best investment options in India, you can
                not only achieve your financial goals but can also create a
                financial cushion for the future to live a secure life. This is
                the reason why investors are always in search of top investment
                plans where they can multiply their money as per their risk
                appetite. Further here, we have discussed in detail the top
                investment options in India, that can help the investors to
                achieve their financial goals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one  lg-mt-80">
          <div className="container">
            <div>
              <p>
                Equity funds are practical investments for most people. The
                attributes that make equity funds most suitable for small
                individual investors are the reduction of risk resulting from a
                fund's portfolio diversification and the relatively small amount
                of capital required to acquire shares of an equity fund.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one  lg-mt-80">
          <div className="container">
            <p>
              Examples of equity investment include equity mutual funds, shares,
              private equity investments, retained earnings, and preferred
              shares. An equity investment offers the investor multiple benefits
              like risk spread, easy transfer, profitability, and easy
              monitoring.
            </p>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one  lg-mt-80">
          <div className="container">
            <p>
              List of Top 10 Equity Mutual Funds to Invest in 2022
              <br />
              - Axis Bluechip Fund. <br />
              - Nippon India Growth Fund.
              <br />
              - Axis Midcap Fund. <br />
              - UTI Nifty Index Fund. <br />
              - HDFC Index Nifty 50 fund. <br />
              - Parag Parikh Flexi Cap fund. <br />
              - Canara Robeco Equity Taxsaver fund. <br />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EquityInvestment;
