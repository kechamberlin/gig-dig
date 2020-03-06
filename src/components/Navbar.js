import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <h1>
        <Link to='/'>
          <i className='fas fa-gem'>GigDig</i>
        </Link>
      </h1>
      <ul>
        <li>
          <i className='fas fa-music'></i>Music
        </li>
        <li>
          <i className='fas fa-football-ball'></i>Sports
        </li>
        <li>
          <i className='fas fa-theater-masks'></i>Theater
        </li>
        <li>
          <i className='fas fa-child'></i>Family
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
