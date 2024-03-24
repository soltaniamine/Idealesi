import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Verifyemail from './Pages/Verifyemail/Verify';
// import Register from './Pages/Register/Register';
// import Forgotpassword from './Pages/ForgotPassword/Forgotpassword';
// import Newpassword from './Pages/NewPassword/Newpassword';
// import Sidebar from './Pages/Accueil/Home/Sidebar';
// import Home from './Pages/Accueil/Home/Home';
// import Homepage from './Pages/Accueil/Home/Homepage';
// import Favorite from './Pages/Accueil/Favorite/Favorite';
import Shared from './Pages/Accueil/Sharedwithme/Sharedwithme';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Register/> */}
    {/* <Verifyemail/> */}
    {/* <Forgotpassword/> */}
    {/* <Newpassword/> */}
    {/* <Sidebar/> */}
    {/* <Home/> */}
    {/* <Homepage/> */}
    {/* <Favorite/> */}
    <Shared/>
  </React.StrictMode>
);

