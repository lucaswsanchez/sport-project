import { Link } from "react-router-dom";
//Logos de ligas
import ligaargentina from "../../../assets/images/league-logos/ligaargentina.png";
import ligabrasilera from "../../../assets/images/league-logos/ligabrasilera.png";

const AmericaLatinaLeagueLogos = () => {
  return (
    <div>
      <div className="league-title">
        <h2>Descubre sobre las ligas mas importantes de la region</h2>
      </div>
      <div className="league-logos">
        <figure className="league-logo">
          <img src={ligaargentina} alt="logo" />
          <figcaption>
            <Link to="/americalatina/ligaargentina">
              <button>Ver mas</button>
            </Link>
          </figcaption>
        </figure>
        <figure className="league-logo">
          <img src={ligabrasilera} alt="logo" />
          <figcaption>
            <Link to="/americalatina/ligabrasilera">
              <button>Ver mas</button>
            </Link>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default AmericaLatinaLeagueLogos;
