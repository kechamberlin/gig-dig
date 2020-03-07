import React from 'react';
import loader from './loading.gif';

function Loading() {
  return (
    <div>
      <img src={loader} alt='Loading...' />
    </div>
  );
}

export default Loading;
