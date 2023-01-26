import React from "react";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact">
      <h2>GET IN TOUCH</h2>
      <p>
        If you are interested in working together or if you have any questions,
        comments or just want to say hi, please feel free to contact me, my
        inbox is always open.
      </p>
      <a className="contact--button" href="mailto:ruiz.alexis1996@gmail.com">
        <FaPaperPlane />
        Let's connect
      </a>
    </section>
  );
}

export default Contact;
