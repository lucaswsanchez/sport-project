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
          Harry Winks, Leicester's first signing to return to the Premier
          League.
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
        <p>Sevilla announces the signing of Pedrosa Adrià.</p>
      </article>
      <article className="small-article">
        <a
          href="https://www.marca.com/futbol/premier-league/2023/07/01/649ff79146163f3c278b45fc.html"
          target="_blank"
          title="Abrir enlace en una nueva pestaña"
        >
          <img src={news3} alt="article" />
        </a>
        <p>Alex Matos and Diego Moreira, the new gems of Chelsea.</p>
      </article>
      <article className="small-article">
        <a
          href="https://www.marca.com/futbol/premier-league/2023/07/01/649ff456e2704e61a58b45eb.html"
          target="_blank"
          title="Abrir enlace en una nueva pestaña"
        >
          <img src={news4} alt="article" />
        </a>
        <p>Aston Villa, managed by Unai Emery, signs Youri Tielemans.</p>
      </article>
      <article className="small-article">
        <a
          href="https://www.marca.com/futbol/liga-francesa/2023/07/01/649fc6ac22601d1f418b4575.html"
          target="_blank"
          title="Abrir enlace en una nueva pestaña"
        >
          <img src={news5} alt="article" />
        </a>
        <p>PSG is preparing millions to strengthen their attack.</p>
      </article>
      <article className="small-article">
        <a
          href="https://www.marca.com/futbol/real-madrid/2023/07/01/64a062b422601d403f8b4593.html"
          target="_blank"
          title="Abrir enlace en una nueva pestaña"
        >
          <img src={news6} alt="article" />
        </a>
        <p>Real Madrid doesn't hide that signing Mbappé now is impossible.</p>
      </article>
    </div>
  );
};

export default HomeNews;
