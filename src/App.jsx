import React from "react";
import Navbar from "./components/Navbar";
import ProfolioHome from './components/PortfolioHome'
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <ProfolioHome />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
}

export default App;
