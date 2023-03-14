import logo from "./logo.svg";
import "./App.css";
import Avatar from "./Avatar.png";
import AvatarBlink from "./AvatarBlink.png";
import Github from "./Github.png";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

function App() {
  const [blink, setBlink] = useState(false);
  return (
    <div className="App">
      <div className="floating-text">
        <p className="main-title">Francisco Pautt</p>
        <p>Currently building Mobile apps in MUTA</p> <br />
        <p>Disponible para pequeños proyectos.</p>
        <p
          onClick={() => {
            window.open(
              "mailto:franjpautt@gmail.com?subject=Subject&body=Body%20goes%20here"
            );
          }}
          style={{
            textDecoration: "underline",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          franjpautt@gmail.com
        </p>
      </div>
      <header className="App-header">
        <TypeAnimation
          style={{
            paddingLeft: 40,
            paddingRight: 40,
          }}
          className="top-text"
          // Same String at the start will only be typed once, initially
          sequence={[
            "Scalable App developer with React",
            1000,
            "Scalable App developer with Javascript",
            1000,
            "Scalable App developer with React Native",
            1000,
          ]}
          speed={50} // Custom Speed from 1-99 - Default Speed: 40
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
        />
        {/* <h1 className='top-text'>Construyo apps escalables con React</h1> */}
        {/* <div className="imgs-wrapper"> */}
        <img
          onClick={() => {
            window.open("https://github.com/franciscopautt", "_blank");
          }}
          className="github-icon"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Click para visitar mi Github"
          src={Github}
        />
        <img
          onMouseOver={() => setBlink(true)}
          onMouseOut={() => setBlink(false)}
          className="avatar-img"
          src={blink ? AvatarBlink : Avatar}
        />
        {/* </div> */}
      </header>
      <div className="App-body">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
            paddingTop: 20,
          }}
        >
          <p className="projects-text">💻My projects</p>
          <p style={{ visibility: "hidden" }}>My projects</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
            paddingTop: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="square" />
            <div style={{ width: 255, marginLeft: 20 }}>
              <p className="project-title">Proyecto</p>
              <p className="project-subtitle">
                Descripción de dos lineas para el proyecto que se desarrolló.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="square" />
            <div style={{ width: 255, marginLeft: 20 }}>
              <p className="project-title">Proyecto</p>
              <p className="project-subtitle">
                Descripción de dos lineas para el proyecto que se desarrolló.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
            paddingTop: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="square" />
            <div style={{ width: 255, marginLeft: 20 }}>
              <p className="project-title">Proyecto</p>
              <p className="project-subtitle">
                Descripción de dos lineas para el proyecto que se desarrolló.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="square" />
            <div style={{ width: 255, marginLeft: 20 }}>
              <p className="project-title">Proyecto</p>
              <p className="project-subtitle">
                Descripción de dos lineas para el proyecto que se desarrolló.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
            paddingTop: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="square" />
            <div style={{ width: 255, marginLeft: 20 }}>
              <p className="project-title">Proyecto</p>
              <p className="project-subtitle">
                Descripción de dos lineas para el proyecto que se desarrolló.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="square" />
            <div style={{ width: 255, marginLeft: 20 }}>
              <p className="project-title">Proyecto</p>
              <p className="project-subtitle">
                Descripción de dos lineas para el proyecto que se desarrolló.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
}

export default App;
