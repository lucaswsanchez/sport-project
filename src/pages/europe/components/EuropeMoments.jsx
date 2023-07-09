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

const EuropeMoments = () => {
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
        <h2>Football in Europe</h2>
        <div className="moment reverse">
          <div className="moment-description">
            <p>
              2005 UEFA Champions League final, famously known as the 'Miracle
              of Istanbul': AC Milan and Liverpool faced off in the final, with
              the Italian team taking a 3-0 lead in the first half. However, in
              a memorable performance, Liverpool managed to equalize the match
              3-3 in the second half and won in the penalty shootout. It was a
              thrilling game and one of the greatest comebacks in the history of
              Champions League finals.
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
              The historic treble of FC Barcelona in the 2008-2009 season: Led
              by Pep Guardiola, Barcelona triumphed in the league, Copa del Rey,
              and Champions League within a single season. This remarkable
              achievement showcased the team's attacking prowess and dominance,
              driven by exceptional players like Lionel Messi, Xavi Hernández,
              and Andrés Iniesta.
            </p>
          </div>
        </div>
        <div className="moment reverse">
          <div className="moment-description">
            <p>
              2014 UEFA Champions League final: Real Madrid faced off against
              Atlético Madrid in a thrilling final. The match ended in a 1-1
              draw and went into extra time, where Real Madrid emerged
              victorious with a 4-1 win. It marked the tenth time that Real
              Madrid secured the Champions League title, a historic milestone
              known as 'La Décima' for the club.
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

export default EuropeMoments;
