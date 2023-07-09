import { Link } from "react-router-dom";
//Logos de liga
import ligamx from "../../../assets/images/league-logos/ligamx.png";
import mls from "../../../assets/images/league-logos/mls.png";

const AmericaDelNorteLeagueLogos = () => {
  return (
    <div>
      <div className="league-title">
        <h2>Descubre sobre las ligas mas importantes de la region</h2>
      </div>
      <div className="league-logos">
        <figure className="league-logo">
          <img src={ligamx} alt="logo" />
          <figcaption>
            <Link to="/americadelnorte/ligamexicana">
              <button>Ver mas</button>
            </Link>
          </figcaption>
        </figure>
        <figure className="league-logo">
          <img src={mls} alt="logo" />
          <figcaption>
            <Link to="/americadelnorte/mayorsoccerleague">
              <button>Ver mas</button>
            </Link>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default AmericaDelNorteLeagueLogos;
