// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../images/myem logo.png';
// import axios from 'axios';
// import '../Styling/OurGallery.css';

// const OurGallery = () => {
//   const [images, setImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:5000/gallery')
//       .then(response => {
//         setImages(response.data.images);
//       })
//       .catch(error => {
//         console.error('Error fetching images:', error);
//       });
//   }, []);

//   const openModal = (image) => {
//     setSelectedImage(image);
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div className="gallery-container">
//       <nav className="navbar">
//         <img src={logo} alt="logo" className="logo" />
//         <div className="nav-links">
//           <Link to='/Home/AboutUs'><button className="nav-button">About Us</button></Link>
//           <Link to='/Home/OurGallery'><button className="nav-button">Our Gallery</button></Link>
//           <Link to='/Home/Reviews'><button className="nav-button">Reviews</button></Link>
//         </div>
//       </nav>

//       <h1 className="page-title">Our Gallery</h1>
//       <div className="gallery-grid">
//         {images.map((image) => (
//           <div
//             className="gallery-item"
//             key={image.id}
//             style={{ backgroundImage: `url(data:image/jpeg;base64,${image.image_data})` }}
//             onClick={() => openModal(image)}
//           />
//         ))}
//       </div>

//       {selectedImage && (
//         <div className="modal" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <span className="close" onClick={closeModal}>&times;</span>
//             <img src={`data:image/jpeg;base64,${selectedImage.image_data}`} alt="Selected" className="modal-image" />
//             <div className="modal-description">{selectedImage.description}</div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OurGallery;




import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import '../Styling/OurGallery.css';
import { faInstagram, faTwitter, faFacebook, faLinkedin, faYoutube, faWhatsapp  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OurGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/gallery')
      .then(response => {
        setImages(response.data.images);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
    <div className="gallery-container">
      <nav className="navbar">
       
        <div className="nav-links">
          <Link to='/Home'><button className="nav-button">Home</button></Link>
          <Link to='/Home/AboutUs'><button className="nav-button">About Us</button></Link>
          <Link to='/Home/OurGallery'><button className="nav-button">Our Gallery</button></Link>
          <Link to='/Home/Reviews'><button className="nav-button">Reviews</button></Link>
        </div>
      </nav>

      <h1 className="page-title">Our Gallery</h1>
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="swiper-container"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} className="swiper-slide" onClick={() => openModal(image)}>
           <img
              src={`data:image/jpeg;base64,${image.image_data}` } style={{height:'100%',width:'120%'}}
              alt="Gallery"
              className="swiper-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={`data:image/jpeg;base64,${selectedImage.image_data}`} alt="Selected" className="modal-image" />
            <div className="modal-description">{selectedImage.description}</div>
          </div>
        </div>
      )}
      
    </div>
     <footer className="footer">
     <div className="footer-wave" />
     <section>
         <div className="socials">
             <div className="social-icon instagram">
                 <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
             </div>
             <div className="social-icon twitter">
                 <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
             </div>
             <div className="social-icon facebook">
                 <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
             </div>
             <div className="social-icon linkedin">
                 <a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
             </div>
             <div className="social-icon youtube">
                 <a href="https://youtube.com"><FontAwesomeIcon icon={faYoutube} /></a>
             </div>
             <div className="social-icon whatsapp">
                 <a href="https://whatsapp.com"><FontAwesomeIcon icon={faWhatsapp} /></a>
             </div>
         </div>
         <div className="legal">
             <Link to='/PrivacyPolicy'>Privacy Policy</Link> | <Link to='/TermsConditions'>Terms & Conditions</Link>
         </div>
     </section>
 </footer>
 </>
  );
};

export default OurGallery;
