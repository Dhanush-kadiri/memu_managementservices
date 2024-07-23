import React from 'react';
import '../Styling/PrivacyPolicy.css'; 
import styles from '../Styling/AdminLandingPage.module.css';
import {  FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
        <Link to='/Home' className={styles['back-button']}>
        <FaArrowLeft />
      </Link>
      <h1>Privacy Policy</h1>
      <p>
        Welcome to MEMU - Makes Events Memorable For U's Privacy Policy. Your privacy is important
        to us. This policy explains how we collect, use, disclose, and safeguard your information
        when you visit our website or use our services.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect personal information such as your name, email address, phone number, and
        other details when you register, make inquiries, or engage with our services.
      </p>
      <p>
        We also automatically collect information about how you interact with our website and
        services, including IP addresses, browser types, pages visited, and other analytics data.
      </p>

      <h2>How We Use Your Information</h2>
      <p>
        We use your information to provide and manage services, communicate with you about your
        bookings and updates, analyze trends, administer the website, and improve our services.
      </p>

      <h2>Information Sharing</h2>
      <p>
        We do not sell, trade, or otherwise transfer your personal information to outside parties
        unless we provide you with advance notice.
      </p>

      <h2>Security</h2>
      <p>
        We implement security measures to protect your personal information from unauthorized
        access, alteration, disclosure, or destruction.
      </p>

      <h2>Your Choices</h2>
      <p>
        You can update your personal information or unsubscribe from communications at any time by
        contacting us.
      </p>

      <h2>Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at.</p>
      <ul>
  <li><strong>Email:</strong> kadiridhanush143@gmail.com</li>
  <li><strong>Phone:</strong> +91 8639141082</li>
  
</ul>
    </div>
  );
};

export default PrivacyPolicy;
