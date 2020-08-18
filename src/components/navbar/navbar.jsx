import React, { useState } from "react";
import "./navbar.css";
import logo from "./logo.svg";
import { useSpring, animated } from "react-spring";

const Navbar = () => {
  const [isToggle, setToggle] = useState(true);
  const dark = useSpring({
    opacity: isToggle ? 1 : 1,
    transform: isToggle ? "rotateY(0deg)" : "rotateY(180deg)",
    config: { duration: 200 },
  });

  const toggle = () => {
    setToggle(!isToggle);
  };

  return (
    <React.Fragment>
      <div className="nav">
        <img className="logo" src={logo} alt="nothing" />
        <animated.img
          style={dark}
          onClick={() => toggle()}
          className="dark"
          src={require("./dark.png")}
          alt=""
        />
      </div>
    </React.Fragment>
  );
};

export default Navbar;
