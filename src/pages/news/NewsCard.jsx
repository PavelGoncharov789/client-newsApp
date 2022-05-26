import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function NewsCard({ element }) {
  const {
    title,
    text,
    author,
    tags,
  } = element;

  return (
    <div className="news">
      <h1>{title}</h1>
      <p>{text}</p>
      <p>{author}</p>
      <p>{tags}</p>
    </div>
  );
}

NewsCard.propTypes = {
  element: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    author: PropTypes.string,
    tags: PropTypes.string,
  }).isRequired,
};

export default NewsCard;
