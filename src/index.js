import React from 'react';                                             // Importing React library for using jsx files
import ReactDOM from 'react-dom/client';                               // Importing ReactDOM for rendering the app
import './CSSfiles/index.css';                                         // Importing global CSS styles
import App from './App';                                               // Importing the main App component

const root = ReactDOM.createRoot(document.getElementById('root'));     // Creating a root element for React to render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
                                                   
