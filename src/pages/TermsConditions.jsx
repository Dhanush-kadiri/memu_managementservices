import React from 'react';
import '../Styling/TermsConditions.css'; 
import styles from '../Styling/AdminLandingPage.module.css';
import {  FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
  return (
    <div className="terms-conditions-container">
        <Link to='/Home' className={styles['back-button']}>
        <FaArrowLeft />
      </Link>
      <h1>Terms & Conditions</h1>
      <p>
        Welcome to MEMU - Makes Events Memorable For U's Terms & Conditions. These terms govern your
        use of our website and services. By accessing or using our website and services, you agree
        to these terms.
      </p>

      <h2>Booking and Payment</h2>
      <p>
        By booking our services, you agree to the terms outlined in your booking agreement,
        including payment terms, cancellation policies, and service details.
      </p>

      <h2>Service Limitations</h2>
      <p>
        Our services are provided "as is" without warranty of any kind. We make no guarantees
        regarding venue availability, vendor services, or event outcomes.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content on our website and services, including logos, images, and text, are the
        property of MEMU - Makes Events Memorable For U. You may not use, reproduce, or distribute
        our content without permission.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        We are not liable for any indirect, incidental, or consequential damages arising from the
        use of our services or website.
      </p>

      <h2>Changes to Terms</h2>
      <p>We reserve the right to update or modify these terms at any time without prior notice.</p>

      <h2>Governing Law</h2>
      <p>These terms are governed by and construed in accordance with the laws of [your jurisdiction].</p>

      <h2>Contact Us</h2>
      <p>If you have any questions about these Terms & Conditions, please contact us at .</p>
      <ul>
  <li><strong>Email:</strong> kadiridhanush143@gmail.com</li>
  <li><strong>Phone:</strong> +91 8639141082</li>
  
</ul>
    </div>
  );
};

export default TermsConditions;
