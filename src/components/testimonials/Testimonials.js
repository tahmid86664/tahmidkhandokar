import React, { useEffect, useState } from "react";

import "./Testimonials.scss";

import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import Resizer from "react-image-file-resizer";

import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { db, storage } from "../../firebase/firebase";

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const Testimonials = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [testimonialPerPage, setTestimonialPerPage] = useState(3);

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [percentage, setPercentage] = useState(null);
  // const [newImg, setNewImg] = useState(null);

  const testimonialVisited = pageNumber * testimonialPerPage;

  let [width, setWidth] = useState(getWidth());

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth());
    };
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  useEffect(() => {
    if (width < 949) {
      setTestimonialPerPage(1);
    } else if (width >= 949 && width < 1420) {
      setTestimonialPerPage(2);
    } else {
      setTestimonialPerPage(3);
    }
  }, [width]);

  // file upload to firebase
  // following funtion is for converting resizedImgURI to blob(image file) again
  const dataURIToBlob = (dataURI) => {
    const splitDataURI = dataURI.split(",");
    const byteString =
      splitDataURI[0].indexOf("base64") >= 0
        ? atob(splitDataURI[1])
        : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(":")[1].split(";")[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i);

    return new Blob([ia], { type: mimeString });
  };

  useEffect(() => {
    const uploadImage = async () => {
      const resizeFile = (file) =>
        new Promise((resolve) => {
          Resizer.imageFileResizer(
            file,
            200,
            200,
            "JPEG",
            80, // quality
            0,
            (uri) => {
              resolve(uri);
            },
            "base64"
          );
        });

      const resizeImgURI = await resizeFile(file);
      const newFile = dataURIToBlob(resizeImgURI);

      if (newFile) {
        const imgName = new Date().getTime() + file.name.trim();
        const storageRef = ref(storage, imgName);

        const uploadTask = uploadBytesResumable(storageRef, newFile);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            setPercentage(progress);
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
                break;
            }
          },
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setImgURL(downloadURL);
            });
          }
        );
      }
    };

    file && uploadImage();
  }, [file]);

  // read data
  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "testimonials"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });

        setTestimonials(list);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [testimonials]);

  useEffect(() => {
    setPageCount(Math.ceil(testimonials.length / testimonialPerPage));
  }, [testimonials.length, testimonialPerPage]);

  const displayTestimonials = testimonials
    .slice(testimonialVisited, testimonialVisited + testimonialPerPage)
    .map((testimonial) => {
      return (
        <div
          className={
            testimonial.featured
              ? "testimonials__card featured"
              : "testimonials__card"
          }
        >
          <div className="testimonials__cardTop">
            <img
              className="testimonials__cardTopLeft"
              src="assets/right-arrow.png"
              alt="button"
            />
            <img
              className="testimonials__cardTopUser"
              src={testimonial.imgURL}
              alt="people"
            />
            <img
              className="testimonials__cardTopRight"
              src="assets/mail.png"
              alt="social media"
            />
          </div>
          <div className="testimonials__cardMiddle">
            {testimonial.description}
          </div>
          <div className="testimonials__cardBottom">
            <h3>
              {testimonial.name.charAt(0).toUpperCase() +
                testimonial.name.slice(1)}
            </h3>
            <h4>{testimonial.position}</h4>
          </div>
        </div>
      );
    });

  const handleNextTestomonials = () => {
    setPageNumber(pageNumber + 1);
  };

  const handlePrevTestomonials = () => {
    setPageNumber(pageNumber - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "testimonials"), {
        name: name,
        position: position,
        description: desc,
        imgURL: imgURL,
        timestamp: serverTimestamp(),
      });

      setName("");
      setPosition("");
      setDesc("");
      setFile("");
      setPercentage(null);
      console.log("Testimonial written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonials__outerContainer">
        <form className="testimonials__form" onSubmit={handleSubmit}>
          <h2>Give a review</h2>
          <input
            className="testimonials__formInput"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="testimonials__formInput"
            type="text"
            placeholder="Enter your position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <textarea
            className="testimonials__formInputArea"
            rows="7"
            placeholder="Write what you want say about me & my works..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <label className="testimonials__formImgInput">
            <input
              type="file"
              id="img"
              onChange={(e) => setFile(e.target.files[0])}
              accept="image/x-png,image/gif,image/jpeg"
            />
            Upload your image
          </label>
          {percentage >= 100 && (
            <label style={{ color: "red" }}>{file.name} is selected</label>
          )}

          <button
            className="testimonials__formButton"
            type="submit"
            disabled={percentage !== null && percentage < 100}
          >
            Post
          </button>
        </form>
        <div className="testimonials__separator"></div>
        <div className="testimonials__container">
          {displayTestimonials}
          <div className="testimonials__buttonContainer">
            {testimonials.length <= testimonialPerPage ? (
              <div></div>
            ) : pageNumber === 0 ? (
              <div
                className="testimonials__nextButton"
                onClick={handleNextTestomonials}
              >
                <KeyboardArrowRightIcon />
              </div>
            ) : pageNumber === pageCount - 1 ? (
              <div
                className="testimonials__nextButton"
                onClick={handlePrevTestomonials}
              >
                <KeyboardArrowLeftIcon />
              </div>
            ) : (
              <>
                <div
                  className="testimonials__nextButton"
                  onClick={handlePrevTestomonials}
                >
                  <KeyboardArrowLeftIcon />
                </div>
                <div
                  className="testimonials__nextButton"
                  onClick={handleNextTestomonials}
                >
                  <KeyboardArrowRightIcon />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
