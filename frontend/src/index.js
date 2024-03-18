import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Verifyemail from './Pages/Verifyemail/Verify';
// import Register from './Pages/Register/Register';
// import Forgotpassword from './Pages/ForgotPassword/Forgotpassword';
import Newpassword from './Pages/NewPassword/Newpassword';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Register/> */}
    {/* <Verifyemail/> */}
    {/* <Forgotpassword/> */}
    <Newpassword/>
  </React.StrictMode>
);

