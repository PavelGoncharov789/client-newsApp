import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { logOut } from '../../store/actions';

import './style.css';

function Header() {
  const authUser = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  if (authUser?.id) {
    return (
      <div className="header">
        <Button variant="outlined" onClick={() => dispatch(logOut())}>Выход</Button>
      </div>
    );
  }

  return (
    <div className="header">
      <Link to="/registration" className="link">
        <Button variant="outlined" className="button-registration">Регистрация</Button>
      </Link>
      <Link to="/login" className="link">
        <Button variant="outlined" className="button-registration">Вход</Button>
      </Link>
    </div>
  );
}

export default Header;
