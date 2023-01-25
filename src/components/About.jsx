import React from "react";
import profile from "../images/myself.jpg";

function About() {
  return (
    <section className="about">
      <h2>About Me!</h2>
      <div>
        <p>
          Hello! My name is Alexis and I love creating things for internet, I
          have a strong understanding of HTML, CSS, Javascript.
          <br />I studied 3 years of Web Design but more globally every kind of
          jobs around internet for example, graphic design, video editing and
          more.
          <br /> I started creating some photomontage when I was in high school
          for fun. I have experience in creating small projects with Javascript
          but also React.
        </p>
        <p>
          I have a passion for art and creative things in any ways. I enjoy
          movies and video games. And during my free time I love to learn new
          things like drawing or learning a new languages.
        </p>
        <p>
          I traveled a lot those past few years and I truly believe that those
          experiences change me in a personnal and creative way.
          <br /> I'm always looking for new ways to push my boundaries of what's
          possible. If you are looking for someone to bring your ideas to life,
          please don't hesitate to contact me.
        </p>
      </div>
      <div className="about--image">
        <img src={profile} alt="Image of Myself" />
      </div>
    </section>
  );
}

export default About;
