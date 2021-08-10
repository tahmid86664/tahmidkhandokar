import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
// import Blogs from './components/blogs/Blogs';
// import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import MenuBar from './components/menubar/MenuBar';
import Project from './pages/project/Project';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
    <div className="app">
      <Switch>
        <Route exact path="/" >
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MenuBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        {/* works will be the recent works after making some production build */}
        {/* <Works />  */}
        <Testimonials />
        {/* <Blogs /> */}
        <About />
        <Contact />
      </div>
      </Route>
      <Route path="/projects/:basis/:id">
        <Project menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}


export default App;
