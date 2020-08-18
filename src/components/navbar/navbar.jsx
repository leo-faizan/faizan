import React, { useState } from "react";
import "./navbar.css";
import logo from "./logo.svg";
import { useSpring, animated } from "react-spring";

const Navbar = (props) => {
  console.log(props.darkMode);

  return (
    <div className="nav">
      <img className="logo" src={logo} alt="nothing" />
      <animated.img
        onClick={() => props.toggle()}
        style={props.darkMode}
        className="dark"
        src={require("./dark.png")}
        alt=""
      />
    </div>
  );
};

export default Navbar;
