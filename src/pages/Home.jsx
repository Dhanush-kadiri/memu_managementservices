import React from 'react';

import '../Styling/Home.css';

import { Link } from 'react-router-dom';

import marriage from '../images/marriage.mp4'

import birthday from '../images/birthday.mp4'

import parties from '../images/parties.mp4'

import functions from '../images/functions.mp4'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUser } from '@fortawesome/free-solid-svg-icons';

import { faInstagram, faTwitter, faFacebook, faLinkedin, faYoutube, faWhatsapp  } from '@fortawesome/free-brands-svg-icons';

import logo from '../images/memu logo.jpg'



const Home = () => {

  
  return (
    <div className="home-container">

<nav className="navbar">
                
                <div className='logo'><img src={logo} alt="" className='logostyle'  /></div>

                <div className='nav-links'>
                     
                    <Link to='/Home/AboutUs'><button className="nav-button">About Us</button></Link>
                    <Link to='/Home/OurGallery'><button className="nav-button">Our Gallery</button></Link>
                    <Link to='/Home/Reviews'><button className="nav-button">Reviews</button></Link>
                    <Link to='/Home/AgentLogin'><div className="nav-button-icon">
                        <FontAwesomeIcon icon={faUser} style={{ color: '#ecf0f1' }} title='Agent Login' />
                    </div></Link>
                </div>

            </nav>

      <div className="event-blocks">

      <div className="event-block">
          <video autoPlay loop muted className="event-video" >
            <source src={marriage} type="video/mp4" />
          </video>
          <Link to='/Home/Marriageevents'><h2 className="event-title">Marriage Events</h2></Link>
        </div>

        
        <div className="event-block">
          <video autoPlay loop muted className="event-video" >
            <source src={birthday} type="video/mp4" />
          </video>
          <Link to='/Home/Birthdayevents'><h2 className="event-title">Birthday Events</h2></Link>
        </div>

        <div className="event-block">
        <video autoPlay loop muted className="event-video" >
            <source src={parties} type="video/mp4" />
          </video>
        <Link to='/Home/Partiesevents'>  <h2 className="event-title">Parties</h2>  </Link>
        </div>


        <div className="event-block">
        <video autoPlay loop muted className="event-video" >
            <source src={functions} type="video/mp4" />
          </video>
        <Link to = '/Home/Functionsevents'>  <h2 className="event-title">Functions</h2> </Link>
        </div>

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
    </div>
  );
}

export default Home;
