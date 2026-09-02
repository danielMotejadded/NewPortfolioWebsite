function Header() {
  return (
    <header className="header" id="header">
      <div className="blob-animate"></div>

      <nav className="nav container">
        <a href="#" className="nav__logo">
          Home
        </a>

        <div className="nav__menu">
          <ul className="nav__list">
            <li>
              <a href="#about" className="nav__link">
                About Me
              </a>
            </li>

            <li>
              <a href="#projects" className="nav__link">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;