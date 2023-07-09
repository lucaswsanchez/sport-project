import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//Imagenes momento 1
import imagen1d1 from "../../../assets/images/europa-moment1/europa-moment1-1.webp";
import imagen2d1 from "../../../assets/images/europa-moment1/europa-moment1-2.webp";
import imagen3d1 from "../../../assets/images/europa-moment1/europa-moment1-3.webp";
import imagen4d1 from "../../../assets/images/europa-moment1/europa-moment1-4.webp";
import imagen5d1 from "../../../assets/images/europa-moment1/europa-moment1-5.webp";
//Imagenes momento 2
import imagen1d2 from "../../../assets/images/europa-moment2/europa-moment2-1.webp";
import imagen2d2 from "../../../assets/images/europa-moment2/europa-moment2-2.webp";
import imagen3d2 from "../../../assets/images/europa-moment2/europa-moment2-3.webp";
import imagen4d2 from "../../../assets/images/europa-moment2/europa-moment2-4.webp";
//Imagenes momento 3
import imagen1d3 from "../../../assets/images/europa-moment3/europa-moment3-1.webp";
import imagen2d3 from "../../../assets/images/europa-moment3/europa-moment3-2.webp";
import imagen3d3 from "../../../assets/images/europa-moment3/europa-moment3-3.webp";
import imagen4d3 from "../../../assets/images/europa-moment3/europa-moment3-4.webp";

const EuropaMoments = () => {
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
    <div className="content-container">
      <div className="moments">
        <h2>El futbol en Europa</h2>
        <div className="moment reverse">
          <div className="moment-description">
            <p>
              La final de la Liga de Campeones de la UEFA de 2005, conocida como
              el "Milagro de Estambul": El AC Milan y el Liverpool se
              enfrentaron en la final, donde el equipo italiano tomó una ventaja
              de 3-0 en la primera mitad. Sin embargo, en una actuación
              memorable, el Liverpool logró empatar el partido 3-3 en el segundo
              tiempo y ganó en la tanda de penales. Fue un partido lleno de
              emoción y una de las mayores remontadas en la historia de las
              finales de la Liga de Campeones.
            </p>
          </div>
          <div className="moment-image">
            <Slider {...settings}>
              <div>
                <img src={imagen1d1} alt="imagen1d1" />
              </div>
              <div>
                <img src={imagen2d1} alt="imagen2d1" />
              </div>
              <div>
                <img src={imagen3d1} alt="imagen3d1" />
              </div>
              <div>
                <img src={imagen4d1} alt="imagen1d1" />
              </div>
              <div>
                <img src={imagen5d1} alt="imagen1d1" />
              </div>
            </Slider>
          </div>
        </div>
        <div className="moment">
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
              <div>
                <img src={imagen4d2} alt="imagen1d2" />
              </div>
            </Slider>
          </div>
          <div className="moment-description">
            <p>
              El triplete del FC Barcelona en la temporada 2008-2009: Bajo la
              dirección de Pep Guardiola, el Barcelona logró ganar la Liga, la
              Copa del Rey y la Liga de Campeones en una misma temporada. Fue un
              logro impresionante que destacó por el estilo de juego ofensivo y
              dominante del equipo, liderado por jugadores como Lionel Messi,
              Xavi Hernández y Andrés Iniesta.
            </p>
          </div>
        </div>
        <div className="moment reverse">
          <div className="moment-description">
            <p>
              La final de la Liga de Campeones de la UEFA de 2014: El Real
              Madrid se enfrentó al Atlético de Madrid en una final emocionante.
              El partido se fue a la prórroga con un empate 1-1, pero el Real
              Madrid se impuso en el tiempo extra, ganando 4-1. Fue la décima
              vez que el Real Madrid ganó la Liga de Campeones, un hito
              histórico conocido como "La Décima" para el club.
            </p>
          </div>
          <div className="moment-image">
            <Slider {...settings}>
              <div>
                <img src={imagen1d3} alt="imagen1d3" />
              </div>
              <div>
                <img src={imagen2d3} alt="imagen2d3" />
              </div>
              <div>
                <img src={imagen3d3} alt="imagen3d3" />
              </div>
              <div>
                <img src={imagen4d3} alt="imagen1d3" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EuropaMoments;
