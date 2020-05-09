import React from "react";
import { Link } from "react-router-dom";
import "./header.style.css";
const Header = () => (
  <>
    <header className="navigation">
      <nav>
        <li>
          <Link to="/" className="home-logo ">
            {" "}
            Home{" "}
          </Link>
        </li>
      </nav>
    </header>
  </>
);

export default Header;
