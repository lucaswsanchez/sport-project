import { Link } from "react-router-dom";
//Logos de liga
import ligamx from "../../../assets/images/league-logos/ligamx.png";
import mls from "../../../assets/images/league-logos/mls.png";

const NorthAmericaLeagueLogos = () => {
  return (
    <div>
      <div className="league-title">
        <h2>Explore the most significant leagues in the region</h2>
      </div>
      <div className="league-logos">
        <figure className="league-logo">
          <img src={ligamx} alt="logo" />
          <figcaption>
            <Link to="/northamerica/ligamexicana">
              <button>Learn more</button>
            </Link>
          </figcaption>
        </figure>
        <figure className="league-logo">
          <img src={mls} alt="logo" />
          <figcaption>
            <Link to="/northamerica/mayorsoccerleague">
              <button>Learn more</button>
            </Link>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default NorthAmericaLeagueLogos;
