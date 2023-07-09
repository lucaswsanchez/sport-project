import "../../styles/Regiones.css";
import "../../styles/AmericaLatina.css";
import CommentSection from "../../components/utils/CommentSection";
import AmericaLatinaMoments from "./components/AmericaLatinaMoments";
import AmericaLatinaLeagueLogos from "./components/AmericaLatinaLeagueLogos";

const AmericaLatina = () => {
  return (
    <div className="americalatina-container">
      <AmericaLatinaMoments />
      <AmericaLatinaLeagueLogos />
      <CommentSection region="americaLatina" />
    </div>
  );
};

export default AmericaLatina;
