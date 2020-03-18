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
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
