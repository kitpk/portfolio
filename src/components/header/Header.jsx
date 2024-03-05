import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-scroll';

const Header = () => {
  /*=============== Change background Header ===============*/
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
  });
  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="home" spy={true} className="nav__logo">
          Prakit
        </Link>

        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link
                to="home"
                activeClass="active-link"
                spy={true}
                className="nav__link"
              >
                <i className="uil uil-estate nav__icon"></i>
                Home
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="about"
                activeClass="active-link"
                spy={true}
                className="nav__link"
              >
                <i className="uil uil-user nav__icon"></i>
                About
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="skills"
                activeClass="active-link"
                spy={true}
                className="nav__link"
              >
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="qualification"
                activeClass="active-link"
                spy={true}
                className="nav__link"
              >
                <i className="uil uil-scenery nav__icon"></i>
                Qualification
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="portfolio"
                activeClass="active-link"
                spy={true}
                className="nav__link"
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Portfolio
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="contact"
                activeClass="active-link"
                spy={true}
                className="nav__link"
              >
                <i className="uil uil-message nav__icon"></i>
                Contact
              </Link>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
