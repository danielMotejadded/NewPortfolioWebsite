import { useState } from "react";

const experience = [
  {
    title: "CNC Operator",
    subtitle: "Various companies",
    year: "2021-2024",
    description:
      "Worked as a CNC operator, where I gained experience in machine operation, technical drawings, measurements, and manufacturing processes. This role helped me develop precision, technical thinking, responsibility, and attention to detail.",
  },
  {
    title: "Junior developer",
    subtitle: "PKO BP",
    year: "2025-NOW",
    description:
      "Working on internal company applications, combining analytical, testing, and junior software development responsibilities. I support React and .NET-based applications, implement UI improvements, work with REST APIs, Git, Redux, EF Core, databases, and SAP-related systems.",
  },
];

const education = [
  {
    title: "Technic Mechatronic",
    subtitle:
      "Zespół Szkół im. Walerego Goetla w Suchej Beskidzkiej",
    year: "2020",
    description:
      "I graduated from a technical secondary school with a specialization in mechatronics, where I gained a solid foundation in IT, electronics, and electrical engineering. During my studies, I also learned the basics of PLC programming and practical automation systems.",
  },
  {
    title: "IT and Econometry",
    subtitle: "UAFM Cracov",
    year: "2026",
    description:
      "Graduated with engineering degree, learned the basics of programming, web development, web security etc.",
  },
];

function WorkCard({ item }) {
  return (
    <div className="work__card">
      <div className="work__data">
        <div>
          <h1 className="work__title">
            {item.title}
          </h1>

          <h3 className="work__subtitle">
            {item.subtitle}
          </h3>
        </div>

        <h2 className="work__year">
          {item.year}
        </h2>
      </div>

      <p className="work__description">
        {item.description}
      </p>
    </div>
  );
}

function Work() {
  const [activeTab, setActiveTab] = useState("experience");

  const data =
    activeTab === "experience"
      ? experience
      : education;

  return (
    <section className="work section">
      <h2 className="section__title">
        <span>My Work</span>
        <br />
        Experience
      </h2>

      <div className="work__container container grid">
        <div className="work__tabs">
          <button
            className={`work__button ${
              activeTab === "experience"
                ? "work-active"
                : ""
            }`}
            onClick={() => setActiveTab("experience")}
          >
            Experience{" "}
            <i className="ri-briefcase-3-line"></i>
          </button>

          <button
            className={`work__button ${
              activeTab === "education"
                ? "work-active"
                : ""
            }`}
            onClick={() => setActiveTab("education")}
          >
            Education{" "}
            <i className="ri-graduation-cap-line"></i>
          </button>
        </div>

        <div className="work__area">
          <div className="work__line"></div>

          <div className="work__content work-active">
            {data.map((item, index) => (
              <WorkCard
                key={index}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;