import React from "react";
import { Link } from "react-router-dom";
import "../Style/Home.css";
import mobileHand from "../../assets/icons/smartphone.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/get-the-app">
          <img
            src={mobileHand}
            alt="mobile in hand icon"
            className="mobile-hand"
          />
          Get the App
        </Link>
        <div className="navbar__menu_container">
          <Link to="/investor-relations" className="link">
            Investor Relations
          </Link>
          <Link to="/add-restaurant" className="link">
            Add restaurant
          </Link>
          <Link>Log in</Link>
          <Link>Sign Up</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
