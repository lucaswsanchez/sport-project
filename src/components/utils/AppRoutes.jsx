import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import Europa from "../../pages/europa/Europa";
import AmericaLatina from "../../pages/americalatina/AmericaLatina";
import AmericaDelNorte from "../../pages/americadelnorte/AmericaDelNorte";
import LoginForm from "../../pages/LoginForm";
import SignupForm from "../../pages/SignupForm";

//Componentes de ligas
const Bundesliga = React.lazy(() =>
  delayForDemo(import("../../pages/europa/leagues/Bundesliga"))
);
const LaLiga = React.lazy(() => delayForDemo(import("../../pages/europa/leagues/LaLiga")));
const SerieA = React.lazy(() => delayForDemo(import("../../pages/europa/leagues/SerieA")));
const PremierLeague = React.lazy(() =>
  delayForDemo(import("../../pages/europa/leagues/PremierLeague"))
);
const Ligue1 = React.lazy(() => delayForDemo(import("../../pages/europa/leagues/Ligue1")));
const LigaArgentina = React.lazy(() =>
  delayForDemo(import("../../pages/americalatina/leagues/LigaArgentina"))
);
const LigaBrasilera = React.lazy(() =>
  delayForDemo(import("../../pages/americalatina/leagues/LigaBrasilera"))
);
const LigaMexicana = React.lazy(() =>
  delayForDemo(import("../../pages/americadelnorte/leagues/LigaMexicana"))
);
const MayorSoccerLeague = React.lazy(() =>
  delayForDemo(import("../../pages/americadelnorte/leagues/MayorSoccerLeague"))
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
      <Route path="/europa" element={<Europa />} />
      <Route path="/americalatina" element={<AmericaLatina />} />
      <Route path="/americadelnorte" element={<AmericaDelNorte />} />
      <Route path="/europa/bundesliga" element={<Bundesliga />} />
      <Route path="/europa/premierleague" element={<PremierLeague />} />
      <Route path="/europa/laliga" element={<LaLiga />} />
      <Route path="/europa/ligue1" element={<Ligue1 />} />
      <Route path="/europa/seriea" element={<SerieA />} />
      <Route path="/americalatina/ligaargentina" element={<LigaArgentina />} />
      <Route path="/americalatina/ligabrasilera" element={<LigaBrasilera />} />
      <Route path="/americadelnorte/ligamexicana" element={<LigaMexicana />} />
      <Route
        path="/americadelnorte/mayorsoccerleague"
        element={<MayorSoccerLeague />}
      />
    </Routes>
  );
};

export default AppRoutes;
