import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Styling/Reviews.css';
import '../Styling/Home.css'
import { FaStar } from 'react-icons/fa';
import { faInstagram, faTwitter, faFacebook, faLinkedin, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    event_type: '',
    description: '',
    image: null,
    rating: 0
  });

  useEffect(() => {
    axios.get('https://memu-mongo.onrender.com/reviews')
      .then(response => {
        setReviews(response.data.reviews);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('event_type', formData.event_type);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('rating', formData.rating);

    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }

    axios.post('https://memu-mongo.onrender.com/reviews', formDataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        console.log(response.data.message);
        setModalOpen(false);
        setFormData({
          name: '',
          event_type: '',
          description: '',
          image: null,
          rating: 0
        });
      })
      .catch(error => {
        console.error('Error adding review:', error);
      });
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((star, index) => (
      <FaStar key={index} color={index < rating ? '#ffc107' : '#e4e5e9'} />
    ));
  };

  return (
    <div className="reviews-container">
      <nav className="navbar">

        <div className="nav-links">
          <Link to='/Home'><button className="nav-button">Home</button></Link>
          <Link to='/Home/AboutUs'><button className="nav-button">About Us</button></Link>
          <Link to='/Home/OurGallery'><button className="nav-button">Our Gallery</button></Link>
          <Link to='/Home/Reviews'><button className="nav-button">Reviews</button></Link>
        </div>
      </nav>

      <h1 className="page-title">Customer Reviews</h1>

      <div className="reviews">
        {reviews.length === 0 ? (
          <div className="review">
            <p>No reviews yet</p>
          </div>
        ) : (
          reviews.map(review => (
            <div key={review.id} className="review">
              <h3 className="review-name" style={{ position: 'relative', left: 0 }}>{review.name}</h3>
              <p className="review-event-type">{review.event_type}</p>
              <p className="review-description">{review.description}</p>
              {review.image && <img src={`data:image/jpeg;base64,${review.image}`} alt="Review" className="review-image" style={{ height: 50, width: 50 }} />}
              <div className="review-rating">{renderStars(review.rating)}</div>
            </div>
          ))
        )}
      </div>

      <button className="add-review-button" onClick={toggleModal}>Add Review</button>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
              <input type="text" name="event_type" value={formData.event_type} onChange={handleChange} placeholder="Event Type" required />
              <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
              <input type="file" name="image" onChange={handleImageChange} />
              <div className="rating-input">
                {[...Array(5)].map((star, index) => (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={index + 1}
                      onChange={handleChange}
                    />
                    <FaStar
                      color={index + 1 <= formData.rating ? '#ffc107' : '#e4e5e9'}
                    />
                  </label>
                ))}
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
      <footer className="footer" style={{ top: '100%' }}>
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
    </div>
  );
};

export default Reviews;
