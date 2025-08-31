import React from "react";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";





function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About/>
      <Skills/>
      <Projects/>
      <Certifications />
      <Contact/>
    </div>
  );
}

export default App;

