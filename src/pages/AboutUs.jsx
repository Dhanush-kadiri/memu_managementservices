// import React from 'react';
// import '../Styling/About.css';
// import owner1 from '../images/me.jpg'
// import owner2 from '../images/darlingey.png'
// import logo from '../images/myem logo.png'
// import { Link } from 'react-router-dom';

// const AboutUs = () => {
//   return (
//     <div className="about-us-container">
//       <nav className="navbar">
//         <img src={logo} alt='logo' className="logo" style={{ borderRadius: 100, marginTop: -20 }} />
//         <div className="nav-links">
//           <Link to='/Home/AboutUs'><button className="nav-button">About Us</button></Link>
//           <Link to='/Home/OurGallery'><button className="nav-button">Our Gallery</button></Link>
//           <Link to='/Home/Reviews'><button className="nav-button">Reviews</button></Link>
//         </div>
//       </nav>
//       <div className="parallax parallax1"></div>
//       <div className="section slide-in-left">
//         <h2>Welcome to MYEM</h2>
//         <p>
//           What is this, you ask? Well, let me tell you about MYEM - the event management company that's here to make your events as memorable as a politician's promise. Imagine a world where your birthday party doesn't feel like a hostage situation, and your corporate gala doesn't resemble a funeral with better snacks. That's where MYEM comes in, armed with a sense of humor and a deep understanding that event planning should be fun, not a form of torture. Our team of event ninjas will handle everything, from venue selection to decor, so you can focus on the important things in life, like deciding which hors d'oeuvres to shovel into your mouth when no one's looking. Whether you're planning a wedding, a retirement party, or a company picnic (where everyone definitely won't be secretly hoping for a freak lightning strike), MYEM is here to ensure your event is the talk of the town - in a good way, not the "did you hear about the caterer who set the venue on fire?" kind of way. So, what are you waiting for? Let MYEM take the stress out of event planning and turn your soiree into a shindig that'll have your guests begging for more. After all, who needs a boring old party when you can have an unforgettable experience that'll have people talking for years to come?
//         </p>
//       </div>
//       <div className="parallax parallax2"></div>
//       <div className="section slide-in-right">
//         <h2>Why Choose Us?</h2>
//         <p>
//           Alright, folks, gather round because we're about to dive into the wild world of event planning - where the only thing more unpredictable than the weather is the guests themselves. You see, there are three types of people in this world: those who will do anything you ask, those who won't do anything you ask, and then there's our personal favorite - the "do I really need to do that?" crowd. Guess which one we're targeting?
//         </p>
//         <p>
//           Well, lucky for you, our company has a special feature that sets us apart from the rest - the ability to negotiate prices like a seasoned used car salesman. So, not only will we make your event a memorable one, but we'll also make sure you don't have to take out a second mortgage to pay for it. And let's be real here, events aren't just about gathering a bunch of people in one place. No, no, no, they're about creating memories that will last a lifetime. And what better way to do that than with a healthy dose of fun and humor? We believe that laughter is the best medicine, and we're here to prescribe it in generous doses. So, if you're tired of the same old stuffy, boring events, give us a call. We'll make sure your next shindig is one for the books - or at least the Instagram feed.
//         </p>
//       </div>
//       <div className="parallax parallax3"></div>
//       <div className="section slide-in-bottom">
//         <h2>How We Treat an Event</h2>
//         <p>
//           At MYEM, an event isn’t just a gathering; it’s a cosmic collision of laughter, glitter, and serendipity. We treat events like rare Pokémon sightings—capture the joy, hug the memories, and sprinkle them with stardust. Memories? We weave them into time-traveling scarves. Wear one, and suddenly you’re dancing at your fifth birthday party again. Our dedication to crafting unforgettable moments is matched only by our commitment to infusing every event with a touch of magic and a whole lot of heart.
//         </p>
//       </div>
//       <div className="parallax parallax4"></div>
//       <div className="section fade-in">
//         <h2>Meet the Founders</h2>
//         <div className="owner-info">
//           <img src={owner1} alt="Owner" />
//           <p>
//             Meet Dhanush Kadiri - the creative genius behind MYEM. He’s the guy who explains why the bride’s laughter creates gravitational waves during the sangeet ceremony. His motto? “Science + Sentiment = Spectacular Events.” Also, he’s a pro at catching bouquet tosses mid-air. With a keen interest in Hindu traditions and the science behind them, Dhanush ensures that every event is not only memorable but also meaningful. His passion for revealing the scientific benefits and making memories through events, especially marriages, shines through in every project. Dhanush believes in making every moment count and turning every event into a memorable experience that guests will cherish forever.
//           </p>
//         </div>
//         <div className="owner-info fade-in">
//           <img src={owner2} alt="Owner" />
//           <p>
//             Meet Santhosh - the co-founder of MYEM. With an unparalleled enthusiasm for event management, Santhosh is the one who brings the magic and the madness together in perfect harmony. His keen eye for detail and innovative approach ensure that every event is a seamless blend of creativity and precision. Whether he's negotiating with vendors or choreographing a surprise flash mob, Santhosh does it all with a smile and a sprinkle of charm. His belief? “If it’s worth celebrating, it’s worth celebrating spectacularly.” Just like Dhanush, Santhosh’s dedication to making every event memorable is what sets MYEM apart. Together, they form a dynamic duo committed to turning your special moments into lifelong memories.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;



