import React, { useEffect, useState } from 'react';
import './Advertisement.css';

const Advertisement = ({ image }) => {
  const [advertisementData, setAdvertisementData] = useState([]);

  useEffect(() => {
    // Fetch advertisement data here (assuming it's available at 'http://localhost:4000')
    fetchAdvertisementData();
  }, []);

  const fetchAdvertisementData = () => {
    fetch('https://educational-academy-backend2.onrender.com', { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setAdvertisementData(data.reverse()))
      .catch((error) => console.error(error));
  };

  return (
    <div className='ad'>
      {advertisementData.map((advertisement, index) => (
        <img key={index} src={advertisement.text} alt='Advertisement' />
      ))}
    </div>
  );
};

export default Advertisement;
