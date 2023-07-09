import "../../styles/Footer.css";
import logo from "../../assets/images/header-logo.webp";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-info">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-list">
          <ul>
            <li>Legal notice</li>
            <li>Privacy policy</li>
            <li>Privacy</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="footer-text">
          <h5>All rights reserved | Developed by Lucas Sanchez</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
