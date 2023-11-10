import React, { useState, useEffect } from 'react';

const DateComponent = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format the date to your desired format
  const formattedDate = date.toDateString();

  return <span>{formattedDate}</span>;
};

export default DateComponent;
