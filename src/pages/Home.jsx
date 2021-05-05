import React from "react";
import { Link } from "react-router-dom";
import CountDown from "../Components/CountDown";
import NavBar from "../Components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />

      <section id="started">
        <div className="content-wrapper">
          <div className="in-section">
            <img
              className="illustration-charts"
              src="./assets/home/illustration-charts.svg"
              alt="illustration-charts"
            />
            <div className="info-content">
              <h1 className="title">
                A simple solution to complex tasks is coming soon
              </h1>
              <p className="thirdBody">
                Say goodbye to inefficient juggling of multiple apps, teams, and
                projects. Officelite is the new collaboration platform built
                with an intuitive interface to improve productivity.
              </p>
              <Link to="/signup">
                <button className="first-style">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="price">
        <div className="content-wrapper">
          <div className="in-section">
            <div className="card-price" id="first">
              <div className="wrap-info">
                <div>
                  <h2 className="name">Basic</h2>
                  <h1 className="price">Free</h1>
                  <div className="details secondBody">
                    Up to 5 users for free
                  </div>
                </div>
                <div>
                  <p className="secondBody">Basic document collaboration</p>
                  <p className="secondBody">2 gb storage</p>
                  <p className="secondBody last">Great security and support</p>
                </div>
              </div>
              <Link to="/signup">
                <button className="second-style">Try for Free</button>
              </Link>
            </div>
            <div className="card-price" id="second">
              <div className="wrap-info">
                <div>
                  <h2 className="name">Pro</h2>
                  <h1 className="price">$9.99</h1>
                  <div className="details secondBody">
                    Per user, billed monthly
                  </div>
                </div>
                <div>
                  <p className="secondBody">All essential integrations</p>
                  <p className="secondBody">50 gb storage</p>
                  <p className="secondBody last">More control and insights</p>
                </div>
              </div>
              <Link to="/signup">
                <button className="third-style">Try for Free</button>
              </Link>
            </div>
            <div className="card-price" id="third">
              <div className="wrap-info">
                <div>
                  <h2 className="name">Ultimate</h2>
                  <h1 className="price">$19.99</h1>
                  <div className="details secondBody">
                    Per user, billed monthly
                  </div>
                </div>
                <div>
                  <p className="secondBody">Robust work management</p>
                  <p className="secondBody">100 gb storage</p>
                  <p className="secondBody last">VIP support</p>
                </div>
              </div>
              <Link to="/signup">
                <button className="second-style">Try for Free</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CountDown page="home" />
      <div className="footer-back"></div>
    </>
  );
};

export default Home;
