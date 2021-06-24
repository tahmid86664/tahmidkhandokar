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
        <CallIcon /> +88 01521 429588
      </div>
      <div className="footer__social">
        <EmailIcon /> tahmidkhandokar82@gmail.com
      </div>
      <div className="footer__social">
        <FacebookIcon /> tahmidkhandokar82
      </div>
      <div className="footer__social">
        <GitHubIcon /> tahmid86664
      </div>
      <div className="footer__social">
        <LinkedInIcon /> tahmid-khandokar
      </div> 
    </div>
  )
}


export default Footer;