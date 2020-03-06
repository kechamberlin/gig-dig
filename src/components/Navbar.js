import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <Link to='/'>
          <i className='fas fa-gem'>GigDig</i>
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/music'>
            <i className='fas fa-music'></i>Music
          </Link>
        </li>
        <li>
          <Link to='/sports'>
            <i className='fas fa-football-ball'></i>Sports
          </Link>
        </li>
        <li>
          <Link to='/theater'>
            <i className='fas fa-theater-masks'></i>Theater
          </Link>
        </li>
        <li>
          <Link to='/family'>
            <i className='fas fa-child'></i>Family
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
