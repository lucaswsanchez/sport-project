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

const LatinAmericaMoments = () => {
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
        <h2>The football passion of Latin America</h2>
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
              During the 1950s and 1960s, Pelé emerged as a legendary figure and
              led Brazil to win three World Cups (1958, 1962, and 1970). His
              playing style and exceptional talent left an indelible mark on
              South American football, ushering in a new era.
            </p>
          </div>
        </div>
        <div className="moment reverse">
          <div className="moment-description">
            <p>
              The Argentine Superclásico between Boca Juniors and River Plate is
              one of the most intense and passionate rivalries in Latin American
              football. It's characterized by the passion and history behind
              these encounters, including the historic 2018 Copa Libertadores
              final that captivated the world's attention.
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
          The region has produced some of the most prominent legends in sports,
          such as Pelé and Diego Maradona. These iconic players have left an
          indelible mark on the history of football, and their legacy continues
          to inspire generations of young footballers throughout the region.
        </p>
        <div className="legends-img">
          <img src={maradona} alt="maradona" />
          <img src={pele} alt="pele" />
        </div>
      </div>
    </div>
  );
};

export default LatinAmericaMoments;
