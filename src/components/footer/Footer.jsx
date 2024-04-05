import React from 'react';
import './footer.css';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Prakit</h1>

        <ul className="footer__list">
          <li>
            <Link to="about" spy={true} className="footer__link">
              About
            </Link>
          </li>

          <li>
            <Link to="skills" spy={true} className="footer__link">
              Skills
            </Link>
          </li>

          <li>
            <Link to="qualification" spy={true} className="footer__link">
              Qualification
            </Link>
          </li>

          <li>
            <Link to="experience" spy={true} className="footer__link">
            Experience
            </Link>
          </li>

          <li>
            <Link to="portfolio" spy={true} className="footer__link">
              Portfolio
            </Link>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/prakit-muennamnor-51a96229b/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>

          <a
            href="https://github.com/kitpk"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          Design inspired by Cryptical Coder YouTube.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
