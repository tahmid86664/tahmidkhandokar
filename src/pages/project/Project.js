import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/footer';
import './Project.scss';
import { ChevronRight, ChevronLeft, Code, Language, Videocam, DesktopWindows, PhoneAndroid, PhoneIphone } from '@material-ui/icons';
import { reactProjects } from '../../mockData';

const Project = ({ menuOpen, setMenuOpen, project }) => {

  const handlePlatformIcon = (platform) => {
    switch (platform) {
      case "Web":
        return (<Language />)
      case "Desktop":
        return (<DesktopWindows />)
      case "Android":
        return (<PhoneAndroid />)
      case "IOS":
        return (<PhoneIphone />)
      default:
        return (<Language />)
    }
  }

  return (
    <div className="project">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} project />
      <div className="project__wrapper">
        <div className="project__top">
          <div className="project__topLeft">
            {/* {reactProject[0].images.map(imgUrl => 
                <img src={imgUrl} alt="project img" className="project__img" />
              )
            } */}
            <img src={reactProjects[0].images[0]} alt="project img" className="project__img" />
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
            <h3 className="project__title">{reactProjects[0].title}</h3>
            <div className="project__showcaseLinks">
              <div className="project__showcaseLink">
                <Language />
                <a href={reactProjects[0].liveUrl}>See in live</a>
              </div>
              <div className="project__showcaseLink">
                <Code />
                <a href={reactProjects[0].sourceCodeUrl}>Source Code</a>                
              </div>
              <div className="project__showcaseLink">
                <Videocam />
                <a href={reactProjects[0].videoUrl}>See video on youtube</a>         
              </div>
            </div>
          </div>
        </div>
        <div className="project__bottom">
          <div className="project__bottomLeft">
            <div className="project__descContainer">
            <h3>Project Details</h3>
            <div className="project__desc">
              {reactProjects[0].description}
              <div className="project__platformContainer">
                <h4>Platform</h4>
                <div className="project__platform">
                  {handlePlatformIcon(reactProjects[0].platform)}
                  <span>{reactProjects[0].platform}</span>
                </div>
              </div>
              <div className="project__langContainer">
                <h4>Language</h4>
                <div className="project__lang">
                  <img src="/assets/code-file.png" alt="" />
                  <span>{reactProjects[0].language}</span>
                </div>
              </div>
              <h4>Dependencies</h4>
              <ul className="project__dependencies">
                {reactProjects[0].dependecies.length < 1 ? (<span>There is no dependency</span>):(
                  reactProjects[0].dependecies.map(dependency => 
                    <li className="project__dependency">
                      <img src="/assets/hand-right-d.png" alt="hand icon" />
                      {dependency}
                    </li>
                  )
                )}
              </ul>
            </div>
            </div>
          </div>
          <div className="project__bottomRight">
            <h3>Related Projects</h3>
            <div className="relatedProjectContainer">
              <div className="relatedProject">
                <img src="/assets/projects/monsters-rolodex/2.png" alt="cover img" />
                <h3>Fire Chat with React and ChatEngine IO</h3>
              </div>
              <div className="relatedProject">
                <img src="/assets/projects/monsters-rolodex/2.png" alt="cover img" />
                <h3>Fire Chat with React and ChatEngine IO</h3>
              </div>
              <div className="relatedProject">
                <img src="/assets/projects/monsters-rolodex/2.png" alt="cover img" />
                <h3>Fire Chat with React and ChatEngine IO</h3>
              </div>
              <div className="relatedProject">
                <img src="/assets/projects/monsters-rolodex/2.png" alt="cover img" />
                <h3>Fire Chat with React and ChatEngine IO</h3>
              </div>
              <div className="relatedProject">
                <img src="/assets/projects/monsters-rolodex/2.png" alt="cover img" />
                <h3>Fire Chat with React and ChatEngine IO</h3>
              </div>
              <div className="relatedProject">
                <img src="/assets/projects/monsters-rolodex/2.png" alt="cover img" />
                <h3>Fire Chat with React and ChatEngine IO</h3>
              </div>
              <div className="relatedProject">
                <img src="/assets/projects/monsters-rolodex/2.png" alt="cover img" />
                <h3>Fire Chat with React and ChatEngine IO</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default Project;