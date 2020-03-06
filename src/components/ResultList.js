import React from 'react';

function ResultList({ name, image }) {
  return (
    <div>
      <h4>{name}</h4>
      <img src={image} alt='' />
    </div>
  );
}

export default ResultList;
