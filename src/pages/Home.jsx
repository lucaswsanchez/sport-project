import { Link } from "react-router-dom";
import "./Home.css";
//Logo header
import homeheader from "../assets/images/home-logo.png";
//Noticias imagenes
import news1 from "../assets/images/news-images/news1.jpg";
import news2 from "../assets/images/news-images/news2.jpg";
import news3 from "../assets/images/news-images/news3.jpg";
import news4 from "../assets/images/news-images/news4.jpg";
import news5 from "../assets/images/news-images/news5.jpg";
import news6 from "../assets/images/news-images/news6.jpg";
//Regiones logo
import europe from "../assets/images/regions-logos/europe.png";
import latinamerica from "../assets/images/regions-logos/latinamerica.png";
import northamerica from "../assets/images/regions-logos/northamerica.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <img src={homeheader} alt="homeheader" />
      </div>
      <div className="grid-container">
        <article className="main-article">
          <a
            href="https://www.marca.com/futbol/premier-league/2023/07/01/64a01a9f268e3ec32b8b45e1.html"
            target="_blank"
            title="Abrir enlace en una nueva pestaña"
          >
            <img src={news1} alt="article" />
          </a>
          <p>
            Harry Winks, primer fichaje del Leicester para volver a la Premier
          </p>
        </article>
        <article className="small-article">
          <a
            href="https://www.marca.com/futbol/sevilla/2023/07/01/649fe301e2704eed748b45af.html"
            target="_blank"
            title="Abrir enlace en una nueva pestaña"
          >
            <img src={news2} alt="article" />
          </a>
          <p>El Sevilla anuncia el fichaje de Pedrosa Adrià</p>
        </article>
        <article className="small-article">
          <a
            href="https://www.marca.com/futbol/premier-league/2023/07/01/649ff79146163f3c278b45fc.html"
            target="_blank"
            title="Abrir enlace en una nueva pestaña"
          >
            <img src={news3} alt="article" />
          </a>
          <p>Alex Matos y Diego Moreira, las nuevas perlas del Chelsea</p>
        </article>
        <article className="small-article">
          <a
            href="https://www.marca.com/futbol/premier-league/2023/07/01/649ff456e2704e61a58b45eb.html"
            target="_blank"
            title="Abrir enlace en una nueva pestaña"
          >
            <img src={news4} alt="article" />
          </a>
          <p>El Aston Villa de Unai Emery ficha a Youri Tielemans</p>
        </article>
        <article className="small-article">
          <a
            href="https://www.marca.com/futbol/liga-francesa/2023/07/01/649fc6ac22601d1f418b4575.html"
            target="_blank"
            title="Abrir enlace en una nueva pestaña"
          >
            <img src={news5} alt="article" />
          </a>
          <p>La millonada que prepara el PSG para reforzar el ataque</p>
        </article>
        <article className="small-article">
          <a
            href="https://www.marca.com/futbol/real-madrid/2023/07/01/64a062b422601d403f8b4593.html"
            target="_blank"
            title="Abrir enlace en una nueva pestaña"
          >
            <img src={news6} alt="article" />
          </a>
          <p>
            El Real Madrid no oculta que el fichaje de Mbappé ahora es un
            imposible
          </p>
        </article>
      </div>
      <div className="regions">
        <h2>Explora sobre el futbol en regiones globales</h2>
        <div className="regions-figure">
          <figure>
            <img src={europe} alt="europe" />
            <figcaption>
              <Link to="/europa">
                <button>EUROPA</button>
              </Link>
            </figcaption>
          </figure>
          <figure>
            <img src={latinamerica} alt="latinamerica" />
            <figcaption>
              <Link to="/americalatina">
                <button>AMERICA LATINA</button>
              </Link>
            </figcaption>
          </figure>
          <figure>
            <img src={northamerica} alt="northamerica" />
            <figcaption>
              <Link to="/americadelnorte">
                <button>AMERICA DEL NORTE</button>
              </Link>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Home;
