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
