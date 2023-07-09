import "../../styles/Home.css";
import homeheader from "../../assets/images/home-logo.png";
import TeamsTableEurope from "../europa/components/TeamsTableEurope";
import TeamsTableLatinAmerica from "../americalatina/components/TeamsTableLatinAmerica";
import TeamsTableNorthAmerica from "../americadelnorte/components/TeamsTableNorthAmerica";
import HomeNews from "./components/HomeNews";
import HomeRegions from "./components/HomeRegions";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <img src={homeheader} alt="homeheader" />
      </div>
      <div className="table">
        <TeamsTableEurope ligaProps="bundesliga" />
        <TeamsTableEurope ligaProps="laLiga" />
        <TeamsTableEurope ligaProps="ligue1" />
        <TeamsTableEurope ligaProps="serieA" />
        <TeamsTableEurope ligaProps="premierLeague" />
        <TeamsTableLatinAmerica ligaProps="ligaArgentina" />
        <TeamsTableLatinAmerica ligaProps="ligaBrasilera" />
        <TeamsTableNorthAmerica ligaProps="mayorSoccerLeague" />
        <TeamsTableNorthAmerica ligaProps="ligaMexicana" />
      </div>
      <HomeNews />
      <HomeRegions />
    </div>
  );
};

export default Home;
