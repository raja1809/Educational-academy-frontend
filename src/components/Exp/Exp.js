import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import ExpB from '../ExpB/ExpB';
import './Exp.css';
import Advertisement from '../Advertisement/Advertisement';
import DateComponent from '../DateComponent';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Contact from './Contact'; // Import the Contact component

const Exp = () => {
  const [titles, setTitles] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(0);
  const [showContact, setShowContact] = useState(false); // State to control Contact display

  useEffect(() => {
    const fetchTitles = () => {
      fetch('https://educational-academy-backend1.onrender.com', { method: 'GET' })
        .then((response) => response.json())
        .then((data) => {
          if (data && Array.isArray(data)) {
            setTitles(data.reverse());
          } else {
            console.error('Data is not an array or is undefined/null');
          }
        })
        .catch((error) => console.error(error));
    };

    fetchTitles();

    const interval = setInterval(() => {
      setCurrentTitle((prevTitle) => (prevTitle === titles.length - 1 ? 0 : prevTitle + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [titles.length]);

  const prevTitle = () => {
    setCurrentTitle((prevTitle) => (prevTitle === 0 ? titles.length - 1 : prevTitle - 1));
  };

  const nextTitle = () => {
    setCurrentTitle((prevTitle) => (prevTitle === titles.length - 1 ? 0 : prevTitle + 1));
  };
  const toggleContact = () => {
    setShowContact(!showContact);
  };

  const closeContact = () => {
    setShowContact(false); // Close the contact popup
  };

  return (
    <Element className='exp' id='home'>
      <div className='dd'>
        <h1>
          Current openings in Chennai (<DateComponent />)
          <span className='blinkingText' style={{ color: 'red' }}>WE ARE HIRING!!</span>
        </h1>
        
        <div>
          <FaArrowAltCircleLeft className='left' onClick={prevTitle} />
          <FaArrowAltCircleRight className='right' onClick={nextTitle} />
        </div>
      </div>
      <br />
      <br />
      <div className='exp_info' onClick={toggleContact}>
        <ExpB title={titles[currentTitle]?.text} description={titles[currentTitle]?.description} />
      </div>
      <div className='ad'>
        <Advertisement />
      </div>
      {showContact && (
        <div className='overlay'>
          <div className='popup'>
          <Contact closeContact={closeContact} />
          </div>
        </div>
      )}
    </Element>
  );
};

export default Exp;
