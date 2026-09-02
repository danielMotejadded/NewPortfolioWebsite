function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer grid">
      <div className="blob-animate"></div>

      <div className="footer__copy">
        All Rights Reserved By{" "}
        <span>Daniel Motejadded</span>
      </div>

      <div className="footer__year">
        &#169; <span>{year}</span>
      </div>
    </footer>
  );
}

export default Footer;