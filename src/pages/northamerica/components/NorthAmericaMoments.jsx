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

const NorthAmericaMoments = () => {
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
        <h2>North America and the growth of football</h2>
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
              In 1993, the MLS (Major League Soccer) was established in the
              United States with the objective of fostering the growth of
              professional soccer in the country. Since then, the league has
              consistently experienced growth and has played a significant role
              in popularizing soccer in North America.
            </p>
          </div>
        </div>
        <div className="moment reverse">
          <div className="moment-description">
            <p>
              Mexican clubs have enjoyed a notable supremacy in the CONCACAF
              Champions League, the most prominent club tournament in the
              region. Teams like Club América, Cruz Azul, and Tigres UANL have
              claimed the title on several occasions, showcasing the strength
              and competitiveness of Mexican club football in North America.
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

export default NorthAmericaMoments;
