import React from 'react'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

require('bootstrap/dist/css/bootstrap.css');



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
