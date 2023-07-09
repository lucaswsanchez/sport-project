import news1 from "../../../assets/images/news-images/news1.jpg";
import news2 from "../../../assets/images/news-images/news2.jpg";
import news3 from "../../../assets/images/news-images/news3.jpg";
import news4 from "../../../assets/images/news-images/news4.jpg";
import news5 from "../../../assets/images/news-images/news5.jpg";
import news6 from "../../../assets/images/news-images/news6.jpg";

const HomeNews = () => {
  return (
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
  );
};

export default HomeNews;
