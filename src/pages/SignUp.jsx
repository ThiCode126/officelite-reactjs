import React from "react";
import CountDown from "../Components/CountDown";
import NavBar from "../Components/NavBar";

const SignUp = () => {
  return (
    <>
      <NavBar />
      <section id="hero">
        <div className="content-wrapper">
          <div className="in-section">
            <h1 className="title">Work smarter. Save time.</h1>
            <p className="thirdBody">
              Easily manage your projects. Get on the list and receive in-app
              perks available only to early subscribers. We are moving into
              final development and getting ready for official launch soon.
            </p>
          </div>
        </div>
      </section>

      <CountDown page="signup" />
    </>
  );
};

export default SignUp;
