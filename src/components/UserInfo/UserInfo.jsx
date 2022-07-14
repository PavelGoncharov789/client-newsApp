import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from '@mui/material';

import FileUploader from '../FileUploader/FileUploader';

import { addAvatarAction } from '../../store/actions';

import './style.css';

function UserInfo({
  user: {
    id, avatar, firstName, lastName, login, email,
  },
})
{
  const dispatch = useDispatch();
  const [images, setImages] = useState('');

  const handleSend = () => {
    if (images) dispatch(addAvatarAction({ images, id }));
  };

  return (
    <Card sx={{ minWidth: 275, maxWidth: 300, height: 370 }} className="user">
      <CardMedia
        component="img"
        height="194"
        image={avatar ? `${process.env.REACT_APP_BASE_URL}/${avatar}` : 'https://site1446.airsmb.ru/data/thumbs/659f3b6233c8c23032361057fafea444.jpg'}
        alt="avatar"
      />
      <FileUploader setFile={setImages} avatar={avatar} />
      <Button
        onClick={handleSend}
        style={{ margin: '0 auto', display: 'flex' }}
      >
        {avatar ? 'Сменить аватар' : 'Добавить аватар'}
      </Button>
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
    id: PropTypes.number,
    avatar: PropTypes.string,
  }).isRequired,
};

export default UserInfo;
