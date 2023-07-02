import { Link } from "react-router-dom";
import "./Regiones.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//Imagenes momento 1
import imagen1d1 from "../assets/images/americadelnorte-moment1/americadelnorte-moment1-1.jpg";
import imagen2d1 from "../assets/images/americadelnorte-moment1/americadelnorte-moment1-2.jpg";
import imagen3d1 from "../assets/images/americadelnorte-moment1/americadelnorte-moment1-3.jpg";
//Imagenes momento 2
import imagen1d2 from "../assets/images/americadelnorte-moment2/americadelnorte-moment2-1.jpg";
import imagen2d2 from "../assets/images/americadelnorte-moment2/americadelnorte-moment2-2.jpg";
import imagen3d2 from "../assets/images/americadelnorte-moment2/americadelnorte-moment2-3.jpg";
//Logos de liga
import ligamx from "../assets/images/league-logos/ligamx.png";
import mls from "../assets/images/league-logos/mls.png";
//Video de fondo
import video from "../assets/videos/background-video.webm";

const AmericaDelNorte = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="americadelnorte-container">
      <div className="video-container">
        <video src={video} autoPlay muted loop className="background-video" />
        <div className="capa"></div>
        <div className="content-container">
          <div className="introduction">
            <h2>
              América del Norte: Donde el Fútbol Encuentra su Propio Camino
            </h2>
            <p>
              El fútbol en América del Norte tiene una historia diversa y en
              constante crecimiento. Desde sus raíces en el siglo XIX, impulsado
              por inmigrantes europeos, hasta el establecimiento de ligas
              profesionales como la MLS, el fútbol ha ganado popularidad y
              seguidores en la región. Aunque ha enfrentado desafíos en su
              camino, el deporte ha logrado atraer jugadores de renombre
              internacional y ha dado lugar a destacadas actuaciones en
              competiciones internacionales. Con selecciones nacionales
              competitivas y un aumento en el apoyo, el futuro del fútbol en
              América del Norte parece prometedor.
            </p>
          </div>
          <div className="moments">
            <br></br>
            <div className="moment">
              <div className="moment-image">
                <Slider {...settings}>
                  <div>
                    <img src={imagen1d1} alt="imagen1d2" />
                  </div>
                  <div>
                    <img src={imagen2d1} alt="imagen2d2" />
                  </div>
                  <div>
                    <img src={imagen3d1} alt="imagen3d2" />
                  </div>
                </Slider>
              </div>
              <div className="moment-description">
                <p>
                  En 1993, se fundó la MLS en los Estados Unidos con el objetivo
                  de desarrollar el fútbol profesional en el país. La liga ha
                  experimentado un crecimiento constante desde entonces y ha
                  contribuido significativamente a la popularización del fútbol
                  en América del Norte.
                </p>
              </div>
            </div>
            <div className="moment">
              <div className="moment-description">
                <p>
                  Los clubes mexicanos han tenido un dominio destacado en la
                  Liga de Campeones de la CONCACAF, el torneo de clubes más
                  importante de la región. Equipos como el Club América, Cruz
                  Azul y Tigres UANL han conquistado el título en varias
                  ocasiones, demostrando la fortaleza y competitividad del
                  fútbol mexicano en el ámbito de clubes en América del Norte.
                </p>
              </div>
              <div className="moment-image">
                <Slider {...settings}>
                  <div>
                    <img src={imagen1d2} alt="imagen1d2" />
                  </div>
                  <div>
                    <img src={imagen2d2} alt="imagen2d2" />
                  </div>
                  <div>
                    <img src={imagen3d2} alt="imagen3d2" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="league-title">
        <h2>Descubre sobre las ligas mas importantes de la region</h2>
      </div>
      <div className="league-logos">
        <figure className="league-logo">
          <img src={ligamx} alt="logo" />
          <figcaption>
            <Link to="/americadelnorte/ligamexicana">
              <button>Ver mas</button>
            </Link>
          </figcaption>
        </figure>
        <figure className="league-logo">
          <img src={mls} alt="logo" />
          <figcaption>
            <Link to="/americadelnorte/mayorsoccerleague">
              <button>Ver mas</button>
            </Link>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default AmericaDelNorte;
