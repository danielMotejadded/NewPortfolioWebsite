function Home() {
  return (
    <section className="home section">
      <div className="home__shadow"></div>

      <div className="home__container container grid">
        <div className="home__data">
          <h3 className="home__greeting">
            Hello, I'm
          </h3>

          <h1 className="home__name">
            Daniel <br />
            Motejadded
          </h1>
        </div>

        <div className="home__image">
          <div className="blob-animate"></div>

          <img
            src="/img/home-profile.png"
            alt="Daniel Motejadded"
            className="home__profil"
          />
        </div>

        <div className="home__info">
          <h3 className="home__split">
            Junior
          </h3>

          <h2 className="home__profession-1">
            Fullstack
          </h2>

          <h2 className="home__profession-2">
            Developer
          </h2>
        </div>

        <div className="home__social">
          <a
            href="https://www.linkedin.com/in/danielmotejadded/"
            className="home__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-linkedin-box-line"></i>
          </a>

          <a
            href="https://github.com/danielMotejadded"
            className="home__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-github-line"></i>
          </a>
        </div>

        <a
          href="/assets/pdf/Anid-Cv.pdf"
          download
          target="_blank"
          rel="noreferrer"
          className="home__cv"
        >
          RESUME <i className="ri-file-text-line"></i>
        </a>
      </div>
    </section>
  );
}

export default Home;