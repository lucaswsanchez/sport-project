import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../../pages/LoginForm";
import SignupForm from "../../pages/SignupForm";
import Home from "../../pages/home/Home";
import Europe from "../../pages/europe/Europe";
import LatinAmerica from "../../pages/latinamerica/LatinAmerica";
import NorthAmerica from "../../pages/northamerica/NorthAmerica";

//Componentes de ligas
const Bundesliga = React.lazy(() =>
  delayForDemo(import("../../pages/europe/leagues/Bundesliga"))
);
const LaLiga = React.lazy(() =>
  delayForDemo(import("../../pages/europe/leagues/LaLiga"))
);
const SerieA = React.lazy(() =>
  delayForDemo(import("../../pages/europe/leagues/SerieA"))
);
const PremierLeague = React.lazy(() =>
  delayForDemo(import("../../pages/europe/leagues/PremierLeague"))
);
const Ligue1 = React.lazy(() =>
  delayForDemo(import("../../pages/europe/leagues/Ligue1"))
);
const LigaArgentina = React.lazy(() =>
  delayForDemo(import("../../pages/latinamerica/leagues/LigaArgentina"))
);
const LigaBrasilera = React.lazy(() =>
  delayForDemo(import("../../pages/latinamerica/leagues/LigaBrasilera"))
);
const LigaMexicana = React.lazy(() =>
  delayForDemo(import("../../pages/northamerica/leagues/LigaMexicana"))
);
const MayorSoccerLeague = React.lazy(() =>
  delayForDemo(import("../../pages/northamerica/leagues/MayorSoccerLeague"))
);

async function delayForDemo(promise) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });
  return promise;
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/europe" element={<Europe />} />
      <Route path="/latinamerica" element={<LatinAmerica />} />
      <Route path="/northamerica" element={<NorthAmerica />} />
      <Route path="/europe/bundesliga" element={<Bundesliga />} />
      <Route path="/europe/premierleague" element={<PremierLeague />} />
      <Route path="/europe/laliga" element={<LaLiga />} />
      <Route path="/europe/ligue1" element={<Ligue1 />} />
      <Route path="/europe/seriea" element={<SerieA />} />
      <Route path="/latinamerica/ligaargentina" element={<LigaArgentina />} />
      <Route path="/latinamerica/ligabrasilera" element={<LigaBrasilera />} />
      <Route path="/northamerica/ligamexicana" element={<LigaMexicana />} />
      <Route
        path="/northamerica/mayorsoccerleague"
        element={<MayorSoccerLeague />}
      />
    </Routes>
  );
};

export default AppRoutes;
