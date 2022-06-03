import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import './style.css';

function NewsCard({
  element: {
    title, text, author, tags,
  },
}) {
  return (
    <Card sx={{ minWidth: 250, maxWidth: 278, height: 300 }} className="card">
      <CardContent>
        <Typography variant="h5" component="div" className="title">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" className="text">
          {text}
        </Typography>
      </CardContent>
      <CardActions className="cardActions">
        <Link to={`/user/${author}`} className="link">
          {author}
        </Link>
        <Link to="/" className="link">
          {tags}
        </Link>
      </CardActions>
    </Card>
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
