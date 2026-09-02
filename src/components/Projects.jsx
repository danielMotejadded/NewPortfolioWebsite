const projects = [
  {
    number: "01",
    type: "Web",
    title: "Ollama UI",
    technologies: "React, Vite, TailwindCSS, Ollama API",
    image: "/assets/img/ollama_project.png",
    github: "https://github.com/danielMotejadded/Ollama-UI",
  },
];

function Projects() {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">
        Here is my main project
        <br />
        <span>that I'm working on</span>
      </h2>

      <div className="projects__container container grid">
        <div className="projects__swiper swiper">
          <div className="swiper-wrapper">
            {projects.map((project) => (
              <article
                className="projects__card swiper-slide"
                key={project.number}
              >
                <div className="blob"></div>

                <div className="projects__number">
                  <h1>{project.number}</h1>
                  <h2>{project.type}</h2>
                </div>

                <div className="projects__data">
                  <h1 className="projects__title">
                    {project.title}
                  </h1>

                  <p className="projects__subtitle">
                    Technologies used
                  </p>

                  <p className="projects__description">
                    {project.technologies}
                  </p>
                </div>

                <div className="projects__image">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="projects__img"
                  />

                  <a
                    href={project.github}
                    className="projects__button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-arrow-right-up-long-line"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default Projects;