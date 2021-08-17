import React from 'react'

import './footer.scss';

// material ui
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__socials">
        <div className="footer__social">
          <a href="tel:+8801521429588">
            <CallIcon /> 
          </a>
        </div>
        <div className="footer__social">
          <a href="mailto:tahmidkhandokar82@gmail.com?subject=Talk with Tahmid" target="_blank" rel="noreferrer">
            <EmailIcon /> 
          </a>
        </div>
        <div className="footer__social">
          <a href="https://www.facebook.com/tahmidkhandokar82/" target="_blank" rel="noreferrer">
            <FacebookIcon />
          </a> 
        </div>
        <div className="footer__social">
          <a href="https://github.com/tahmid86664" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>  
        </div>
        <div className="footer__social">
          <a href="https://www.linkedin.com/in/tahmid-khandokar/" target="_blank" rel="noreferrer">
            <LinkedInIcon /> 
          </a> 
        </div> 
      </div>
      <div className="footer__copyRight">
        Copyright © 2021, Tahmid Khandokar | All right reserved
      </div> 
    </div>
  )
}


export default Footer;