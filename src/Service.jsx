import React from "react";
import "./service.css";

function Service() {
  return (
    <>
      <div id="service">
        <div className="items">
          <div className="service_text">
            <div className="text">
              <h2>Our Services</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
          <div className="serviceImgOne">
            <div className="service_item">
              <h3>Modern natural oil and gas refineries.</h3>
              <button className="serviceBtn">Learn More</button>
            </div>
          </div>
        </div>
        <div className="items">
          <div className="serviceImgOne">
            <div className="service_item">
              <h3>Modern natural oil and gas refineries.</h3>
              <button className="serviceBtn">Learn More</button>
            </div>
          </div>
          <div className="serviceImgOne">
            <div className="service_item">
              <h3>Modern natural oil and gas refineries.</h3>
              <button className="serviceBtn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
