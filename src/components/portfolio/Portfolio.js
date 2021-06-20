import React from 'react';

import './Portfolio.scss';

const Portfolio = () => {
  const projectTypes = [
    {
      id: "feature",
      title: "Featured"
    },
    {
      id: "webApp",
      title: "Web App"
    },
    {
      id: "mobileApp",
      title: "Mobile App",
    },
    {
      id: "desktopApp",
      title: "Desktop App"
    }
  ]

  return (
    <div className='portfolio' id="portfolio">
      <h1>Projects</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Desktop Software</li>
      </ul>
      <div className="portfolio__itemContainer">
        <div className="portfolio__item">
          <img src="assets/project-demo.png" alt="project demo" />
          <h3>Project title</h3>
        </div>
        <div className="portfolio__item">
          <img src="assets/project-demo.png" alt="project demo" />
          <h3>Project title</h3>
        </div>
        <div className="portfolio__item">
          <img src="assets/project-demo.png" alt="project demo" />
          <h3>Project title</h3>
        </div>
        <div className="portfolio__item">
          <img src="assets/project-demo.png" alt="project demo" />
          <h3>Project title</h3>
        </div>
        <div className="portfolio__item">
          <img src="assets/project-demo.png" alt="project demo" />
          <h3>Project title</h3>
        </div>
        <div className="portfolio__item">
          <img src="assets/project-demo.png" alt="project demo" />
          <h3>Project title</h3>
        </div>
      </div>
    </div>
  );
}


export default Portfolio;