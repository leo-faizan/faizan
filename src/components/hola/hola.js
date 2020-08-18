import React, { Component } from "react";
import "./hola.css";
import Typical from "react-typical";

const Hola = () => {
  return (
    <React.Fragment>
      <div className="hola-full">
        <div className="hola">
          <h1> Hola! </h1>{" "}
          <p className="hey">
            Hey There👋!!! I am<strong> Faizan Hamid. </strong> I Design And
            Code Websites And Love{" "}
            <Typical
              steps={[
                "Photography",
                1000,
                "Videography",
                1000,
                "movies",
                1000,
                "Tech",
                1100,
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </p>{" "}
        </div>{" "}
        <div className="info">
          <p>
            {" "}
            📧 - Email <br />
            faizanhamid7860@gmail.com{" "}
          </p>{" "}
          <p>
            {" "}
            📱 - Mobile No. <br />
            +91 720 040 6877{" "}
          </p>{" "}
          <p>
            {" "}
            📄 - Address <br />
            Chennai, India{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </React.Fragment>
  );
};

export default Hola;
