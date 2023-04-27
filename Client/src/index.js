import React from 'react'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

require('bootstrap/dist/css/bootstrap.css');



ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
