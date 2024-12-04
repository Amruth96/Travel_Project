// src/components/Page2/Page2.jsx
import React from 'react';
import './Page2.css';

const Page2 = () => {

  // This function is called when the user clicks the "Book Now" button
  const handleBookNow = () => {
    alert('Thanks for Booking your package, we will contact you soon.');
  };

  return (
    <div className="page2-container">
      <h2>Package Details</h2>

      <div className="package-info">
        <h3>Package Information</h3>
        <ul>
          <li><strong>Location:</strong> Beautiful Beach Resort</li>
          <li><strong>Hotel:</strong> Oceanview Resort</li>
          <li><strong>Food:</strong> All-Inclusive</li>
          <li><strong>Schedule:</strong> 7 Days / 6 Nights</li>
          <li><strong>Cost:</strong> $1200 per person</li>
        </ul>
      </div>

      {/* Book Now Button */}
      <button className="book-now-btn" onClick={handleBookNow}>Book Now</button>

      {/* Footer Section */}
      <footer className="footer">
        <p>Contact Us: <a href="mailto:info@travel.com">info@travel.com</a></p>
        <p>Phone: +1 234 567 890</p>
        <p>Website: <a href="http://www.travelwebsite.com">www.travelwebsite.com</a></p>
        <p>Office Address: 123 Travel St, City, Country</p>
        <p>Location: Travel HQ, City, Country</p>
      </footer>
    </div>
  );
};

export default Page2;
