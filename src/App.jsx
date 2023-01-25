import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Tools from "./components/Tools";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Tools />
      </main>
    </div>
  );
}

export default App;
