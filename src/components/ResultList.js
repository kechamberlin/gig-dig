import React from 'react';

function ResultList({ name, image, venue, date, time, city }) {
  return (
    <div className='card'>
      <h4>{name}</h4>
      <img src={image} alt='' />
      <p>{venue}</p>
      <p>{date}</p>
      <p>{time}</p>
      <p>{city}</p>
    </div>
  );
}

export default ResultList;
