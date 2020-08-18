import React from "react";
import "./App.css";
import Hola from "./components/hola/hola";
import Code from "./components/codes/code";
import About from "./components/about/about";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <React.Fragment>
      <div className="first">
        <Navbar />
        <Hola />
      </div>
      <Code />
      <About />
    </React.Fragment>
  );
}

export default App;
