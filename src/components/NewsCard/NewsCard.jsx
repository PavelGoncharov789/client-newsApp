import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './style.css';

function NewsCard({
  element: {
    title, text, author, tags,
  },
}) {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 250 }} className="card">
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/user/${author}`} className="link">
          <Button size="small">{author}</Button>
        </Link>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {tags}
        </Typography>
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
