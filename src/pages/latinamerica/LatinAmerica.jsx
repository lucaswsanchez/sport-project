import "../../styles/Regions.css";
import "../../styles/LatinAmerica.css";
import CommentSection from "../../components/utils/CommentSection";
import LatinAmericaMoments from "./components/LatinAmericaMoments";
import LatinAmericaLeagueLogos from "./components/LatinAmericaLeagueLogos";

const LatinAmerica = () => {
  return (
    <div className="americalatina-container">
      <LatinAmericaMoments />
      <LatinAmericaLeagueLogos />
      <CommentSection region="americaLatina" />
    </div>
  );
};

export default LatinAmerica;
