import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import "./Header.css";
import logo from "../assets/images/header-logo.webp";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="header-container">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="header-nav">
        <ul>
          <li>NAV</li>
          <li>NAV</li>
          <li>NAV</li>
          <li>NAV</li>
        </ul>
      </div>
      <div className="header-user">
        {user ? (
          <p>
            <BiUserCircle size={19} />  {user.email}
          </p>
        ) : (
          <div className="form-btn">
            <Link to="/login">
              <button>Iniciar Sesion</button>
            </Link>
            <Link to="/signup">
              <button>Registrarse</button>
            </Link>
          </div>
        )}
        {user && (
          <div className="form-btn-out">
            <button onClick={handleLogout}>Cerrar sesión</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
