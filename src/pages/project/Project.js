import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/footer';
import './Project.scss';
import { ChevronRight, ChevronLeft, Code, Language, Videocam, DesktopWindows, PhoneAndroid, PhoneIphone } from '@material-ui/icons';
import { useParams } from 'react-router-dom';
import { reactProjects, javascriptProjects, nodeProjects, mernProjects, javaProjects, cProjects, csharpProjects, aspProjects, gameProjects, featuredProjects} from '../../mockData';

const Project = ({ menuOpen, setMenuOpen }) => {
  const [project, setProject] = useState();
  let { id, basis } = useParams();
  const [imageIndex, setImageIndex] = useState(0);
  const [imageClass, setImageClass] = useState("project__img");

  useEffect(() => {
    switch (basis) {
      case "react":
        setProject(reactProjects[id-1]);
        console.log("from useeffect react");
        break;
      case "javascript":
        setProject(javascriptProjects[id-1]);
        break;
      case "node":
        setProject(nodeProjects[id-1]);
        break;
      case "mern":
        setProject(mernProjects[id-1]);
        break;
      case "java":
        setProject(javaProjects[id-1]);
        break;
      case "c": 
        setProject(cProjects[id-1]);
        break;
      case "csharp":
        setProject(csharpProjects[id-1]);
        break;
      case "asp":
        setProject(aspProjects[id-1]);
        break;
      case "game": 
        setProject(gameProjects[id-1]);
        break;
      default:
        setProject(featuredProjects[id-1]);
        break;
    }
  }, [id, basis]);

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

  const slideRight = () => {
    if (imageIndex !== project.images.length-1) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  }

  const slideLeft = () => {
    imageIndex !== 0 ? 
    setImageIndex(imageIndex - 1) : 
    setImageIndex(project.images.length-1)
  }

  return (
    <div className="project">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} project />
      {
        project ? (
          <div className="project__wrapper">
            <div className="project__top">
              <div className="project__topLeft">
                <img src={project.images[imageIndex]} alt="project img" className={imageClass} />
                <span className="project__imgSlideButton left" onClick={slideLeft}>
                  <ChevronLeft />
                </span>
                <span className="project__imgSlideButton right" onClick={slideRight}>
                  <ChevronRight />
                </span>
                <div className="project__imgSliderDots">
                  <div className="project__imgSliderDot"></div>
                  <div className="project__imgSliderDot"></div>
                  <div className="project__imgSliderDot"></div>
                </div>
              </div>
              <div className="project__topRight">
                <h3 className="project__title">{project.title}</h3>
                <div className="project__showcaseLinks">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    <div className="project__showcaseLink">
                      <Language />
                      <span>See in live</span>
                    </div>
                  </a>
                  <a href={project.sourceCodeUrl} target="_blank" rel="noreferrer">
                    <div className="project__showcaseLink">
                      <Code />
                      <span>Source Code</span>                
                    </div>
                  </a>
                  <a href={project.videoUrl} target="_blank" rel="noreferrer">
                    <div className="project__showcaseLink">
                      <Videocam />
                      <span>See video on youtube</span>         
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="project__bottom">
              <div className="project__bottomLeft">
                <div className="project__descContainer">
                <h3>Project Details</h3>
                <div className="project__desc">
                  {project.description}
                  <div className="project__platformContainer">
                    <h4>Platform</h4>
                    <div className="project__platform">
                      {handlePlatformIcon(project.platform)}
                      <span>{project.platform}</span>
                    </div>
                  </div>
                  <div className="project__langContainer">
                    <h4>Language</h4>
                    <div className="project__lang">
                      <img src="/assets/code-file.png" alt="" />
                      <span>{project.language}</span>
                    </div>
                  </div>
                  <h4>Dependencies</h4>
                  <ul className="project__dependencies">
                    {project.dependecies.length < 1 ? (<span>There is no dependency</span>):(
                      project.dependecies.map(dependency => 
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
        ) : (
          <div></div>
        )
      }
      <Footer />
    </div>
  );
}


export default Project;