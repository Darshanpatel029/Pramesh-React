import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import shape from "../../images/shape/shape_26.png";
import Img1 from "../../images/media/mutualFund.jpg";
import { Link } from "react-router-dom";

const MutualFund = () => {
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
                MutualFund
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
                <li>MutualFund</li>
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
                Mutual Funds
              </h2>
            </div>
            <p>
              A mutual fund is an investment vehicle where many investors pool
              their money to earn returns on their capital over a period. This
              corpus of funds is managed by an investment professional known as
              a fund manager or portfolio manager. It is his/her job to invest
              the corpus in different securities such as bonds, stocks, gold and
              other assets and seek to provide potential returns. The gains (or
              losses) on the investment are shared collectively by the investors
              in proportion to their contribution to the fund.
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
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <div>
              <h2 style={{ fontSize: "42px", fontWeight: "200" }}>
                Why invest in mutual funds ?
              </h2>
              <p>
                There are many benefits of investing in mutual funds. Here are
                some important ones - <b> Professional expertise</b>
              </p>
              <p>
                Consider a situation where you purchase a new car. But the catch
                here is that you don’t know how to drive. Now, you have two
                options:
              </p>
              <ol>
                <li>you can learn how to drive</li>
                <li>you can hire a full-time driver</li>
              </ol>
              <p>
                In the first scenario, you would have to take driving lessons,
                pass the driving test and obtain a license. But if you don’t
                have the time for driving classes, it is better to opt for a
                driver. Same is the case with investments. Investing in
                financial markets requires a certain amount of skill. You need
                to research the market and analyse the best options available.
                You need knowledge on matters such as macro economy, sectors,
                company financials, from an asset className perspective. This
                requires a significant amount of time and commitment from you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <div>
              <p>
                But if you don’t have the skill or the time to delve deep into
                the market, investing in mutual funds can be an excellent
                alternative. Here, a professional fund manager takes care of
                your investments and strives hard to provide reasonable returns.
                And just as you would pay the driver for his chauffeuring
                services, you have to pay specific fees for the professional
                management of your mutual fund investments. Returns
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <div>
              <p>
                One of the biggest mutual fund benefits is that you have the
                opportunity to earn potentially higher returns than traditional
                investment options offering assured returns. This is because the
                returns on mutual funds are linked to the market’s performance.
                So, if the market is on a bull run and it does exceedingly well,
                the impact would be reflected in the value of your fund.
                However, a poor performance in the market could negatively
                impact your investments. Unlike traditional investments ,mutual
                funds do not assure capital protection. So do your research and
                invest in funds that can help you meet your financial goals at
                the right time in life. Diversification
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <div>
              <p>
                You may have heard the saying: Don’t put all your eggs in one
                basket. This is a famous mantra to remember when you invest your
                money. When you invest only in a single asset, you could risk a
                loss if the market crashes. However, you can avoid this problem
                by investing in different asset classes and diversifying your
                portfolio. If you were investing in stocks and had to diversify,
                you would have to select at least ten stocks carefully from
                different sectors. This can be a lengthy, time-consuming
                process. But when you invest in mutual funds, you achieve
                diversification instantly. For instance, if you invest in a
                mutual fund that tracks the BSE Sensex, you would get access to
                as many as 30 stocks across sectors in a single fund. This could
                reduce your risk to a large extent. Tax benefits
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-page-wrapper container card rounded shadow-sm mt-4 p-4 mb-4 bx-shadow  rounded">
        <div className="text-feature-one lg-mt-80">
          <div className="container">
            <div>
              <p>
                Mutual fund investors can claim a tax deduction of up to Rs. 1.5
                lakh by investing in Equity Linked Savings Schemes (ELSS). This
                tax benefit is eligible under Section 80C of the Income Tax Act.
                ELSS funds come with a lock-in period of 3 years. Hence, if you
                invest in ELSS funds, you can only withdraw your money after the
                lock-in period ends. Another tax benefit is indexation benefit
                available on debt funds. In case of traditional products, all
                interest earned is subject to tax. However, in case of debt
                mutual funds, only the returns earned over and above the
                inflation rate (embedded in cost inflation index [CII] ) are
                subject to tax. This could also help investors earn higher post
                tax returns.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MutualFund;
