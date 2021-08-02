import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/footer';
import './Project.scss';
import { ChevronRight, ChevronLeft, Code, Language, Videocam } from '@material-ui/icons';

const Project = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="project">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} project />
      <div className="project__wrapper">
        <div className="project__top">
          <div className="project__topLeft">
            <img src="/assets/projects/monsters-rolodex/1.png" alt="project img" className="project__img" />
            <span className="project__imgSlideButton left">
              <ChevronLeft />
            </span>
            <span className="project__imgSlideButton right">
              <ChevronRight />
            </span>
            <div className="project__imgSliderDots">
              <div className="project__imgSliderDot"></div>
              <div className="project__imgSliderDot"></div>
              <div className="project__imgSliderDot"></div>
            </div>
          </div>
          <div className="project__topRight">
            <h3 className="project__title">Monosters Rolodex with ReactJS</h3>
            <div className="project__showcaseLinks">
              <div className="project__showcaseLink">
                <Language />
                <a href="https://tahmid86664.github.io/monsters-rolodex/">See in live</a>
              </div>
              <div className="project__showcaseLink">
                <Code />
                <a href="https://github.com/tahmid86664/monsters-rolodex-code">Source Code</a>                
              </div>
              <div className="project__showcaseLink">
                <Videocam />
                <a href="https://www.youtube.com/">See video on youtube</a>         
              </div>
            </div>
          </div>
        </div>
        <div className="project__bottom">
          <div className="project__bottomLeft">
            <h3>Project Details</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Ac odio tempor orci dapibus ultrices. Sodales ut eu sem integer vitae justo eget magna fermentum. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Nunc scelerisque viverra mauris in aliquam sem. Amet volutpat consequat mauris nunc congue. Ornare massa eget egestas purus viverra accumsan in nisl. Tincidunt dui ut ornare lectus sit amet est. Et molestie ac feugiat sed. Ornare arcu dui vivamus arcu felis bibendum. Amet volutpat consequat mauris nunc congue nisi vitae. Lacus vestibulum sed arcu non odio. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Nec ullamcorper sit amet risus nullam eget felis eget. A diam maecenas sed enim ut sem viverra aliquet. Justo laoreet sit amet cursus sit.
          </div>
          <div className="project__bottomRight">
            <h3>Related Projects</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default Project;