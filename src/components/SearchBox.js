import React from 'react';

const SearchBox = ({ placeholder, searchChange }) => (
    <div className="pa2">
        <input
            aria-label="Search Robots"
            className="pa3 ba b--green bg-lightest-blue"
            type="search"
            placeholder={placeholder}
            onChange={searchChange}
        />
    </div>
);

export default SearchBox;
