import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

import {
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

import './style.css';

function NewsCard({
  news: {
    title, text, author, tags, createdAt, updatedAt,
  },
}) {
  console.log(createdAt.toLocaleString(DateTime.DATETIME_FULL));
  return (
    <Card sx={{ minWidth: 250, maxWidth: 778, maxHeight: 480 }} className="card">
      <CardContent>
        <Typography variant="h5" component="div" className="title">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" className="text">
          {text}
        </Typography>
        <Typography color="text.secondary" className="text-date">
          {createdAt.toLocaleString(DateTime.DATETIME_FULL)}
        </Typography>
        <Typography color="text.secondary" className="text-date ">
          {updatedAt.toLocaleString(DateTime.DATETIME_FULL)}
        </Typography>
      </CardContent>
      <CardActions className="cardActions">
        <Typography color="#ff8800" className="text-date">
          {tags}
        </Typography>
        <Link to={`/user/${author}`} className="link">
          {author}
        </Link>
      </CardActions>
    </Card>
  );
}

NewsCard.propTypes = {
  news: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    author: PropTypes.string,
    tags: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  }).isRequired,
};

export default NewsCard;
