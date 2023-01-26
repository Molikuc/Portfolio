import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Tools from "./components/Tools";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Tools />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
