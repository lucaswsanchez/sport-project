import "./Footer.css";
import logo from "../assets/images/header-logo.webp";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <div></div>
        <div></div>
      </div>
      <div className="footer-info">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-list">
          <ul>
            <li>Aviso legal</li>
            <li>Politica de privacidad</li>
            <li>Privacidad</li>
            <li>Ayuda</li>
          </ul>
        </div>
        <div className="footer-text">
          <h5>
            Todos los derechos reservados | Desarrollado por Lucas Sanchez
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
