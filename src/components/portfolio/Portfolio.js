import React from 'react';
import { useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';

import './Portfolio.scss';

import { featuredPortfolio, webPortfolio, mobilePortfolio, desktopPortfolio } from '../../data';
import { useEffect } from 'react';

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
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
      title: "Desktop App"
    }
  ]

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "webApp":
        setData(webPortfolio);
        break;
      case "mobileApp":
        setData(mobilePortfolio);
        break;
      case "desktopApp":
        setData(desktopPortfolio);
        break;
            
      default:
        setData(featuredPortfolio);
        break;
    }
  }, [selected]);

  return (
    <div className='portfolio' id="portfolio">
      <h1>Projects</h1>
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
      <div className="portfolio__itemContainer">
        {
          data.map(d => (
            <div className="portfolio__item">
              <img src={d.img} alt={selected} />
              <h3>{d.title}</h3>
            </div>
          ))
        }
      </div>
    </div>
  );
}


export default Portfolio;