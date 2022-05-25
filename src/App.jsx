import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { AllNews } from './pages/allNews/AllNews';

import './App.css'; 


const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllNews/>}/>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
