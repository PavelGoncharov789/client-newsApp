import { AllNews } from './pages/allNews/AllNews';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Router } from 'react-router';
import './App.css'; 
import { Provider } from 'react-redux';

import store from './store';


function App() {
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
