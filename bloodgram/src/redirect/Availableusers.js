import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Final } from './Final';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='index_div'>
    <h1>Available User</h1>
    <br />
    <Final />
    <br />
    <h3>
      Search for Blood Bank <a href='#'> Click Here</a>
    </h3>
  </div>
);
