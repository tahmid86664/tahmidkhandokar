import React,{ useState } from 'react';

import './Works.scss';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      "projectTitlte": "Portfolio",
      "projectType": "web",
      "clientName": "Maya Builders, Bangladesh",
      "coverImgSrc": "assets/works1.png",
      "link": "https://www.mayabuilders.com"
    },
    {
      "projectTitlte": "Android App",
      "projectType": "mobile",
      "clientName": "Maya Builders, Bangladesh",
      "coverImgSrc": "assets/works1.png",
      "link": "https://www.mayabuilders.com"
    },
    {
      "projectTitlte": "Desktop Software",
      "projectType": "desktop",
      "clientName": "Maya Builders, Bangladesh",
      "coverImgSrc": "assets/works1.png",
      "link": "https://www.mayabuilders.com"
    }
  ];

  const handleSlide = (slideDir) => {
    slideDir === "left" ? 
      setCurrentSlide(currentSlide > 0 ? currentSlide-1 : data.length-1)
      :
      setCurrentSlide(currentSlide < data.length-1 ? currentSlide+1 : 0)
  }

  return (
    <div className='works' id="works">
      <div 
        className="works__slider" 
        style={{transform: `translateX(-${currentSlide * 100}vw)`}}
      >
        {
          data.map(item => (
            <div className="works__container">
              <div className="works__item">
                <img src="assets/gradient1.png" alt="" className="works__itemBackground" />
                <div className="works__left">
                  <img src={item.coverImgSrc} alt="project cover" className="works__leftForground" />
                </div>

                <div className="works__right">
                  <div className="works__rightInfoContainer">
                    <div className="works__rightIconContainer">
                      <img src="assets/web-icon.png" alt="icon" />
                    </div>
                    <h2>Project</h2>
                    <span>{item.projectTitlte}</span>
                    <h2>Client</h2>
                    <span>{item.clientName}</span>
                    <a href={item.link} className="works__button">Visit</a>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
        
      </div>
      <ArrowBackIosIcon className="works__leftSliderButton" onClick={() => handleSlide("left")} />
      <ArrowForwardIosIcon className="works__rightSliderButton" onClick={() => handleSlide("right")} />
    </div>
  );
}


export default Works;