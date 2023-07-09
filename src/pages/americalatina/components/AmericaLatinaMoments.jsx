import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//Imagenes legendas
import maradona from "../../../assets/images/americalatina-legends/maradona.webp";
import pele from "../../../assets/images/americalatina-legends/pele.webp";
//Imagenes momento 1
import imagen1d1 from "../../../assets/images/americalatina-moment1/americalatina-moment1-1.webp";
import imagen2d1 from "../../../assets/images/americalatina-moment1/americalatina-moment1-2.webp";
import imagen3d1 from "../../../assets/images/americalatina-moment1/americalatina-moment1-3.webp";
import imagen4d1 from "../../../assets/images/americalatina-moment1/americalatina-moment1-4.webp";
//Imagenes momento 2
import imagen1d2 from "../../../assets/images/americalatina-moment2/americalatina-moment2-1.webp";
import imagen2d2 from "../../../assets/images/americalatina-moment2/americalatina-moment2-2.webp";
import imagen3d2 from "../../../assets/images/americalatina-moment2/americalatina-moment2-3.webp";

const AmericaLatinaMoments = () => {
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
        <h2>La fiebre futbolera de America Latina</h2>
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
            </Slider>
          </div>
          <div className="moment-description">
            <p>
              Durante las décadas de 1950 y 1960, Pelé se convirtió en una
              figura legendaria y llevó a Brasil a ganar tres Copas del Mundo
              (1958, 1962 y 1970). Su estilo de juego y talento excepcional
              marcaron un antes y un después en el fútbol sudamericano.
            </p>
          </div>
        </div>
        <div className="moment reverse">
          <div className="moment-description">
            <p>
              El Superclásico argentino entre Boca Juniors y River Plate es una
              de las rivalidades más intensas y apasionantes del fútbol
              latinoamericano. Puedes destacar la pasión y la historia detrás de
              estos enfrentamientos, incluyendo la final histórica de la Copa
              Libertadores de 2018 que capturó la atención del mundo entero.
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
            </Slider>
          </div>
        </div>
      </div>
      <div className="legends">
        <p>
          La region ha producido algunas de las leyendas más destacadas del
          deporte, como Pelé y Diego Maradona. Estos jugadores icónicos han
          dejado una huella imborrable en la historia del fútbol, y su legado
          continúa inspirando a generaciones de jóvenes futbolistas en toda la
          región.
        </p>
        <div className="legends-img">
          <img src={maradona} alt="maradona" />
          <img src={pele} alt="pele" />
        </div>
      </div>
    </div>
  );
};

export default AmericaLatinaMoments;
