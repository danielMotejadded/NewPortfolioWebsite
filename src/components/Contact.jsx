import { useState } from "react";

function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "danimotejadded@gmail.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__container container grid">
        <div className="contact__data">
          <h2 className="section__title">
            Contact Me
          </h2>

          <p className="contact__description">
            Let me know if you think I'd be a good asset
          </p>

          <button
            className="contact__button button"
            onClick={copyEmail}
          >
            {copied ? "Copied!" : "Copy email"}

            <i className="ri-file-copy-line"></i>

            <span className="contact__email">
              {email}
            </span>
          </button>
        </div>

        <div className="contact__content">
          <div className="contact__info">
            <div>
              <h3 className="contact__title">
                Email
              </h3>

              <address className="contact__address">
                {email}
              </address>
            </div>

            <div>
              <h3 className="contact__title">
                Location
              </h3>

              <address className="contact__address">
                Warsaw, Poland
              </address>
            </div>
          </div>

          <div className="contact__social">
            <h3 className="contact__title">
              Social Media
            </h3>

            <div className="contact__links">
              <a
                href="https://www.linkedin.com/in/danielmotejadded/"
                target="_blank"
                rel="noreferrer"
                className="contact__link"
              >
                Linkedin
                <i className="ri-arrow-right-up-long-line"></i>
              </a>

              <a
                href="https://github.com/danielMotejadded"
                target="_blank"
                rel="noreferrer"
                className="contact__link"
              >
                Github
                <i className="ri-arrow-right-up-long-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;