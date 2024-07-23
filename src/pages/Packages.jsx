import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styling/Packages.css';


const Packages = () => {
  const navigate = useNavigate();

  const handlePackageClick = (packageName) => {
    if (packageName === 'Silver Package') {
      localStorage.setItem('selectedPackage', packageName);
      navigate('/Home/Marriageevents/Packages/CallBooking');
    }
  };

  return (
    <div className="packages-container">
      <nav className="navbar">
       
        <div className="nav-links">
          <Link to='/Home/AboutUs'><button className="nav-button">About Us</button></Link>
          <Link to='/Home/OurGallery'><button className="nav-button">Our Gallery</button></Link>
          <Link to='/Home/Reviews'><button className="nav-button">Reviews</button></Link>
        </div>
      </nav>

      <div className="package-blocks">
        <div className="package-block silver-package" onClick={() => handlePackageClick('Silver Package')}>
          <h2 className="package-title">Silver Package</h2>
          <p className="package-description">Includes decorations only and our agent will explain in detail</p>
        </div>
        <div className="package-block gold-package blocked">
          <h2 className="package-title">Gold Package</h2>
          <p className="package-description">Currently not available</p>
        </div>
        <div className="package-block platinum-package blocked">
          <h2 className="package-title">Platinum Package</h2>
          <p className="package-description">Currently not available</p>
        </div>
      </div>
    </div>
  );
}

export default Packages;
