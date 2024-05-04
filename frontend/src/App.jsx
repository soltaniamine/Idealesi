import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Accueil/Home/Home.jsx';
import Favorite from './Pages/Accueil/Favorite/Favorite.jsx';
import Shared from './Pages/Accueil/Sharedwithme/Sharedwithme.jsx';
import Templates from './Pages/Accueil/Templates/Template.jsx';
import Verify from './Pages/Verifyemail/Verify.jsx';
import Forgotpassword from './Pages/ForgotPassword/Forgotpassword.jsx';
import Newpassword from './Pages/NewPassword/Newpassword.jsx';
import Register from './Pages/Register/Register.jsx';
import Firstpage from './Pages/FirstPage/Firstpage.jsx';
import TypeProjet from './Pages/Accueil/TypeProjet/TypeProjet.jsx';
import ChoixTechnique from './Pages/Accueil/choixTechnique/choixTechnique.jsx';
import ChoixClub from './Pages/Accueil/clubs/choixclub.jsx';
import Events from './Pages/Accueil/events/events.jsx';
import Choix from './Pages/Accueil/choixNiveau/choix.jsx';
import BoardId from './Pages/Board/BoardId.jsx';
import Expert from './Pages/Accueil/Expert/Expert.jsx';

import LayoutWithNavbar from './components/LayoutWithNavbar.jsx';

import Testtab from './Pages/Accueil/testtab/testtab.jsx';
import Guide from './Pages/FirstPage/guide.jsx'

function App() {
  return (
    <div>
      <Router>
        <Routes>

          <Route element={<LayoutWithNavbar />}>
            <Route path="/" element={<Firstpage />} />
            <Route path="/guide" element={<Guide />} />
            // Add other routes that require Navbar under this layout
          </Route>

          <Route path="/home" element={<Home buttonColor="white1" />} />
          <Route path="/typeprojet" element={<TypeProjet buttonColor="white2" />} />
          <Route path="/favorite" element={<Favorite buttonColor="white3" />} />
          <Route path="/choixtechnique" element={<ChoixTechnique buttonColor="white2" />} />
          <Route path="/sharedwithme" element={<Shared buttonColor="white4" />} />
          <Route path="/templates" element={<Templates buttonColor="white5" />} />
          <Route path="/verifyemail" element={<Verify />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/newpassword" element={<Newpassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/clubs" element={<ChoixClub buttonColor="white2"/>} />
          <Route path="/events" element={<Events buttonColor="white2"/>} />
          <Route path="*" element={<p>Not Found oops</p>} />
          <Route path="/Niveau" element={<Choix buttonColor="white2" />} />
          <Route path="/Board" element={<BoardId />} />
          <Route path="/Expert" element={<Expert buttonColor="white6"/>} />

          <Route path="/testtab" element={<Testtab />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
