import React from 'react';

import './search-box.style.css'

//In function property is direclty called by name of property
export const SearchBox = ({placeholder , handleChange}) => (
    <input className='search'
           type='search'
           placeholder={placeholder}
           onChange={handleChange} />
);