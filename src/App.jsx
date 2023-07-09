import React, { useEffect, useState, createContext, Suspense } from "react";
import "./styles/App.css";
import { database } from "../firebaseConfig.js";
import { ToastContainer } from "react-toastify";
import Header from "./components/layout/Header";
import ScrollToTop from "./components/utils/ScrollToTop";
import AppRoutes from "./components/utils/AppRoutes";
import Footer from "./components/layout/Footer";

function Loading() {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
}

export const RegionContext = createContext();

function App() {
  const [europeTeams, setEuropeTeams] = useState([]);
  const [latinAmericaTeams, setLatinAmericaTeams] = useState([]);
  const [northAmericaTeams, setNorthAmericaTeams] = useState([]);

  useEffect(() => {
    const getTeams = async () => {
      try {
        const snapshot = await database.ref("regiones").once("value");
        const data = snapshot.val();

        setEuropeTeams(data.europa);
        setLatinAmericaTeams(data.americaLatina);
        setNorthAmericaTeams(data.americaDelNorte);
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
          value={{ europeTeams, latinAmericaTeams, northAmericaTeams }}
        >
          <ScrollToTop />
          <Suspense fallback={<Loading />}>
            <AppRoutes />
          </Suspense>
        </RegionContext.Provider>
      </main>
      <footer>
        <Footer />
      </footer>
      <ToastContainer />
    </div>
  );
}

export default App;
