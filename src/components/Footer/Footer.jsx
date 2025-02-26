import FacebookIcon from "../../assets/images/Facebook.svg?react";
import Pinterest from "../../assets/images/Pinterest.svg?react";
import XIcon from "../../assets/images/X_Twitter.svg?react";
import Instagram from "../../assets/images/Instagram.svg?react";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <p className="footer__wordMark">Snaps</p>
        <div className="footer__list-wrapper">
          <ul className="footer__list footer__list-one">
            <li>For photographers</li>
            <li>Hire talent</li>
            <li>Inspiration</li>
          </ul>
          <ul className="footer__list">
            <li>About</li>
            <li>Careers</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer__icon-list">
          <FacebookIcon className="footer__icon" />
          <XIcon className="footer__icon" />
          <Instagram className="footer__icon" />
          <Pinterest className="footer__icon" />
        </div>
        <div className="footer__terms">
          <p>&#169; Snaps 2024</p>
          <p> . </p>
          <p> Terms </p>
          <p> Privacy </p>
          <p> Cookies </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
