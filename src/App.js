import logo from "./logo.svg";
import "./App.css";
import Avatar from "./Avatar.png";
import AvatarBlink from "./AvatarBlink.png";
import Github from "./Github.png";
import Kamio from "./icon-kamio.png";
import Ltrans from "./ltrans.jpg";
import Muta from "./mutaworld.jpg";
import Fuvadis from "./Fuvadis.jpg";
import Arl from "./ARL.jpg";
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
            "Developing scalable apps with React",
            1000,
            "Developing scalable apps with Javascript",
            1000,
            "Developing scalable apps with React Native",
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
            window.open("https://github.com/franpautt27", "_blank");
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
         className="projects-list"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div  data-tooltip-id="muta-tooltip"
          data-tooltip-content="MUTA Generator App" onClick={() => {
            window.open("https://play.google.com/store/apps/details?id=com.muta&hl=es_CO&gl=US&pli=1", "_blank");
          }} className="square">
            <img src={Muta} style={{height: "100%"}} />
            </div>
            <div style={{ width: 255, marginLeft: 20 }}>
              <p className="project-title">MUTA Generator App</p>
              <p className="project-subtitle">
                Currently developing the mobile version of the Clients Recycling Platform
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
            <div data-tooltip-id="kamio-tooltip"
          data-tooltip-content="Kamio App" onClick={() => {
            window.open("http://www.rts.com.co/", "_blank");
          }} className="square">
            <img src={Kamio} style={{height: "100%"}} />
            </div>
            <div style={{ width: 255, marginLeft: 20 }}>
              <p className="project-title">Kamio App</p>
              <p className="project-subtitle">
              Social media application focused on colombian truckers
              </p>
            </div>
          </div>
        </div>

        <div
          className="projects-list"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div data-tooltip-id="ltrans-tooltip"
          data-tooltip-content="L-trans web page" onClick={() => {
            window.open("http://l-trans.co/", "_blank");
          }}  className="square" >
            <img src={Ltrans} style={{height: "100%"}} />
            </div>
            <div style={{ width: 255, marginLeft: 20 }}>
              <p className="project-title">L-trans web page</p>
              <p className="project-subtitle">
              Design and Development of the Ltrans web page
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
            <div  data-tooltip-id="fuvadis-tooltip"
          data-tooltip-content="FUVADIS" onClick={() => {
            window.open("http://manglar.uninorte.edu.co/handle/10584/9610#page=1", "_blank");
          }}  className="square">
            <img src={Fuvadis} style={{height: "100%"}} />
            </div>
            <div style={{ width: 255, marginLeft: 20 }}>
              <p className="project-title">FUVADIS</p>
              <p className="project-subtitle">
              Development of a Web platform for the attention process
              </p>
            </div>
          </div>
        </div>

        <div
          className="projects-list"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div data-tooltip-id="arl-tooltip"
          data-tooltip-content="COVID-19 Forecast project" onClick={() => {
            window.open("https://analyticsrlun.shinyapps.io/projectcovid/", "_blank");
          }}  className="square">
            <img src={Arl} style={{height: "100%"}} />
            </div>
            <div  style={{ width: 255, marginLeft: 20 }}>
              <p className="project-title">COVID-19 Forecast project</p>
              <p className="project-subtitle">
                Project in order to predict the risk of dying for Covid patients
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
            <div data-tooltip-id="hackathon-tooltip"
          data-tooltip-content="Laser Pulse Hackathon 2020" onClick={() => {
            window.open("https://chimerical-palmier-b8c0c1.netlify.app/", "_blank");
          }}  className="square" style={{overflow: "hidden"}}>
            <img src="https://laserpulse.org/wp-content/uploads/2021/01/hackathon-social-small.png" style={{ height: "100%"}} />
            </div>
            <div style={{ width: 255, marginLeft: 20 }}>
              <p className="project-title">Laser Pulse Hackathon 2020</p>
              <p className="project-subtitle">
                Earned the 5th place on a Data analysis and visualization competition
              </p>
            </div>
          </div>
        </div>
      </div>
      <Tooltip id="my-tooltip" />
      <Tooltip id="muta-tooltip" />
      <Tooltip id="kamio-tooltip" />
      <Tooltip id="ltrans-tooltip" />
      <Tooltip id="fuvadis-tooltip" />
      <Tooltip id="arl-tooltip" />
      <Tooltip id="hackathon-tooltip" />
    </div>
  );
}

export default App;
