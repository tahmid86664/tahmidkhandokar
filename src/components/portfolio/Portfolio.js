import React from 'react';
import { useState, useEffect } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';

import './Portfolio.scss';

import { featuredPortfolio, webPortfolio, mobilePortfolio, desktopPortfolio } from '../../data';

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);
  const projectPerPage = 6;
  const pageVisited = pageNumber * projectPerPage;
  const [pageCount, setPageCount] = useState(0);

  const portfolioTypes = [
    {
      id: "featured",
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
      title: "Desktop Software"
    }
  ]

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        setPageCount(Math.ceil(featuredPortfolio.length / projectPerPage));
        break;
      case "webApp":
        setData(webPortfolio);
        setPageCount(Math.ceil(webPortfolio.length / projectPerPage));
        break;
      case "mobileApp":
        setData(mobilePortfolio);
        setPageCount(Math.ceil(mobilePortfolio.length / projectPerPage));
        break;
      case "desktopApp":
        setData(desktopPortfolio);
        setPageCount(Math.ceil(desktopPortfolio.length / projectPerPage));
        break;
            
      default:
        setData(featuredPortfolio);
        setPageCount(Math.ceil(featuredPortfolio.length / projectPerPage));
        break;
    }
  }, [selected]);

  const displayProject = data.slice(pageVisited, pageVisited + projectPerPage).map( d => {
    return (
      <div className="portfolio__item">
        <img src={d.img} alt={selected} />
        <h3>{d.title}</h3>
      </div>
    );
  });

  const handleRightClick = () => {
    setPageNumber(pageNumber + 1);
  }

  const handleLeftClick = () => {
    setPageNumber(pageNumber - 1);
  }

  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {
          portfolioTypes.map(portfolio => 
            <PortfolioList 
              key={portfolio.id} 
              id={portfolio.id} 
              title={portfolio.title} 
              active={selected === portfolio.id} 
              setSelected={setSelected} 
            />  
          )
        }
      </ul>
      {/* { displayProject } */}
      <div className="portfolio__itemContainer">
        {
          displayProject
        }
      </div>
      <div className="portfolio__buttonContainer">
        {
          data.length <= projectPerPage ? 
          (
            <div></div>
          ) : (
            pageNumber === 0 ? 
            (
              <div className="portfolio__nextButton" onClick={handleRightClick}>
                <KeyboardArrowRightIcon />
              </div>
            ) : (
              pageNumber === pageCount-1 ? (
                <div className="portfolio__nextButton" onClick={handleLeftClick}>
                  <KeyboardArrowLeftIcon />
                </div>
              ) :(
                <>
                  <div className="portfolio__nextButton" onClick={handleLeftClick}>
                    <KeyboardArrowLeftIcon />
                  </div>
                  <div className="portfolio__nextButton" onClick={handleRightClick}>
                    <KeyboardArrowRightIcon />
                  </div>
                </>
              )       
            )
          )
        }
      </div>
    </div>
  );
}


export default Portfolio;