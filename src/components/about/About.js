import React from 'react';

import './About.scss';

import Word from '../word/Word';

const About = () => {
  const about = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non est leo. Maecenas et congue metus. " +
    "Morbi id risus sit amet dolor convallis accumsan vitae imperdiet mauris. Vivamus aliquam est sit amet neque consequat interdum. " +
    "Sed dictum, tortor id ultrices volutpat, quam nulla lacinia nulla, sed commodo mi augue a sapien. Maecenas ultrices nulla eget ullamcorper placerat. " +
    "Phasellus ac mattis dui, id pharetra nisi. Morbi consectetur justo lacus, vel porttitor odio aliquam id. " +
    "Nullam blandit, sem eget molestie vulputate, velit dolor tincidunt velit, id mattis orci libero faucibus massa. " +
    "Praesent id commodo dolor. Sed quis pretium justo. Suspendisse posuere tincidunt purus, nec placerat arcu consectetur sed. " +
    "Suspendisse eget sapien nec massa commodo fermentum eget a urna. Nulla facilisi. Sed suscipit fringilla rutrum. ";

  const knowledges = ["C  ", "C++  ", "C#  ", "Java", "Python", "HTML", "CSS", 
    "JavaScript", "PHP", "ReactJS", "NodeJS", "ExpressJS", "Django", "Spring", 
    "Laravel", "Sass", "Bootstrap", "ASP.NET", "MongoDB", "SQL", "MySQL", "Firebase", "Supabase"];

  return (
    <div className="about" id="about">
      <h1>About</h1>
      <div className="about__outerContainer">
        {/* <Word word={"Hello"}/> */}
        <div className="about__aboutContainer">
          {
            about.split(" ").map(a => (
              <Word word={a} fontSize={18} height={22} />
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
                <Word word={knowledge} fontSize={22} height={35}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}


export default About;