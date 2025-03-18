import React from 'react';
import ReactDOM from 'react-dom/client';  // Correct import for React 18
import './index.css';
import App from './App';

// Create root container for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app using the root container
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
