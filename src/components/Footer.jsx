import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaDribbble,
  FaHeart,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer>
      <div className="footer--content">
        <a href="https://www.linkedin.com/in/alexisruuiz/" target="_blank">
          <FaLinkedin className="footer--socials" />
        </a>
        <a href="https://github.com/Molikuc" target="_blank">
          <FaGithub className="footer--socials" />
        </a>
        <a href="https://www.instagram.com/alexisruizstudio/" target="_blank">
          <FaInstagram className="footer--socials" />
        </a>
        <a href="https://dribbble.com/Polikuc" target="_blank">
          <FaDribbble className="footer--socials" />
        </a>
        <a href="mailto:ruiz.alexis1996@gmail.com">
          <FiMail className="footer--socials" />
        </a>
      </div>
      <p>
        Designed & Built with <FaHeart className="heart" /> by Alexis RUIZ.
      </p>
    </footer>
  );
}

export default Footer;
