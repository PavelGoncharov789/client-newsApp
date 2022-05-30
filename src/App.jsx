import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AllNews from './pages/allNews/AllNews';

import Registration from './pages/registration/Registation';
import Login from './pages/login/Login';

import './App.css';
import UserPage from './pages/userPage/UserPage';
import { useDispatch } from 'react-redux';
import { whoAmI } from './store/actions';

function App() {
  const token = localStorage.getItem('token');
  console.log("TOKEN", token);
 const dispatch = useDispatch();

  useEffect(() => {
    dispatch(whoAmI())
  }, [token])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AllNews />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
