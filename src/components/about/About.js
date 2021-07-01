import React, { useState, useEffect } from 'react';

import './About.scss';

import Word from '../word/Word';

const getWidth = () => window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

const About = () => {
  let [width, setWidth] = useState(getWidth());
  const [fontSize, setFontSize] = useState(18);
  const [languageFontSize, setLanguageFontSize] = useState(18);
  const [aboutTextHeight, setAboutTextHeight] = useState(22);
  const [skillTextHeight, setSkillTextHeight] = useState(35);

  const about = "Hey, there! I'm Khandokar Md. Mustafa Tahmid from Bangladesh. I'm a fullstack software developer. " +
    "I had started the journey of programming when I was in 11th class. I learn some coding with C language. " +
    "But I stucked for some reason. After a long time, I had started again. Then I realised, I was enjoying programming. " +
    "After that, I had decided to take programming as my profession. " +
    "I had got admitted into a University taking Computer Science as my subject and continuing. " +
    "I enjoy the terms programming and developing. I've spent so many times to build some projects in various platform. " +
    "Also I've spent some time to develop some mini games with Unity." +
    "I love programming, writing, traveling, biking, playing games. ";

  const knowledges = ["C  ", "C++  ", "C#  ", "Java", "Python", "HTML", "CSS", 
    "JavaScript", "PHP", "ReactJS", "NodeJS", "ExpressJS", "Django", "Spring", 
    "Laravel", "Sass", "Bootstrap", "ASP.NET", "MongoDB", "SQL", "MySQL", "Firebase", "Supabase"];

  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth());
    };
    window.addEventListener('resize', resizeListener);
  
    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, []); 

  useEffect(() => {
    if (width < 768 ) {
      setFontSize(14);
      setLanguageFontSize(14);
      setAboutTextHeight(18);
      setSkillTextHeight(18);
    } else {
      setFontSize(18);
      setLanguageFontSize(22);
      setAboutTextHeight(22);
      setSkillTextHeight(35);
    }
  }, [width]);

  return (
    <div className="about" id="about">
      <h1>About</h1>
      <div className="about__outerContainer">
        {/* <Word word={"Hello"}/> */}
        <div className="about__aboutContainer">
          {
            about.split(" ").map(a => (
              <Word word={a} fontSize={fontSize} height={aboutTextHeight} />
            ))
          }
        </div>
        <div className="about__skillContainer">
          <h3>
            My Knowledge 
            <span className="close">📕</span>
          </h3>
          <div className="about__skillLanguages">
            {
              knowledges.map(knowledge => (
                <Word word={knowledge} fontSize={languageFontSize} height={skillTextHeight}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}


export default About;