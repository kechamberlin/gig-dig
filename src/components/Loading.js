import React from 'react';
import loader from './loading.gif';

function Loading() {
  return (
    <div>
      <img
        src={loader}
        alt='Loading...'
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </div>
  );
}

export default Loading;
