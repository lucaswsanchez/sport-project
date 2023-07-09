import { Link } from "react-router-dom";
//Logos de ligas
import ligaargentina from "../../../assets/images/league-logos/ligaargentina.png";
import ligabrasilera from "../../../assets/images/league-logos/ligabrasilera.png";

const LatinAmericaLeagueLogos = () => {
  return (
    <div>
      <div className="league-title">
        <h2>Explore the most significant leagues in the region.</h2>
      </div>
      <div className="league-logos">
        <figure className="league-logo">
          <img src={ligaargentina} alt="logo" />
          <figcaption>
            <Link to="/latinamerica/ligaargentina">
              <button>Learn more</button>
            </Link>
          </figcaption>
        </figure>
        <figure className="league-logo">
          <img src={ligabrasilera} alt="logo" />
          <figcaption>
            <Link to="/latinamerica/ligabrasilera">
              <button>Learn more</button>
            </Link>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default LatinAmericaLeagueLogos;
