import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './routes/Home';
import Donate from './routes/Donate';
import Donaters from './routes/Donaters';
import Help from './routes/Help';
import Login from './components/Login';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='donate' element={<Donate />} />
          <Route path='donaters' element={<Donaters />} />
          <Route path='Help' element={<Help />} />
        </Route>
        <Route path='Login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
