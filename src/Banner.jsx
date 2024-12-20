import React from "react";
import "./banner.css";

function Banner() {
  return (
    <>
      <div id="banner">
        <div className="container">
          <div className="banner">
            <h1 className="banner_text">
              We exist since 1975 on the oil and gas industry.
            </h1>
            <button className="btn btn-danger">LEARN MORE</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