import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../Styling/About.css';
import owner1 from '../images/me.jpg'
import owner2 from '../images/darlingey.png'
import { Link } from 'react-router-dom';
import { faInstagram, faTwitter, faFacebook, faLinkedin, faYoutube, faWhatsapp  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutUs = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const isInView1 = useInView(section1Ref, { once: true });
  const isInView2 = useInView(section2Ref, { once: true });
  const isInView3 = useInView(section3Ref, { once: true });
  const isInView4 = useInView(section4Ref, { once: true });

  return (
    <>
    <div className="about-us-container">
      <nav className="navbar">

        <div className="nav-links">
          <Link to='/Home'><button className="nav-button">Home</button></Link>
          <Link to='/Home/AboutUs'><button className="nav-button">About Us</button></Link>
          <Link to='/Home/OurGallery'><button className="nav-button">Our Gallery</button></Link>
          <Link to='/Home/Reviews'><button className="nav-button">Reviews</button></Link>
        </div>
      </nav>
      <div className="parallax parallax1"></div>
      <motion.div
        className="section"
        ref={section1Ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
      >
        <h2>Welcome to MEMU</h2>
        <p>
          What is this, you ask? Well, let me tell you about MEMU - the event management company that's
           here to make your events as memorable as a politician's promise. Imagine a world where your birthday party doesn't
            feel like a hostage situation, and your corporate gala doesn't resemble a funeral with better snacks. That's where MEEM 
            comes in, armed with a sense of humor and a deep understanding that event planning should be fun, not a form of torture.
             Our team of event ninjas will handle everything, from venue selection to decor, so you can focus on the important things 
             in life, like deciding which hors d'oeuvres to shovel into your mouth when no one's looking. Whether you're planning a wedding, 
             a retirement party, or a company picnic (where everyone definitely won't be secretly hoping for a freak lightning strike), 
             MEEM is here to ensure your event is the talk of the town - in a good way, not the "did you hear about the caterer who set the
              venue on fire?" kind of way. So, what are you waiting for? Let MYEM take the stress out of event planning and turn your soiree 
              into a shindig that'll have your guests begging for more. After all, who needs a boring old party when you can have an unforgettable 
              experience that'll have people talking for years to come?
        </p>
      </motion.div>
      <div className="parallax parallax2"></div>
      <motion.div
        className="section"
        ref={section2Ref}
        initial={{ opacity: 0, x: 100 }}
        animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
      >
        <h2>Why Choose Us?</h2>
        <p>
          Alright, folks, gather round because we're about to dive into the wild world of event planning - 
          where the only thing more unpredictable than the weather is the guests themselves. 
          You see, there are three types of people in this world: those who will do anything you ask,
           those who won't do anything you ask, and then there's our personal favorite - the "do I really need to do that?" 
           crowd. Guess which one we're targeting?
        </p>
        <p>
          Well, lucky for you, our company has a special feature that sets us apart from the rest - the ability to
           negotiate prices like a seasoned used car salesman. So, not only will we make your event a memorable one,
            but we'll also make sure you don't have to take out a second mortgage to pay for it. And let's be real here, 
            events aren't just about gathering a bunch of people in one place. No, no, no, they're about creating memories 
            that will last a lifetime. And what better way to do that than with a healthy dose of fun and humor? We believe 
            that laughter is the best medicine, and we're here to prescribe it in generous doses. So, if you're tired of the 
            same old stuffy, boring events, give us a call. We'll make sure your next shindig is one for the books - or at least 
            the Instagram feed.
        </p>
      </motion.div>
      <div className="parallax parallax3"></div>
      <motion.div
        className="section"
        ref={section3Ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
      >
        <h2>How We Treat an Event</h2>
        <p>
          At MEMU, an event isn’t just a gathering; it’s a cosmic collision of laughter, glitter,
           and serendipity. We treat events like rare Pokémon sightings—capture the joy, hug the memories,
            and sprinkle them with stardust. Memories? We weave them into time-traveling scarves. Wear one,
             and suddenly you’re dancing at your fifth birthday party again. Our dedication to crafting unforgettable 
             moments is matched only by our commitment to infusing every event with a touch of magic and a whole lot of heart.
        </p>
      </motion.div>
      <div className="parallax parallax4"></div>
      <motion.div
        className="section"
        ref={section4Ref}
        initial={{ opacity: 0 }}
        animate={isInView4 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Meet the Founders</h2>
        <div className="owner-info">
          <img src={owner1} alt="Owner" />
          <p>
            Meet Dhanush Kadiri - the creative genius behind MEMU. He’s the guy who explains why the bride’s 
            laughter creates gravitational waves during the sangeet ceremony. His motto? “Science + Sentiment = Spectacular Events.” 
            Also, he’s a pro at catching bouquet tosses mid-air. With a keen interest in Hindu traditions and the science behind them, 
            Dhanush ensures that every event is not only memorable but also meaningful. His passion for revealing the scientific benefits 
            and making memories through events, especially marriages, shines through in every project. Dhanush believes in making every moment 
            count and turning every event into a memorable experience that guests will cherish forever.
          </p>
        </div>
        <div className="owner-info">
          <img src={owner2} alt="Owner" />
          <p>
            Meet Santhosh - the co-founder of MEMU. With an unparalleled enthusiasm for event management, 
            Santhosh is the one who brings the magic and the madness together in perfect harmony. His keen eye for detail and 
            innovative approach ensure that every event is a seamless blend of creativity and precision. Whether he's negotiating 
            with vendors or choreographing a surprise flash mob, Santhosh does it all with a smile and a sprinkle of charm. His belief? 
            “If it’s worth celebrating, it’s worth celebrating spectacularly.” Just like Dhanush, Santhosh’s dedication to making every event 
            memorable is what sets MEEM apart. Together, they form a dynamic duo committed to turning your special moments into lifelong memories.
          </p>
        </div>
      </motion.div>
      
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

export default AboutUs;
