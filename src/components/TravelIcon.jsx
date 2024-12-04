// src/components/TravelIcon.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TravelIcon = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <div className="travel-icon">
      <img
        src="https://image.shutterstock.com/image-vector/travel-icon-illustration-260nw-1560427102.jpg" 
        alt="Travel Icon" 
        className="icon"
        onClick={handleClick}
      />
      <h2>Click the Travel Icon to Start</h2>
    </div>
  );
};

export default TravelIcon;
