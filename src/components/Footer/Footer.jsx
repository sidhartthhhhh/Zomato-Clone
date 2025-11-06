import React from "react";
import { Link } from "react-router-dom";
import Gstore from "../../assets/icons/playstore.png";
import Appstore from "../../assets/icons/appstore.png";
import Logo from "../../assets/images/zomatoLogo.avif";
import Facebook from "../../assets/images/facebook.png";
import Twitter from "../../assets/images/twitter.png";
import Instagram from "../../assets/images/instagram.png";
import Linkedin from "../../assets/images/linkedin.png";
import Youtube from "../../assets/images/youtube.png";
import footerCss from "../Style/Footer.module.css";

const Footer = () => {
  return (
    <div className={footerCss.footer}>
      <div className={footerCss.innerFooter}>
        <div className={footerCss.sec1}>
          <div className={footerCss.logoBox}>
            <img
              src={Logo}
              alt="Zomato Logo"
              className={footerCss.hero__section_logo}
            />
          </div>
          <div className={footerCss.filters}>
            <div className="section1__buttonContainer">
              <button>
                <img
                  src="https://flagcdn.com/w40/in.png"
                  alt="Indian Flag"
                  style={{ width: "19px" }}
                />
                India
              </button>
              <button>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Globe_icon_2.svg/1200px-Globe_icon_2.svg.png"
                  alt="Select Language"
                  style={{ width: "19px" }}
                />
                English
              </button>
            </div>
          </div>
        </div>
        <div className={footerCss.sec2}>
          <div className={[footerCss.box1, footerCss.box].join(" ")}>
            <div className={footerCss.boxTtl}>ABOUT ZOMATO</div>
            <Link to="/who-we-are" className={footerCss.boxOpt}>
              Who We Are
            </Link>
            <Link to="/blog" className={footerCss.boxOpt}>
              Blog
            </Link>
            <Link to="/work-with-us" className={footerCss.boxOpt}>
              Work With Us
            </Link>
            <Link to="/investor-relations" className={footerCss.boxOpt}>
              Investor Relations
            </Link>
            <Link to="/report-fraud" className={footerCss.boxOpt}>
              Report Fraud
            </Link>
          </div>
          <div className={[footerCss.box2, footerCss.box].join(" ")}>
            <div className={footerCss.boxTtl}>ZOMAVERSE</div>
            <Link to="/zomato" className={footerCss.boxOpt}>
              Zomato
            </Link>
            <Link to="/feeding-india" className={footerCss.boxOpt}>
              Feeding India
            </Link>
            <Link to="/hyperpure" className={footerCss.boxOpt}>
              Hyperpure
            </Link>
            <Link to="/zomaland" className={footerCss.boxOpt}>
              Zomaland
            </Link>
          </div>
          <div className={[footerCss.box3, footerCss.box].join(" ")}>
            <div className={footerCss.boxTtl}>FOR RESTAURANTS</div>
            <Link to="/partner-with-us" className={footerCss.boxOpt}>
              Partner With Us
            </Link>
            <Link to="/apps-for-you" className={footerCss.boxOpt}>
              Apps For You
            </Link>

            <div className={footerCss.boxTtl}>FOR ENTERPRISES</div>
            <Link to="/zomato-for-work" className={footerCss.boxOpt}>
              Zomato For Work
            </Link>
          </div>
          <div className={[footerCss.box4, footerCss.box].join(" ")}>
            <div className={footerCss.boxTtl}>LEARN MORE</div>
            <Link to="/privacy" className={footerCss.boxOpt}>
              Privacy
            </Link>
            <Link to="/security" className={footerCss.boxOpt}>
              Security
            </Link>
            <Link to="/terms" className={footerCss.boxOpt}>
              Terms
            </Link>
            <Link to="/sitemap" className={footerCss.boxOpt}>
              Sitemap
            </Link>
          </div>
          <div className={[footerCss.box5, footerCss.box].join(" ")}>
            <div className={footerCss.boxTtl}>SOCIAL LINKS</div>
            <div className={footerCss.socialImgs}>
              <a href="" className={footerCss.socialImgAnchore}>
                <img
                  className={footerCss.socialImg}
                  src={Facebook}
                  alt="linkedin"
                />
              </a>
              <a href="" className={footerCss.socialImgAnchore}>
                <img
                  className={footerCss.socialImg}
                  src={Linkedin}
                  alt="instagram"
                />
              </a>
              <a href="" className={footerCss.socialImgAnchore}>
                <img
                  className={footerCss.socialImg}
                  src={Instagram}
                  alt="facebook"
                />
              </a>
              <a href="" className={footerCss.socialImgAnchore}>
                <img
                  className={footerCss.socialImg}
                  src={Twitter}
                  alt="twitter"
                />
              </a>
              <a href="" className={footerCss.socialImgAnchore}>
                <img
                  className={footerCss.socialImg}
                  src={Youtube}
                  alt="youtube"
                />
              </a>
            </div>
            <Link to="/" className={footerCss.app}>
              <img
                className={footerCss.appImg}
                src={Gstore}
                alt="google play store"
              />
            </Link>
            <Link to="/" className={footerCss.app}>
              <img
                className={footerCss.appImg}
                src={Appstore}
                alt="apple app store"
              />
            </Link>
          </div>
        </div>
        <hr className={footerCss.breakLine} />
        <div className={footerCss.sec3}>
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy, and Content Policies. All trademarks
          are properties of their respective owners. 2008-2024 © Zomato™ Ltd.
          All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
