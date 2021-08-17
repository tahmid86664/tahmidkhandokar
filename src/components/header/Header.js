import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';

const Header = ({ menuOpen, setMenuOpen, project }) => {
  return (
    <div className={"header " + (menuOpen && "active")}>
      <div className="header__wrapper">
        <div className="header__left">
          <a href="/" className="header__logo">Dev.Tahmid</a>
          <div className="header__contactInfo">
            <div className="header__contactInfoIcon">
              <a href="tel:+8801521429588">
                <PersonIcon />
                <span>+88 01521 429588</span>
              </a>
            </div>
            <div className="header__contactInfoIcon">
              <a href="mailto:tahmidkhandokar82@gmail.com?subject=Talk with Tahmid" target="_blank" rel="noreferrer">
                <MailIcon />
                <span>tahmidkhandokar82@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        <div className="header__right">
          {
            !project ? (
              <div className="header__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span className="header__hamburgerLine1"></span>
                <span className="header__hamburgerLine2"></span>
                <span className="header__hamburgerLine3"></span>
              </div>
            ) : (
              <Link to="/" style={{ textDecoration: "none" }}> 
                <HomeIcon className="header__homeButton" /> 
              </Link>
            )
          }
          
        </div> 
      </div>
    </div>
  )
}


export default Header;