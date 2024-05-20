import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MembersPage from './Components/MembersPage';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/members" element={<MembersPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
