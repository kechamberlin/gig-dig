import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <Link to='https://kechamberlin.github.io/gig-dig/'>
          <i className='fas fa-check-double'>GigDig</i>
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='https://kechamberlin.github.io/gig-dig/music'>
            <i className='fas fa-music'></i> Music
          </Link>
        </li>
        <li>
          <Link to='https://kechamberlin.github.io/gig-dig/sports'>
            <i className='fas fa-football-ball'></i> Sports
          </Link>
        </li>
        <li>
          <Link to='https://kechamberlin.github.io/gig-dig/theater'>
            <i className='fas fa-theater-masks'></i> Theater
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
