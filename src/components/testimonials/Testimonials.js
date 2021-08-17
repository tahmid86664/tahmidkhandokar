import React, { useEffect, useState } from 'react';

import './Testimonials.scss';

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';


const getWidth = () => window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

const Testimonials = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [testimonialPerPage, setTestimonialPerPage] = useState(3);

  const testimonialVisited = pageNumber * testimonialPerPage;  

  let [width, setWidth] = useState(getWidth());

  const testimonials = [
    {
      "name": "Albert Einstein",
      "work": "Scientist er Baap",
      "comment": "E beda valo moto pora leha kor. Hara din relativity loia chillao. Othocho haramjada relativity loia kisu korte to paros na!",
      "imgSource": "assets/albert-einstein.jpg"
    },
    {
      "name": "Galileo Gelilei",
      "work": "Scientist er Kaku",
      "comment": "Beda mui palok er loge ekta foam er patthor halaisilam, heiar loigga ek loge porse. Eida tore aijgo koilam, bojjo!",
      "imgSource": "assets/galileo.jpg"
    },
    {
      "name": "Tomas Alva Edison",
      "work": "Scientist er Mamu",
      "comment": "Manshe mone kore light mone hoy mui banaisi kintu heia to mui copy paste marsi. Tora to hango din maro heia loia abr dhorao khao. Dekh mui copy mairrao excellence er katare :D",
      "imgSource": "assets/tomas-alva-edison.jpg"
    },
    {
      "name": "Tomas Alva Edison",
      "work": "Scientist er Mamu",
      "comment": "Manshe mone kore light mone hoy mui banaisi kintu heia to mui copy paste marsi. Tora to hango din maro heia loia abr dhorao khao. Dekh mui copy mairrao excellence er katare :D",
      "imgSource": "assets/tomas-alva-edison.jpg"
    },
    {
      "name": "Tomas Alva Edison",
      "work": "Scientist er Mamu",
      "comment": "Manshe mone kore light mone hoy mui banaisi kintu heia to mui copy paste marsi. Tora to hango din maro heia loia abr dhorao khao. Dekh mui copy mairrao excellence er katare :D",
      "imgSource": "assets/tomas-alva-edison.jpg"
    },
    {
      "name": "Tomas Alva Edison",
      "work": "Scientist er Mamu",
      "comment": "Manshe mone kore light mone hoy mui banaisi kintu heia to mui copy paste marsi. Tora to hango din maro heia loia abr dhorao khao. Dekh mui copy mairrao excellence er katare :D",
      "imgSource": "assets/tomas-alva-edison.jpg"
    },
    {
      "name": "Tomas Alva Edison",
      "work": "Scientist er Mamu",
      "comment": "Manshe mone kore light mone hoy mui banaisi kintu heia to mui copy paste marsi. Tora to hango din maro heia loia abr dhorao khao. Dekh mui copy mairrao excellence er katare :D",
      "imgSource": "assets/tomas-alva-edison.jpg"
    },
  ];


  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth());
    };
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
  }, []); 

  useEffect(() => {
    if (width < 949) {
      setTestimonialPerPage(1);
    } else if (width >= 949 && width < 1420) {
      setTestimonialPerPage(2);
    } else {
      setTestimonialPerPage(3);
    }
  },  [width]);
  
  useEffect(() => {
    setPageCount(Math.ceil(testimonials.length / testimonialPerPage))
  }, [testimonials.length, testimonialPerPage]);

  const displayTestimonials = testimonials.slice(testimonialVisited, testimonialVisited + testimonialPerPage)
    .map(testimonial => {
    return (
      <div className={testimonial.featured ? "testimonials__card featured" : "testimonials__card"}>
        <div className="testimonials__cardTop">
          <img className="testimonials__cardTopLeft" src="assets/right-arrow.png" alt="button" />
          <img className="testimonials__cardTopUser" src={testimonial.imgSource} alt="people" />
          <img className="testimonials__cardTopRight" src="assets/mail.png" alt="social media" />
        </div>
        <div className="testimonials__cardMiddle">
          {testimonial.comment}
        </div>
        <div className="testimonials__cardBottom">
          <h3>{testimonial.name}</h3>
          <h4>{testimonial.work}</h4>
        </div>
      </div>
    );
  });

  const handleNextTestomonials = () => {
    setPageNumber(pageNumber + 1);
  }

  const handlePrevTestomonials = () => {
    setPageNumber(pageNumber - 1);
  }

  return (
    <div className='testimonials' id="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonials__outerContainer">
        <div className="testimonials__form">
          <h2>Give a review</h2>
          <input className="testimonials__formInput" type="text" placeholder="Enter your name" />
          <input className="testimonials__formInput" type="text" placeholder="Enter your title" />
          <textarea className="testimonials__formInputArea" rows="7" placeholder="Write what you want say about me & my works..." />
          <label className="testimonials__formImgInput">
            <input type="file" /> 
            Upload your image
          </label>
          <button className="testimonials__formButton" type="submit" >Post</button>
        </div>
        <div className="testimonials__separator"></div>
        <div className="testimonials__container">
          {
            displayTestimonials
          }
          <div className="testimonials__buttonContainer">
            {
              testimonials.length <= testimonialPerPage ? 
              (
                <div></div>
              ) : (
                pageNumber === 0 ? 
                (
                  <div className="testimonials__nextButton" onClick={handleNextTestomonials}>
                    <KeyboardArrowRightIcon />
                  </div>
                ) : (
                  pageNumber === pageCount-1 ? (
                    <div className="testimonials__nextButton" onClick={handlePrevTestomonials}>
                      <KeyboardArrowLeftIcon />
                    </div>
                  ) :(
                    <>
                      <div className="testimonials__nextButton" onClick={handlePrevTestomonials}>
                        <KeyboardArrowLeftIcon />
                      </div>
                      <div className="testimonials__nextButton" onClick={handleNextTestomonials}>
                        <KeyboardArrowRightIcon />
                      </div>
                    </>
                  )       
                )
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}


export default Testimonials;