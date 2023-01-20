import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <header>
      <div className="row">
        <div className="column header--name">Alexis RUIZ</div>
        <div className="column">
          <input type="checkbox" id="check" className="header--check" />
          <label for="check" className="header--button">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <div className="header--menu">
            <a
              className="header--socials"
              href="https://www.linkedin.com/in/alexisruuiz/"
              target="_blank">
              <FaLinkedin />
            </a>
            <a
              className="header--socials"
              href="https://www.instagram.com/alexisruizstudio/"
              target="_blank">
              <FaInstagram />
            </a>
            <a
              className="header--socials"
              href="https://github.com/Molikuc"
              target="_blank">
              <FaGithub />
            </a>
            <a
              href="mailto:ruiz.alexis1996@gmail.com"
              className="header--email">
              ruiz.alexis1996@gmail.com
            </a>
            <a
              href="mailto:ruiz.alexis1996@gmail.com"
              className="header--email_button">
              Contact Me!
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
