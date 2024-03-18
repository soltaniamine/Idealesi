import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< Updated upstream
import App from './App';
import reportWebVitals from './reportWebVitals';
=======
import Verifyemail from './Pages/Verifyemail/Verify';
import Register from './Pages/Register/Register';
>>>>>>> Stashed changes

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< Updated upstream
    <App />
=======
    <Verifyemail /> 
>>>>>>> Stashed changes
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
