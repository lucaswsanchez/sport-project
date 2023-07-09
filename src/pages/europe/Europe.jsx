import "../../styles/Regions.css";
import CommentSection from "../../components/utils/CommentSection";
import EuropeMoments from "./components/EuropeMoments";
import EuropeLeagueLogos from "./components/EuropeLeagueLogos";

const Europe = () => {
  return (
    <div className="europa-container">
      <EuropeMoments />
      <EuropeLeagueLogos />
      <CommentSection region="europa" />
    </div>
  );
};

export default Europe;
