import React, { useState } from "react";
import { Link } from "react-router-dom";

import mobileHand from "../../assets/icons/smartphone.png";
import menuBar from "../../assets/icons/menu.png";

import css from "../Style/NavigationBar.module.css";

let NavigationBar = ({ setToggleMenu, page }) => {
  return (
    <div className={css.navbar}>
      <img
        className={css.menuBar}
        src={menuBar}
        alt="menu bar"
        onClick={() => setToggleMenu((val) => !val)}
      />
      <div className={css.navbarInner}>
        <div className={css.leftSide}>
          <img src={mobileHand} alt="mobile in hand icon" className={css.img} />
          <Link to="/get-the-app" className={css.appTxt}>
            Get The App
          </Link>
        </div>
        <div className={css.rightSide}>
          {page !== "add-restaurant" ? (
            <Link to="/add-restaurant" className={css.menuItem}>
              Add restaurant
            </Link>
          ) : (
            ""
          )}
          {/* Other menu items */}
          <div
            className={css.menuItem}
            onClick={() => console.log("Sign in clicked")}
          >
            Sign in
          </div>
          <div
            className={css.menuItem}
            onClick={() => console.log("Sign up clicked")}
          >
            Sign up
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
