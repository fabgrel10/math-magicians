/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import App from './App';

const rootElement = document.getElementById('root');

const CSSReset = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: 'Montserrat', sans-serif;
  }

  html {
    font-size: 62.5%; /*1rem = 10px*/
    box-sizing: border-box;
  }

  body {
    background: #ffd60a;
    font-size: 1.4rem;
  }

  a {
    color: #ffc300;
    text-decoration: none;
  }
`;

render(
  <BrowserRouter>
    <React.StrictMode>
      <CSSReset />
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  rootElement,
);
