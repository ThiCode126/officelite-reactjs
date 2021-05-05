import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div className="content-wrapper">
        <nav>
          <Link to="/">
            <img className="logo" src="./assets/shared/logo.svg" alt="logo" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
