import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import App from './App';
import NavBar from './components/NavBar';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);