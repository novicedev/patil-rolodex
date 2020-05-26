import React from 'react';

import './searchbox.styles.css';

export const SearchBox = ({placeholderkey, actiononchange}) => (
    <input className='search' type='search' placeholder={placeholderkey} onChange={actiononchange} />
);