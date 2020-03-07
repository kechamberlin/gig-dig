import React, { useState, useEffect } from 'react';
import ResultList from '../ResultList';

function Music() {
  const [state, setState] = useState([]);

  useEffect(() => {
    searchShows();
  }, []);

  const searchShows = async () => {
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
    <div className='grid-3'>
      {state.map(show => (
        <ResultList key={show.id} name={show.name} image={show.images[9].url} />
      ))}
    </div>
  );
}

export default Music;
