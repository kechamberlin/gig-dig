import React, { useState, useEffect } from 'react';
import ResultList from '../ResultList';

function Music() {
  const [state, setState] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // In a real application, the API_KEY would be an environment variable.
    const API_KEY = 'xEC8368Dovp9nNnNBhtG5kDPJ3D8NjGC';
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events?classificationName=music&apikey=${API_KEY}`
    );
    const data = await response.json();
    console.log(data._embedded.events);
    setState(data._embedded.events);
  };

  return (
    <div>
      <h1>Music Page</h1>
    </div>
  );
}

export default Music;
