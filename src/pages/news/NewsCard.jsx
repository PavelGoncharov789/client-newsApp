import React from 'react';

import './style.css';

export const News = ({ element }) => {

  return (
    <div className='news'>
      <h1>{element.title}</h1> 
      {/* <img></img> */}
      <p>{element.text}</p>
      <p>{element.author}</p>
      <p>{element.tags}</p>
    </div>
  );
};
