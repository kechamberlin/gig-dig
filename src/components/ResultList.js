import React, { useState } from 'react';

function ResultList({ name, image, venue, date, time, city }) {
  const [submitResult, setSubmitResult] = useState('');

  const handleClick = async event => {
    console.log(event);
    // This simulates sending the data to a backend.
    setSubmitResult('This event has been added to your wishlist!');
  };

  return (
    <div className='card text-center'>
      <h4>{name}</h4>
      <img src={image} alt='' />
      <p>{venue}</p>
      <p>{date}</p>
      <p>{time}</p>
      <p>{city}</p>
      <button className="btn-dark btn-block" onClick={handleClick} type='button'>
        I'm Interested!
      </button>
      {submitResult && <p>{submitResult}</p>}
    </div>
  );
}

export default ResultList;
