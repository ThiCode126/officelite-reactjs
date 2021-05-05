import React from "react";
import { Link } from "react-router-dom";

const CountDown = ({ page }) => {
  return (
    <section id="countdown" className={page}>
      <div className="content-wrapper">
        <div className="in-section">
          <h3>
            Coming <span className="date">4 Nov 2020</span>
          </h3>
          <div className="time-wrap">
            <div className="time-container">
              <div className="card">
                <h4>47</h4>
                <span className="small-txt">days</span>
              </div>
              <div className="card">
                <h4>07</h4>
                <span className="small-txt">hours</span>
              </div>
              <div className="card">
                <h4>56</h4>
                <span className="small-txt">min</span>
              </div>
              <div className="card">
                <h4>14</h4>
                <span className="small-txt">sec</span>
              </div>
            </div>

            <Link to="/signup">
              <button className="first-style">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountDown;
