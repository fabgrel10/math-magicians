/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './main.css';

const rootElement = document.getElementById('root');

render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  rootElement,
);
