
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 

const HomePage = () => {
  const backgroundStyle = {
    backgroundImage: 'url(/images/background-image.jpg)', 
    backgroundSize: 'cover', // Ensure the image covers the full page
    backgroundPosition: 'center', // Center the background image
    backgroundRepeat: 'no-repeat', // Do not repeat the image
    height: '100vh', // Full viewport height
    color: 'white', // Text color
    display: 'flex', // Flexbox layout
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
    flexDirection: 'column', // Stack content vertically
    padding: '20px', // Padding for spacing
    textAlign: 'center', // Center text horizontally
  };

  return (
    <div style={backgroundStyle}>
      <div className="logo">
        <img src="/images/logo.jpg" alt="Logo" />
      </div>
      <h1>Welcome to Our Travel Website</h1>
      <div className="actions">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/signup" className="signup-btn">Sign Up</Link>
      </div>
    </div>
  );
};

export default HomePage;
