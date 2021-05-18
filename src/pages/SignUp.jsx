import React, { useState } from "react";
import { Link } from "react-router-dom";
import CountDown from "../Components/CountDown";
import NavBar from "../Components/NavBar";
import validator from "validator";

const SignUp = () => {
  const packages = [
    {
      id: 0,
      name: "Basic Pack",
      price: "Free",
    },
    {
      id: 1,
      name: "Pro Pack",
      price: "$9.99",
    },
    {
      id: 2,
      name: "Ultimate Pack",
      price: "$19.99",
    },
  ];

  const [form, setForm] = useState({
    name: "",
    email: "",
    package_id: 0,
    phone: "",
    company: "",
  });
  const [isSelected, setIsSelected] = useState(false);
  const [isMail, setIsMail] = useState(true);

  const toggleSelected = () => {
    setIsSelected(!isSelected);
  };

  const handleSelect = (id) => {
    setForm({ ...form, package_id: id });
    setIsSelected(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      console.log("mail");
      setIsMail(validator.isEmail(value));
    }
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert("Formulaire validé");
  };

  return (
    <main id="signup-page">
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

      <section id="form">
        <div className="content-wrapper">
          <div className="in-section">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="secondBody"
              />
              <input
                type="text"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={`secondBody ${isMail ? "" : "error"}`}
              />
              <div
                id="package"
                className={`dropdown secondBody ${
                  isSelected ? "active" : "not-active"
                }`}
              >
                <div className="select" onClick={toggleSelected}>
                  <span className="boldBody">
                    {packages[form.package_id].name}
                    <span className="price">
                      {packages[form.package_id].price}
                    </span>
                  </span>
                  <img
                    src="./assets/sign-up/icon-arrow-down.svg"
                    id="arrow"
                    alt="icon arrow"
                  />
                </div>

                <ul className="dropdown-menu">
                  {packages.map((pack) => {
                    return (
                      <li key={pack.id} onClick={() => handleSelect(pack.id)}>
                        <span className="boldBody">
                          {packages[pack.id].name}
                          <span className="price">
                            {packages[pack.id].price}
                          </span>
                        </span>
                        {pack.id === form.package_id ? (
                          <img
                            src="./assets/sign-up/icon-check.svg"
                            alt="icon check"
                          />
                        ) : (
                          ""
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <input
                type="text"
                name="phone"
                id="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="secondBody"
              />
              <input
                type="text"
                name="company"
                id="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company"
                className="secondBody"
              />
              <Link to="/">
                <div className="button first-style">Get on the list</div>
              </Link>
            </form>
          </div>
        </div>
      </section>

      <div id="footer-sign-up" className="footer-back"></div>
    </main>
  );
};

export default SignUp;
