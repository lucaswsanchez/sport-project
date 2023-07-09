import { Link } from "react-router-dom";
import europe from "../../../assets/images/regions-logos/europe.png";
import latinamerica from "../../../assets/images/regions-logos/latinamerica.png";
import northamerica from "../../../assets/images/regions-logos/northamerica.png";

const HomeRegions = () => {
  return (
    <div className="regions-container">
      <h2>Explore about football in global regions</h2>
      <div className="regions-figure">
        <figure>
          <img src={europe} alt="europe" />
          <figcaption>
            <Link to="/europe">
              <button>EUROPE</button>
            </Link>
          </figcaption>
        </figure>
        <figure>
          <img src={latinamerica} alt="latinamerica" />
          <figcaption>
            <Link to="/latinamerica">
              <button>LATIN AMERICA</button>
            </Link>
          </figcaption>
        </figure>
        <figure>
          <img src={northamerica} alt="northamerica" />
          <figcaption>
            <Link to="/northamerica">
              <button>NORTH AMERICA</button>
            </Link>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default HomeRegions;
