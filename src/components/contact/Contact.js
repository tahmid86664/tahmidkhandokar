import React from 'react';

import './Contact.scss';

import Footer from '../footer/footer';

const Contact = () => {
  return (
    <div className='contact' id="contact" >
      <div className="contact__container">
        <h1>Talk with Me</h1>
        <div className="contact__separator"></div>
        <div className="contact__formContainer">
          <h2>Fill up the form</h2>
          <form>
            <input className="contact__formInput" type="text" placeholder="Enter your name" />
            <input className="contact__formInput" type="text" placeholder="Enter your email" />
            <textarea className="contact__formInputArea" rows="7" placeholder="Write your message..." />
            <button className="contact__formButton" type="submit" >Send Message</button>
          </form>
        </div>        
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}


export default Contact;