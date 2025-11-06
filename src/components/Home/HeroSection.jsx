import React from "react";
import { Link } from "react-router-dom";
import "../Style/Home.css";
import Logo from "../../assets/images/heroSectionLogo.png";
import mobileHand from "../../assets/icons/smartphone.png";
import SearchBar from "../../utils/SearchBar/SearchBar";
import css from "../../utils/SearchBar/SearchBar.module.css";
import Navbar from "./Navbar";

function HeroSection() {
  return (
    <section className="hero__section">
      <Navbar />

      <div className="hero__section_container">
        <img src={Logo} alt="Zomato Logo" className="hero__section_logo" />
        <h1 className="hero__section_title">
          Discover the best food & drinks in Hampi-Hospet
        </h1>
        <div className={css.searchbar}>
          <SearchBar />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
