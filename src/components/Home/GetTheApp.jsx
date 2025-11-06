import React, { useState } from "react";
import Footer from "../Footer/Footer";
import mobileBanner from "../../assets/images/mobileBanner.png";
import appleStore from "../../assets/images/appleStore.png";
import zomatoLogo from "../../assets/images/logo.png";
import playStore from "../../assets/images/playStore.png";
import "../Style/Home.css";

const GetTheApp = () => {
  const [downloadOption, setDownloadOption] = useState("email");

  const handleRadioChange = (option) => {
    setDownloadOption(option);
  };

  const handleShareLink = () => {};

  return (
    <>
      <section className="container get__the_app">
        <div className="semiContainer">
          <div className="left">
            <img src={mobileBanner} alt="mobile banner" />
          </div>
          <div className="right">
            <h1>Get the Zomato App</h1>
            <p>We will send you a link, open it and download on your phone</p>
            <div className="radio__button_container">
              <div>
                <input
                  type="radio"
                  name="download_app"
                  id="email"
                  checked={downloadOption === "email"}
                  onChange={() => handleRadioChange("email")}
                />
                <label htmlFor="email" style={{ fontSize: "14px" }}>
                  Email
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="download_app"
                  id="phone"
                  checked={downloadOption === "phone"}
                  onChange={() => handleRadioChange("phone")}
                />
                <label htmlFor="phone" style={{ fontSize: "14px" }}>
                  Phone
                </label>
              </div>
            </div>
            <div className="input_container">
              <input
                type={downloadOption === "email" ? "email" : "tel"}
                placeholder={downloadOption === "email" ? "Email" : "Phone"}
              />
              <button onClick={handleShareLink}>Share App Link</button>
            </div>
            <div className="download__app_container">
              <h5>Download App From</h5>
              <div>
                <img src={appleStore} alt="apple store" />
                <img src={playStore} alt="play store" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GetTheApp;
