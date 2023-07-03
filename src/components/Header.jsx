import "./Header.css";
import logo from "../assets/images/header-logo.webp";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header-nav">
        <ul>
          <li>NAV</li>
          <li>NAV</li>
          <li>NAV</li>
          <li>NAV</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
