import React from "react";
import { FaPaintBrush, FaCode } from "react-icons/fa";

function Tools() {
  return (
    <section className="tools">
      <h2>What I do</h2>
      <div className="tools--container">
        <div className="tools--design">
          <FaPaintBrush className="icon" />
          <h3>Design</h3>
          <p>
            I like creating clean and minimal design, interesting interactions
            and arts.
          </p>
          <div>
            <p className="blue bold">What I can do:</p>
            <p>Logos, UI, Web</p>
          </div>
          <div>
            <p className="blue bold">Design Tools</p>
            <ul className="tools--list">
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Figma</li>
              <li>Procreate</li>
            </ul>
          </div>
        </div>
        <div className="tools--frontend-developer">
          <FaCode className="icon" />
          <h3>Frontend Developer</h3>
          <p>I like coding things and turning your ideas into life</p>
          <div className="frontend--canDoList">
            <p className="blue bold">What I can do:</p>
            <p>HTML, CSS, Javascript</p>
          </div>
          <div>
            <p className="blue bold">Developer Tools</p>
            <ul className="tools--list">
              <li>React</li>
              <li>Tailwind</li>
              <li>Github</li>
              <li>Wordpress</li>
              <li>Bootstrap</li>
              <li>VS Code</li>
              <li>Vite</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tools;
