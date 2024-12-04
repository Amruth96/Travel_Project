
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page1.css';
import Footer from '../Footer/Footer';  

const Page1 = () => {
  const navigate = useNavigate();

  const travelPackages = [
    {
      id: 1,
      name: 'Paris Getaway',
      description: 'A romantic trip to Paris, visit the Eiffel Tower, and enjoy fine dining.',
      price: '$999',
      duration: '5 days',
      images: ['paris1.jpg', 'paris2.jpg'],
      hotel: 'Le Meurice Paris',
      travelDetails: 'Direct flight from New York to Paris, 8 hours.',
      foodDetails: 'Fine dining, French cuisine included.',
      schedule: [
        { day: 'Day 1', activity: 'Arrival and Eiffel Tower visit' },
        { day: 'Day 2', activity: 'Louvre Museum tour' },
        { day: 'Day 3', activity: 'Seine River cruise' }
      ],
      costDetails: 'Total cost per person: $999, includes flight, hotel, meals, and tours.'
    },
    {
      id: 2,
      name: 'Adventure in Bali',
      description: 'An adventurous trip to Bali, explore beaches, volcanoes, and local culture.',
      price: '$799',
      duration: '7 days',
      images: ['bali1.jpg', 'bali2.jpg'],
      hotel: 'Bali Beach Resort',
      travelDetails: 'Direct flight from Los Angeles to Bali, 14 hours.',
      foodDetails: 'Authentic Indonesian cuisine with daily buffet.',
      schedule: [
        { day: 'Day 1', activity: 'Arrival and check-in at resort' },
        { day: 'Day 2', activity: 'Mount Batur volcano trek' },
        { day: 'Day 3', activity: 'Beach day and surfing lessons' }
      ],
      costDetails: 'Total cost per person: $799, includes flight, hotel, meals, and activities.'
    },
    {
      id: 3,
      name: 'Tokyo Tour',
      description: 'Experience the vibrant culture of Tokyo, visit temples, and shop in Shibuya.',
      price: '$1200',
      duration: '6 days',
      images: ['tokyo1.jpg', 'tokyo2.jpg'],
      hotel: 'Shibuya Grand Hotel',
      travelDetails: 'Direct flight from San Francisco to Tokyo, 11 hours.',
      foodDetails: 'Japanese cuisine with sushi and ramen experiences.',
      schedule: [
        { day: 'Day 1', activity: 'Arrival and Shibuya Crossing visit' },
        { day: 'Day 2', activity: 'Tokyo Tower and Meiji Shrine tour' },
        { day: 'Day 3', activity: 'Shopping day in Harajuku' }
      ],
      costDetails: 'Total cost per person: $1200, includes flight, hotel, meals, and tours.'
    },
  ];

  const handlePackageClick = (pkg) => {
    navigate('/page2', { state: { package: pkg } }); 
  };

  return (
    <div className="page1-container">
      <h2>Our Travel Packages</h2>
      <div className="packages-list">
        {travelPackages.map((pkg) => (
          <div key={pkg.id} className="package-card" onClick={() => handlePackageClick(pkg)}>
            <h3>{pkg.name}</h3>
            <p>{pkg.description}</p>
            <p><strong>Price:</strong> {pkg.price}</p>
            <p><strong>Duration:</strong> {pkg.duration}</p>
          </div>
        ))}
      </div>

      <Footer />  {/* Include Footer */}
    </div>
  );
};

export default Page1;
