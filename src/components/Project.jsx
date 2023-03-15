import React from "react";
import { FaDribbble, FaGithub } from "react-icons/fa";
import { SiDevdotto } from "react-icons/si";
import UpToss from "../images/UpToss.png";
import Drive from "../images/Drive.png";
import Lincoln from "../images/Lincoln_National_Park.png";
import TicTacToe from "../images/tictactoe.png";
import UrlShortener from "../images/shortener.png";
import Weather from "../images/WeatherApp.png";

function Project() {
  return (
    <section className="project">
      <h2>Look into my works</h2>
      <p>Here are a few projects I've done!</p>
      <div className="project--developer">
        <div>
          <img src={UrlShortener} className="project--image" />
          <p className="project--title">Simple URL shortener</p>
          <div className="project--overlay"></div>
          <div className="anime--button">
            <a href="https://molikuc.github.io/urlShortener/" target="_blank">
              Click
            </a>
          </div>
        </div>
        <div>
          <img src={TicTacToe} className="project--image" />
          <p className="project--title">Tic Tac Toe game</p>
          <div className="project--overlay"></div>
          <div className="anime--button">
            <a href="https://molikuc.github.io/Tictactoe/" target="_blank">
              Click
            </a>
          </div>
        </div>
        <div>
          <img src={Weather} className="project--image" />
          <p className="project--title">Weather App</p>
          <div className="project--overlay"></div>
          <div className="anime--button">
            <a href="https://molikuc.github.io/WeatherApp/" target="_blank">
              Click
            </a>
          </div>
        </div>
        <a
          className="project--button"
          href="https://github.com/Molikuc"
          target="_blank"
        >
          <FaGithub className="icon-size_button" /> See more on GitHub
        </a>
      </div>
      <div className="project--design">
        <div>
          <img src={UpToss} className="project--image" />
          <p className="project--title">Logo "UpToss" made for a challenge</p>
          <div className="project--overlay"></div>
          <div className="anime--button">
            <a
              href="https://dribbble.com/shots/19705425-Daily-Logo-Challenge-Day-26-Paper-Airplane"
              target="_blank"
            >
              Click
            </a>
          </div>
        </div>
        <div>
          <img src={Drive} className="project--image" />
          <p className="project--title">Logo "Drive" made for a challenge</p>
          <div className="project--overlay"></div>
          <div className="anime--button">
            <a
              href="https://dribbble.com/shots/19723888-Daily-Logo-Challenge-Day-29-Rideshare-Car-Service"
              target="_blank"
            >
              Click
            </a>
          </div>
        </div>
        <div>
          <img src={Lincoln} className="project--image" />
          <p className="project--title">Logo for a fictional National Park</p>
          <div className="project--overlay"></div>
          <div className="anime--button">
            <a
              href="https://dribbble.com/shots/19666137-Daily-Logo-Challenge-Day-20-National-Park"
              target="_blank"
            >
              Click
            </a>
          </div>
        </div>
        <a
          className="project--button"
          href="https://dribbble.com/Polikuc"
          target="_blank"
        >
          <FaDribbble className="icon-size_button" /> See more on Dribbble
        </a>
      </div>
      <div className="project--articles">
        <div>I make articles of my coding journey</div>
        <a
          className="project--button"
          href="https://dev.to/molikuc"
          target="_blank"
        >
          <SiDevdotto className="icon-size_button" />
          link to DEV.to
        </a>
      </div>
    </section>
  );
}

export default Project;
