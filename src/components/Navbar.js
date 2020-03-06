import React from 'react';

function Navbar() {
  return (
    <div>
      <h1>
        {/* Home page link */}
        <i className='fas fa-gem'>GigDig</i>
      </h1>
      <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Theater</li>
          <li>Family</li>
      </ul>
    </div>
  );
}

export default Navbar;
