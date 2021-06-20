import React from 'react';
// import { Link } from 'react-scroll';

import './Header.scss';

import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"header " + (menuOpen && "active")}>
      <div className="header__wrapper">
        <div className="header__left">
          <a href="#intro" className="header__logo">Dev.Tahmid</a>
          <div className="header__contactInfo">
            <div className="header__contactInfoIcon">
              <PersonIcon />
              <span>+88 01521 429588</span>
            </div>
            <div className="header__contactInfoIcon">
              <MailIcon />
              <span>tahmidkhandokar82@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="header__right">
          <div className="header__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="header__hamburgerLine1"></span>
            <span className="header__hamburgerLine2"></span>
            <span className="header__hamburgerLine3"></span>
          </div>
        </div> 
      </div>
    </div>
  )
}


export default Header;