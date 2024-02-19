import React from "react";
import Point1 from "../images/Banner/point1.png";
import Point2 from "../images/Banner/point2.png";
import Point3 from "../images/Banner/point3.png";

const BannerTwo = () => {
  return (
    <div className="main-page-wrapper">
      <div className="d-flex justify-content-center">
        <div className="BannerThreeMain">
          <div className="container BannerThreeWrapper">
            <div className="row p-4">
              <div className="col-lg-4 wow fadeInUp">
                <div className="card-style-one d-flex w-100">
                  <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                    <img src={Point1} alt="img" className="lazy-img" />
                  </div>
                  <div className="text p-2">
                    <h4 style={{ fontWeight: 400 }}>
                      Hassle Free demat and trading account Opening
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp">
                <div className="card-style-one d-flex w-100">
                  <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                    <img src={Point2} alt="img" className="lazy-img" />
                  </div>
                  <div className="text p-2">
                    <h4 style={{ fontWeight: 400 }}>
                      Unique trading experience with latest technology
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp">
                <div className="card-style-one d-flex w-100">
                  <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                    <img src={Point3} alt="img" className="lazy-img" />
                  </div>
                  <div className="text p-2">
                    <h4 style={{ fontWeight: 400 }}>
                      360 degree fundamental & technical analysis
                    </h4>
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

export default BannerTwo;
