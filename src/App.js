import React from "react";
import "./App.css";
import Hola from "./components/hola/hola";
import Code from "./components/codes/code";
import About from "./components/about/about";
import Navbar from "./components/navbar/navbar";
import { Paper } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const dark = useSpring({
    transform: darkMode ? "rotateY(0deg)" : "rotateY(180deg)",
    config: { duration: 200 },
  });

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <div className="first">
          <Navbar toggle={toggle} darkMode={dark} />
          <Hola />
        </div>
        <Code />
        <About />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
