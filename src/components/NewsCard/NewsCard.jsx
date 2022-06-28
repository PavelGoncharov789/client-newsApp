import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

import {
  Card,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
} from '@mui/material';

import './style.css';

function NewsCard({
  news: {
    title,
    text,
    authorId,
    tags,
    createdAt,
    img,
  },
  author: { login },
}) {
  return (
    <Card sx={{ width: 778, height: 480 }} className="card">
      <CardContent sx={{ width: 700, height: 460 }} className="card-content">
        {img ? (
          <CardMedia
            component="img"
            height="194"
            image={`${process.env.REACT_APP_BASE_URL}/${img}`}
            alt=""
          />
        ) : null}
        <Typography variant="h4" component="div" className="title">
          {title}
        </Typography>
        <Typography color="#ff8800" className="text-date">
          {tags}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" className="text">
          {text}
        </Typography>
        <Typography color="text.secondary" className="text-date">
          {DateTime.fromISO(createdAt).setLocale('ru').toLocaleString({
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
          })}
        </Typography>
      </CardContent>
      <CardActions className="cardActions">
        <Link to={`/user/${authorId}`} className="link">
          {login}
        </Link>
      </CardActions>
    </Card>
  );
}

NewsCard.propTypes = {
  news: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    authorId: PropTypes.number,
    tags: PropTypes.string,
    img: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
  author: PropTypes.shape({
    id: PropTypes.number,
    login: PropTypes.string,
  }).isRequired,
};

export default NewsCard;
