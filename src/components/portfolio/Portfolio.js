import React from 'react';
import { useState, useEffect } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';

import './Portfolio.scss';

// import { featuredPortfolio, webPortfolio, mobilePortfolio, desktopPortfolio } from '../../data';
import { reactProjects, featuredProjects, javascriptProjects, nodeProjects, 
  mernProjects, javaProjects, cProjects, csharpProjects, aspProjects, gameProjects } from '../../mockData';

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { Link } from 'react-router-dom';

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
      id: "javascript",
      title: "JavaScript"
    },
    {
      id: "react",
      title: "ReactJS",
    },
    {
      id: "node",
      title: "NodeJS"
    },
    {
      id: "mern",
      title: "MERN Stack"
    },
    {
      id: "java",
      title: "Java"
    },
    {
      id: "c",
      title: "C Projects"
    },
    {
      id: "csharp",
      title: "C# Projects"
    },
    {
      id: "asp",
      title: "ASP.NET"
    },
    {
      id: "game",
      title: "Game Projects"
    },

  ]

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredProjects);
        setPageCount(Math.ceil(featuredProjects.length / projectPerPage));
        break;
      case "javascript":
        setData(javascriptProjects);
        setPageCount(Math.ceil(javascriptProjects.length / projectPerPage));
        break;
      case "react":
        setData(reactProjects);
        setPageCount(Math.ceil(reactProjects.length / projectPerPage));
        break;
      case "node":
        setData(nodeProjects);
        setPageCount(Math.ceil(nodeProjects.length / projectPerPage));
        break;
      case "mern":
        setData(mernProjects);
        setPageCount(Math.ceil(mernProjects.length / projectPerPage));
        break;
      case "java":
        setData(javaProjects);
        setPageCount(Math.ceil(javaProjects.length / projectPerPage));
        break;
      case "c":
        setData(cProjects);
        setPageCount(Math.ceil(cProjects.length / projectPerPage));
        break;
      case "csharp":
        setData(csharpProjects);
        setPageCount(Math.ceil(csharpProjects.length / projectPerPage));
        break;
      case "asp":
        setData(aspProjects);
        setPageCount(Math.ceil(aspProjects.length / projectPerPage));
        break;
      case "game":
        setData(gameProjects);
        setPageCount(Math.ceil(gameProjects.length / projectPerPage));
        break;
            
      default:
        setData(featuredProjects);
        setPageCount(Math.ceil(featuredProjects.length / projectPerPage));
        break;
    }
  }, [selected]);
  console.log(data);

  // make it component later
  const displayProject = data.slice(pageVisited, pageVisited + projectPerPage).map( d => {
    return (
      <Link to={`/projects/${d.basis}/${d.id}`} style={{textDecoration: "none"}}>
        <div className="portfolio__item">
          <img src={d.coverImg} alt={selected} />
          <h3>{d.title}</h3>
        </div>
      </Link>
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