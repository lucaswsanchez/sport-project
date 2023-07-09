import { Link } from "react-router-dom";
//Logos de ligas
import premierleague from "../../../assets/images/league-logos/premierleague.png";
import seriea from "../../../assets/images/league-logos/seriea.png";
import bundesliga from "../../../assets/images/league-logos/bundesliga.png";
import laliga from "../../../assets/images/league-logos/laliga.png";
import ligue1 from "../../../assets/images/league-logos/ligue1.png";

const EuropeLeagueLogos = () => {
  return (
    <div>
      <div className="league-title">
        <h2>Explore the most significant leagues in the region.</h2>
      </div>
      <div className="league-logos">
        <figure className="league-logo">
          <img src={bundesliga} alt="logo" />
          <figcaption>
            <Link to="/europe/bundesliga">
              <button>Learn more</button>
            </Link>
          </figcaption>
        </figure>
        <figure className="league-logo">
          <img src={premierleague} alt="logo" />
          <figcaption>
            <Link to="/europe/premierleague">
              <button>Learn more</button>
            </Link>
          </figcaption>
        </figure>
        <figure className="league-logo">
          <img src={seriea} alt="logo" />
          <figcaption>
            <Link to="/europe/seriea">
              <button>Learn more</button>
            </Link>
          </figcaption>
        </figure>
        <figure className="league-logo">
          <img src={laliga} alt="logo" />
          <figcaption>
            <Link to="/europe/laliga">
              <button>Learn more</button>
            </Link>
          </figcaption>
        </figure>
        <figure className="league-logo">
          <img src={ligue1} alt="logo" />
          <figcaption>
            <Link to="/europe/ligue1">
              <button>Learn more</button>
            </Link>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default EuropeLeagueLogos;
