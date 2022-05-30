import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { logOut } from '../../store/actions';

import './style.css';

function Header() {
  const authUser = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('authUser?.id', authUser);
  }, [authUser]);
  const navigate = useNavigate();
  const handleExit = () => {
    localStorage.removeItem('token');
    dispatch(logOut());
  };

  if (authUser?.id) {
    return (
      <div className="header">
        <Button variant="outlined" onClick={handleExit}>Выход</Button>
      </div>
    );
  }

  return (
    <div className="header">
      <Button variant="outlined" className="button-registration" onClick={() => { navigate('/registration'); }}>Регистрация</Button>
      <Button variant="outlined" className="button-registration" onClick={() => { navigate('/login'); }}>Вход</Button>
    </div>
  );
}

export default Header;
