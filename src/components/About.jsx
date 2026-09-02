function About() {
  return (
    <section className="about section" id="about">
      <div className="about__shadow"></div>

      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="section__title">
            <span>Constantly</span>
            <br />
            learning
          </h2>

          <p className="about__description">
            I currently work at PKO BP as{" "}
            <b>junior developer</b>. There I have daily contact
            with huge systems, databases, and ORM services.
            On my way to learn and be efficient in{" "}
            <b>.NET and TypeScript React</b>.
            Supporting development of business apps.
          </p>

          <a
            href="/assets/pdf/Anid-Cv.pdf"
            className="button"
            download
            target="_blank"
            rel="noreferrer"
          >
            Resume <i className="ri-file-text-line"></i>
          </a>
        </div>

        <div className="about__image">
          <div className="blob-animate"></div>
          <div className="blob-animate"></div>

          <img
            src="/img/Logotyp_PkoBp.png"
            alt="PKO BP"
            className="about__profil"
          />
        </div>
      </div>
    </section>
  );
}

export default About;