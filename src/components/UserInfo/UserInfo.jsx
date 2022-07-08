import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from '@mui/material';

import FileUploader from '../FileUploader/FileUploader';

import { addAvatarAction } from '../../store/actions';

import './style.css';

function UserInfo({
  user: {
    firstName, lastName, login, email,
  },
  
})
{
  const dispatch = useDispatch();
  const [image, setImage] = useState('');

  const handleSend = () => {
    dispatch(addAvatarAction( image ));
  }

  
  return (
    <Card sx={{ minWidth: 275, maxWidth: 300, height: 300 }} className="user">
      <FileUploader setFile={setImage} />
      <Button onClick={handleSend}>Добавить аватар</Button>
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
      <CardActions>
        <Button size="small">Добаввить аватар</Button>
      </CardActions>
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
