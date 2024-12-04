// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-details">
          <p><strong>Email:</strong> support@travelcompany.com</p>
          <p><strong>Phone:</strong> +1 (800) 123-4567</p>
          <p><strong>Website:</strong> www.travelcompany.com</p>
          <p><strong>Office Address:</strong> 1234 Travel St, Suite 101, Hyderabad, India, 500032</p>
          <p><strong>Location:</strong> Near Central Park, Downtown</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
