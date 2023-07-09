import "../../styles/Regiones.css";
import CommentSection from "../../components/utils/CommentSection";
import AmericaDelNorteMoments from "./components/AmericaDelNorteMoments";
import AmericaDelNorteLeagueLogos from "./components/AmericaDelNorteLeagueLogos";

const AmericaDelNorte = () => {
  return (
    <div className="americadelnorte-container">
      <AmericaDelNorteMoments />
      <AmericaDelNorteLeagueLogos />
      <CommentSection region="americaDelNorte" />
    </div>
  );
};

export default AmericaDelNorte;
