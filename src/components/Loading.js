import React from 'react';
import loader from './images/loading.gif';

function Loading() {
  return (
    <div>
      <img
        src={loader}
        alt='Loading...'
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
      <h1>Loading...</h1>
    </div>
  );
}

export default Loading;
