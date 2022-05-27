import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AllNews from './pages/allNews/AllNews';

import Registration from './pages/registration/Registation';
import Login from './pages/login/Login';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AllNews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
