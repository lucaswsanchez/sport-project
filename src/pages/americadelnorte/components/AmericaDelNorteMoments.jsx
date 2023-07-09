import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//Imagenes momento 1
import imagen1d1 from "../../../assets/images/americadelnorte-moment1/americadelnorte-moment1-1.webp";
import imagen2d1 from "../../../assets/images/americadelnorte-moment1/americadelnorte-moment1-2.webp";
import imagen3d1 from "../../../assets/images/americadelnorte-moment1/americadelnorte-moment1-3.webp";
//Imagenes momento 2
import imagen1d2 from "../../../assets/images/americadelnorte-moment2/americadelnorte-moment2-1.webp";
import imagen2d2 from "../../../assets/images/americadelnorte-moment2/americadelnorte-moment2-2.webp";
import imagen3d2 from "../../../assets/images/americadelnorte-moment2/americadelnorte-moment2-3.webp";

const AmericaDelNorteMoments = () => {
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
        <h2>America del Norte y el crecimiento del futbol</h2>
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
              En 1993, se fundó la MLS en los Estados Unidos con el objetivo de
              desarrollar el fútbol profesional en el país. La liga ha
              experimentado un crecimiento constante desde entonces y ha
              contribuido significativamente a la popularización del fútbol en
              América del Norte.
            </p>
          </div>
        </div>
        <div className="moment reverse">
          <div className="moment-description">
            <p>
              Los clubes mexicanos han tenido un dominio destacado en la Liga de
              Campeones de la CONCACAF, el torneo de clubes más importante de la
              región. Equipos como el Club América, Cruz Azul y Tigres UANL han
              conquistado el título en varias ocasiones, demostrando la
              fortaleza y competitividad del fútbol mexicano en el ámbito de
              clubes en América del Norte.
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
  );
};

export default AmericaDelNorteMoments;
