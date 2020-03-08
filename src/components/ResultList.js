import React from 'react';

function ResultList({ name, image, date, time, venue, city }) {
  return (
    <div className='card'>
      <h4>{name}</h4>
      <img src={image} alt='' />
      <p>Date: {date}</p>
      <p>When: {time}</p>
      <p>Where: {venue}</p>
      <p>
        {city}
      </p>
    </div>
  );
}

export default ResultList;
