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
          <a href="#intro">Home</a>
        </li>
        <li onClick={handleOpenMenu}>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li onClick={handleOpenMenu}>
          <a href="#works">Works</a>
        </li> */}
        <li onClick={handleOpenMenu}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={handleOpenMenu}>
          <a href="#blogs">Blogs</a>
        </li>
        <li onClick={handleOpenMenu}>
          <a href="#about">About Me</a>
        </li>
        <li onClick={handleOpenMenu}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}


export default MenuBar;