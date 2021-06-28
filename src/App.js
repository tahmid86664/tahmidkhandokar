import React, { useState } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';

import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Blogs from './components/blogs/Blogs';
// import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import MenuBar from './components/menubar/MenuBar';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MenuBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        {/* works will be the recent works after making some production build */}
        {/* <Works />  */}
        <Testimonials />
        <Blogs />
        <About />
        <Contact />
      </div>
    </div>
  );
}


export default App;
