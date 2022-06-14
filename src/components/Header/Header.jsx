import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
} from '@mui/material';
import CameraIndoorRoundedIcon from '@mui/icons-material/CameraIndoorRounded';

import { logOut } from '../../store/actions';

import { removeTokenFromLS } from '../../utils/tokenUtils';

import './style.css';

function Header({ pageName }) {
  const authUser = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  const logut = () => {
    removeTokenFromLS();
    dispatch(logOut());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <Link to="/" className="link">
              <CameraIndoorRoundedIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {pageName}
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            {authUser ? (
              <Link to={`/user/${authUser.id}`} className="link">
                <IconButton sx={{ p: 0 }}>
                  <Avatar
                    alt={authUser?.login}
                    src="../../static/images/avatar/defaultAvatar.png"
                  />
                </IconButton>
              </Link>
            ) : null}
            {authUser ? (
              <Button
                variant="outlined"
                onClick={logut}
                color="inherit"
                className="button-logout"
              >
                Выход
              </Button>
            ) : (
              <Link to="/login" className="link">
                <Button variant="contained" color="inherit">
                  Вход
                </Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

Header.propTypes = {
  pageName: PropTypes.string,
}.isRequired;

export default Header;
