import React, { useState, useEffect } from 'react';
import Search from '../Search';
import ResultList from '../ResultList';
import Loading from '../Loading';

function Music() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    searchShows();
  }, []);

  const searchShows = async keyword => {
    setError(false);
    setLoading(true);

    try {
      // In a real application, the API_KEY would be an environment variable.
      const API_KEY = 'xEC8368Dovp9nNnNBhtG5kDPJ3D8NjGC';
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events?classificationName=music&keyword=${keyword}&size=15&apikey=${API_KEY}`
      );
      const data = await response.json();
      console.log(data._embedded.events);
      setState(data._embedded.events);
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div>
        <Search searchShows={searchShows} />
        <p>Sorry, no match</p>
      </div>
    );
  } else {
    return (
      <div>
        <div className='music-jumbotron'>
          <Search searchShows={searchShows} />
        </div>
        <div className='grid-3 container'>
          {state.map(show => (
            <ResultList
              key={show.id}
              name={show.name}
              image={show.images[9].url}
              date={show.dates.start.localDate}
              time={show.dates.start.localTime}
              venue={show._embedded.venues[0].name}
              city={show._embedded.venues[0].city.name}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Music;
