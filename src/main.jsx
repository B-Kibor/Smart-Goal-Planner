import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import './index.css'; 
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Smart-Goal-Planner">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

