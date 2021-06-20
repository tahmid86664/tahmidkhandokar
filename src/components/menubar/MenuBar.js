import React from 'react'

import './MenuBar.scss';

const MenuBar = ({ menuOpen, setMenuOpen }) => {
  const handleOpenMenu = () => {
    setMenuOpen(false);
  }

  return (
    <div className={'menuBar ' + (menuOpen && "active")}>
      <ul>
        <li onClick={handleOpenMenu}>
          <a href="#intro">Intro</a>
        </li>
        <li onClick={handleOpenMenu}>
          <a href="#portfolio">Projects</a>
        </li>
        <li onClick={handleOpenMenu}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={handleOpenMenu}>
          <a href="#works">Works</a>
        </li>
        <li onClick={handleOpenMenu}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}


export default MenuBar;