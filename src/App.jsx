import React, { useEffect, useState, createContext, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import database from "../firebaseConfig.js";
import Header from "./components/Header";
import Home from "./pages/Home";
import Europa from "./pages/Europa";
import AmericaLatina from "./pages/AmericaLatina";
import AmericaDelNorte from "./pages/AmericaDelNorte";
import Footer from "./components/Footer";

//Componentes de ligas
const Bundesliga = React.lazy(() => import("./pages/europa/Bundesliga"));
const LaLiga = React.lazy(() => delayForDemo(import("./pages/europa/LaLiga")));
const SerieA = React.lazy(() => import("./pages/europa/SerieA"));
const PremierLeague = React.lazy(() => import("./pages/europa/PremierLeague"));
const Ligue1 = React.lazy(() => import("./pages/europa/Ligue1"));
const LigaArgentina = React.lazy(() =>
  import("./pages/americalatina/LigaArgentina")
);
const LigaBrasilera = React.lazy(() =>
  import("./pages/americalatina/LigaBrasilera")
);
const LigaMexicana = React.lazy(() =>
  import("./pages/americadelnorte/LigaMexicana")
);
const MayorSoccerLeague = React.lazy(() =>
  import("./pages/americadelnorte/MayorSoccerLeague")
);

function Loading() {
  return (
    <h1
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Loading...
    </h1>
  );
}

async function delayForDemo(promise) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });
  return promise;
}

export const RegionContext = createContext();

function App() {
  const [europaTeams, setEuropaTeams] = useState([]);
  const [americaLatinaTeams, setAmericaLatinaTeams] = useState([]);
  const [americaDelNorteTeams, setAmericaDelNorteTeams] = useState([]);

  useEffect(() => {
    const getTeams = async () => {
      try {
        const snapshot = await database.ref("regiones").once("value");
        const data = snapshot.val();

        setEuropaTeams(data.europa);
        setAmericaLatinaTeams(data.americaLatina);
        setAmericaDelNorteTeams(data.americaDelNorte);
      } catch (error) {
        console.error(error);
      }
    };

    getTeams();
  }, []);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <RegionContext.Provider
          value={{ europaTeams, americaLatinaTeams, americaDelNorteTeams }}
        >
          <BrowserRouter>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/europa" element={<Europa />} />
                <Route path="/americalatina" element={<AmericaLatina />} />
                <Route path="/americadelnorte" element={<AmericaDelNorte />} />
                <Route path="/europa/bundesliga" element={<Bundesliga />} />
                <Route
                  path="/europa/premierleague"
                  element={<PremierLeague />}
                />
                <Route path="/europa/laliga" element={<LaLiga />} />
                <Route path="/europa/ligue1" element={<Ligue1 />} />
                <Route path="/europa/seriea" element={<SerieA />} />
                <Route
                  path="/americalatina/ligaargentina"
                  element={<LigaArgentina />}
                />
                <Route
                  path="/americalatina/ligabrasilera"
                  element={<LigaBrasilera />}
                />
                <Route
                  path="/americadelnorte/ligamexicana"
                  element={<LigaMexicana />}
                />
                <Route
                  path="/americadelnorte/mayorsoccerleague"
                  element={<MayorSoccerLeague />}
                />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </RegionContext.Provider>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
