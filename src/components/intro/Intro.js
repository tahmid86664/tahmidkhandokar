import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';

import './Intro.scss';

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      strings: ["Developer", "Designer", "Debuger"],
      backDelay: 1700,
      showCursor: true
    })
  }, []);

  return (
    <div className='intro' id="intro">
      <div className="intro__left">
        <div className="intro__imageContainer">
          <img src="assets/myphoto2.png" alt="" />
        </div>
      </div>
      <div className="intro__right">
        <div className="intro__rightWrapper">
          <h2>Hi there, I'm</h2>
          <h1>Kh. Md. Mustafa Tahmid</h1>
          <h3>Software <span ref={textRef}></span></h3>
          <a href="#portfolio">
            <img src="assets/arrow.png" alt="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
}


export default Intro;