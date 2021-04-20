import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import { Reset } from 'styled-reset';
import MainPage from './components/MainPage/MainPage';

ReactDOM.render(
  <>
    <Reset />
    <MainPage />
  </>,
  document.getElementById('root')
);