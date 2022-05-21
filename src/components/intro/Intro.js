import React, { useEffect, useRef } from "react";
import { init } from "ityped";

import "./Intro.scss";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      strings: [
        "Software Developer",
        "Web App Developer",
        "Full Stack Developer",
        "Software Tester",
        "Debugger",
      ],
      backDelay: 1800,
      showCursor: true,
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="intro__left">
        <div className="intro__imageContainer">
          <img src="assets/myphoto.png" alt="" />
        </div>
      </div>
      <div className="intro__right">
        <div className="intro__rightWrapper">
          <h2>Hi there, I'm</h2>
          <h1>Khandokar Muhammad Mustafa Tahmid</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <a href="#portfolio">
            <img src="assets/arrow.png" alt="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
