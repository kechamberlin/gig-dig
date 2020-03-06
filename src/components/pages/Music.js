import React, { useState, useEffect } from 'react';
import ResultList from '../ResultList';

function Music() {
  const [state, setState] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Music Page</h1>
    </div>
  );
}

export default Music;
