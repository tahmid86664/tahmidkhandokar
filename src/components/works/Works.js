import React from 'react';

import './Works.scss';

const Works = () => {
  return (
    <div className='works' id="works">
      <div className="works__slider">
        <div className="works__container">
          <div className="works__item">
            <img src="assets/gradient1.png" alt="" className="works__itemBackground" />
            <div className="works__left">
              <img src="assets/works1.png" alt="project cover" className="works__leftForground" />
            </div>

            <div className="works__right">
              <div className="works__rightInfoContainer">
                <div className="works__rightIconContainer">
                  <img src="assets/web-icon.png" alt="icon" />
                </div>
                <h2>Project</h2>
                <span>Portfolio</span>
                <h2>Client</h2>
                <span>Maya Builders, Bangladesh</span>
                <a href="https://www.mayabuilders.com" className="works__button">Visit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Works;