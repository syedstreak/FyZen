import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;