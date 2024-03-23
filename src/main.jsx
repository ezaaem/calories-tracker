import React from 'react';
import ReactDOM from 'react-dom/client'; // Corrected import statement
import App from './App.jsx';
import './index.css';
import Modal from 'react-modal'; // Corrected import statement
Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

