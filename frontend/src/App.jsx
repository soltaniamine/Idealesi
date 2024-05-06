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
import Admine from './Pages/admine/admine.jsx';
import Niveauu from './Pages/admine/niveau.jsx';
import Modulee from './Pages/admine/module.jsx';
import Expert from './Pages/admine/expert.jsx';
import Event from './Pages/admine/event.jsx';
import Notification from './Pages/Accueil/notification-et-profile/notification.jsx';
import Profilee from './Pages/Accueil/notification-et-profile/profile.jsx';
import Settings from './Pages/Accueil/setting/settings.jsx';
import Brainstorming from './Pages/Accueil/description/brainstorming.jsx';
import Chapeaux from './Pages/Accueil/description/chapeaux.jsx';
import Brainwriting from './Pages/Accueil/description/brainwriting.jsx';
import Raffinement from './Pages/Accueil/guidUtilisateur/raffinement.jsx';
import Moscow from './Pages/Accueil/guidUtilisateur/moscow.jsx';
import Combainaison from './Pages/Accueil/guidUtilisateur/combainaison.jsx';
// import { Brain } from 'lucide-react';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Firstpage />} />
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
          <Route path="/admine" element={<Admine buttonColor="white6"/>} />
          <Route path="/Niveauu" element={<Niveauu buttonColor="white6"/>} />
          <Route path="/modulee" element={<Modulee buttonColor="white6"/>} />
          <Route path="/expert" element={<Expert buttonColor="white6"/>} />
          <Route path="/event" element={<Event buttonColor="white6"/>} />
          <Route path="/notification" element={<Notification buttonColor="white1"/>} />
          <Route path="/settings" element={<Settings buttonColor="white1"/>} />
          <Route path="/brainstorming" element={<Brainstorming buttonColor="white5"/>} />
          <Route path="/chapeaux" element={<Chapeaux buttonColor="white5"/>} />
          <Route path="/brainwriting" element={<Brainwriting buttonColor="white5"/>} />
          <Route path="/raffinement" element={<Raffinement buttonColor="white5"/>} />
          <Route path="/moscow" element={<Moscow buttonColor="white6"/>} />
          <Route path="/combainaison" element={<Combainaison buttonColor="white6"/>} />





          {/* <Route path="/manipulation" element={<Eishenhower />} /> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
