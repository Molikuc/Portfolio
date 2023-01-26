import React from "react";
import { FaDribbble, FaGithub } from "react-icons/fa";
import { SiDevdotto } from "react-icons/si";

function Project() {
  return (
    <section className="project">
      <h2>Look into my works</h2>
      <p>Here are a few projects I've done!</p>
      <div className="project--developer">
        <div>
          <p className="project--title">SKETCH</p>
          <div className="project--overlay"></div>
          <div className="anime--button">
            <a href="https://google.com" target="_blank">
              Click
            </a>
          </div>
        </div>
        <div>
          <p className="project--title">Tic Tac Toe</p>
          <div className="project--overlay"></div>
          <div className="anime--button">
            <a href="https://google.com" target="_blank">
              Click
            </a>
          </div>
        </div>
        <div>
          <p className="project--title">Weather (WIP)</p>
          <div className="project--overlay"></div>
          <div className="anime--button">
            <a href="https://google.com" target="_blank">
              Click
            </a>
          </div>
        </div>
        <a
          className="project--button"
          href="https://github.com/Molikuc"
          target="_blank">
          <FaGithub className="icon-size_button" /> See more on GitHub
        </a>
      </div>
      <div className="project--design">
        <div>
          <p className="project--title">LOGO1</p>
          <div className="project--overlay"></div>
          <div className="anime--button">
            <a href="https://google.com" target="_blank">
              Click
            </a>
          </div>
        </div>
        <div>
          <p className="project--title">LOGO2</p>
          <div className="project--overlay"></div>
          <div className="anime--button">
            <a href="https://google.com" target="_blank">
              Click
            </a>
          </div>
        </div>
        <div>
          <p className="project--title">LOGO3</p>
          <div className="project--overlay"></div>
          <div className="anime--button">
            <a href="https://google.com" target="_blank">
              Click
            </a>
          </div>
        </div>
        <a
          className="project--button"
          href="https://dribbble.com/Polikuc"
          target="_blank">
          <FaDribbble className="icon-size_button" /> See more on Dribbble
        </a>
      </div>
      <div className="project--articles">
        <div>I make articles of my coding journey</div>
        <a
          className="project--button"
          href="https://dev.to/molikuc"
          target="_blank">
          <SiDevdotto className="icon-size_button" />
          link to DEV.to
        </a>
      </div>
    </section>
  );
}

export default Project;
