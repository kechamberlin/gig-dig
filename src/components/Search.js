import React, { useState } from 'react';

function Search({ searchShows }) {
  const [keyword, setKeyword] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    searchShows(keyword);
    setKeyword('');
  };

  const onChange = event => {
    setKeyword(event.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type='text'
          name='keyword'
          value={keyword}
          placeholder='Search for an event...'
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
    </div>
  );
}

export default Search;
