import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Tools from "./components/Tools";
import Project from "./components/Project";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Tools />
        <Project />
      </main>
    </div>
  );
}

export default App;
