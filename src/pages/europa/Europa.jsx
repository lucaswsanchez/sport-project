import "../../styles/Regiones.css";
import CommentSection from "../../components/utils/CommentSection";
import EuropaMoments from "./components/EuropaMoments";
import EuropaLeagueLogos from "./components/EuropaLeagueLogos";

const Europa = () => {
  return (
    <div className="europa-container">
      <EuropaMoments />
      <EuropaLeagueLogos />
      <CommentSection region="europa" />
    </div>
  );
};

export default Europa;
