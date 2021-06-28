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
      <div className="footer__social">
        <CallIcon /> 
      </div>
      <div className="footer__social">
        <EmailIcon /> 
      </div>
      <div className="footer__social">
        <FacebookIcon /> 
      </div>
      <div className="footer__social">
        <GitHubIcon /> 
      </div>
      <div className="footer__social">
        <LinkedInIcon /> 
      </div> 
    </div>
  )
}


export default Footer;