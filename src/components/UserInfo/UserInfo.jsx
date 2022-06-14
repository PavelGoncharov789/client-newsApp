import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardContent, Typography } from '@mui/material';

import './style.css';

function UserInfo({
  user: {
    firstName, lastName, login, email,
  },
}) {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 300, height: 300 }} className="user">
      <CardContent>
        <Typography variant="h5" component="div" className="text">
          {login}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" className="text">
          {firstName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" className="text">
          {lastName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" className="text">
          {email}
        </Typography>
      </CardContent>
    </Card>
  );
}

UserInfo.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    login: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default UserInfo;
