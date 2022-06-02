import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AllNews from './pages/AllNews/AllNews';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registation';
import UserPage from './pages/UserPage/UserPage';

import { whoAmI } from './store/actions';
import { readTokenFromLS } from './utils/tokenUtils';

import './App.css';

function App() {
  const token = readTokenFromLS();
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(whoAmI());
    }
  }, [token]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/" element={<AllNews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
