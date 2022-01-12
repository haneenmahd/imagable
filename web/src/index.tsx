import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './index.scss';

import App from './App';
import NavBar from './components/NavBar';

// pages
import Tools from './pages/Tools';
import Create from './pages/Create';

/**
 * This is the app component which is going to be the renderer for all child elements inside the app.
 */
function RenderingApp() {
  return (
    <div style={{ maxWidth: "100vw" }}>
      <NavBar />
      <Outlet />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RenderingApp />}>
          <Route index element={<App />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/create" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);