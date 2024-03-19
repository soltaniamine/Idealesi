import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Verifyemail from './Pages/Verifyemail/Verify';
import Register from './Pages/Register/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Register/> */}
    <Verifyemail/>
  </React.StrictMode>
);

