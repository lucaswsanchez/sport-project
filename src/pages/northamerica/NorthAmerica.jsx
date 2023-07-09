import "../../styles/Regions.css";
import CommentSection from "../../components/utils/CommentSection";
import NorthAmericaMoments from "./components/NorthAmericaMoments";
import NorthAmericaLeagueLogos from "./components/NorthAmericaLeagueLogos";

const NorthAmerica = () => {
  return (
    <div className="americadelnorte-container">
      <NorthAmericaMoments />
      <NorthAmericaLeagueLogos />
      <CommentSection region="americaDelNorte" />
    </div>
  );
};

export default NorthAmerica;
