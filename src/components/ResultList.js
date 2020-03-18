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
      <h2 className='card-header'>{name}</h2>
      <img src={image} alt='' className='item-image' />
      <p>
        <strong>
          <u>Venue</u>
        </strong>
        : {venue}
      </p>
      <p>
        <strong>
          <u>When</u>
        </strong>
        : {date}
      </p>
      <p>
        <strong>
          <u>Time</u>
        </strong>
        : {time}
      </p>
      <p>
        <strong>
          <u>Location</u>
        </strong>
        : {city}
      </p>
      <button
        className='btn btn-dark btn-block'
        onClick={handleClick}
        type='button'
      >
        I'm Interested!
      </button>
      {submitResult && <h3>{submitResult}</h3>}
    </div>
  );
}

export default ResultList;
