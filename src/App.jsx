import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { AllNews } from './pages/allNews/AllNews';

import store from './store';
import './App.css'; 


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllNews/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );

}

export default App;
