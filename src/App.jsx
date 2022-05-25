import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AllNews } from './pages/allNews/AllNews';
import { Registration } from './pages/registration/Registation';

import './App.css'; 

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllNews/>}/>
          <Route path="/registration" element={<Registration/>}/>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
