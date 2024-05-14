import { useState } from "react";
import './Register.css';
import axios from "axios";
import {useNavigate, Link} from 'react-router-dom';
const Register = () => {
    const [showSignup, setShowSignup] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordd, setPasswordd] = useState('');
    const [username, setUsername] = useState('');
    const [loggedIn, setLoggedIn] = useState(true);
    const navigate = useNavigate();
    const [red1, setRed1] = useState(false);
    const [red2, setRed2] = useState(false);
    const [red3, setRed3] = useState(false);
    const [red4, setRed4] = useState(false);
    const registerUser = async (e) => {
        try {
            e.preventDefault()
            const response = await axios.post('http://127.0.0.1:5000/register', { email, password, username });
            navigate(`/Verifyemail?email=${email}`);
        } catch (error) {
            console.log(error.response.data.message);
            if (error.response.data.message === "reset email") {
                setRed1(true);
            } else {
                setRed1(false);
            }

            if (error.response.data.message === "reset username") {
                setRed2(true);
            } else {
                setRed2(false);
            }

            if (error.response.data.message === "reset password") {
                setRed3(true);
            } else {
                setRed3(false);
            }
            if (error.response.data.message === "not esi email") {
                setRed4(true);
            } else {
                setRed4(false);
            }
        }
    };

    
    const loginUser = async (e) => {
        try {
            e.preventDefault()
            const response = await axios.post('http://127.0.0.1:5000/login', { email, password });
            console.log(response.data);
            setLoggedIn(true);
            navigate(`/home?uid=${response.data.user_id}`);
        } catch (error) {
            console.log(error.response);
            setLoggedIn(false);
        }
      };

      
    return ( 
        <body className="bodddy">
            <div className={showSignup ? "container" : "container right-panel-active"}>
                <div className="form-container sign-up-container">
                    <form className="forma" onSubmit={loginUser} >
                        <div className="border-b-2 mb-16">
                            <h1 className="texto text-4xl ">Connexion</h1>
                        </div>
                        <div className={` w-[100%] flex justify-start items-center border-b-2 ${loggedIn ? " mb-5" : " border-red-600"} `}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <input className="inpu focus:outline-none" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}  />  
                        </div>
                        {!loggedIn && <div className=" h-4 w-[100%] flex justify-start items-start">
                            <p className="mb-5 text-red-600 text-xs">Nom ou mot de passe incorrect</p>
                        </div>}
                        <div className={` w-[100%] flex justify-start items-center border-b-2 ${loggedIn ? " mb-5" : " border-red-600"} `}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                            <input className="inpu focus:outline-none" type="password" placeholder="mot de passe" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        {!loggedIn && <div className=" h-4 w-[100%] flex justify-start items-start">
                            <p className="mb-2 text-red-600 text-xs">Nom ou mot de passe incorrect</p>
                        </div>}
                        <div className=" ml-80 mb-10">
                            <div className=""><Link to="/forgotpassword"><p className=" text-xs text-gray-400">Mot de passe oublié?</p></Link></div>
                        </div>
                        <button className="here hovering">Connexion</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form className="forma " onSubmit={(password === passwordd) ? registerUser : ""}>
                        <div className="border-b-2 mb-9">
                            <h1 className="texto text-4xl ">Inscription</h1>
                        </div>
                        <div className={` w-[100%] flex justify-start items-center border-b-2 ${red2 ? " border-red-600" : " mb-5"} `}>
                            <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            </div>
                            <input className="inpu focus:outline-none" type="text" placeholder="Nom complet" value={username} onChange={(e)=>setUsername(e.target.value)} />
                        </div>
                        {red2 && <div className=" h-4 w-[100%] flex justify-start items-start">
                            <p className="mb-5 text-red-600 text-xs">nom incorrect</p>
                        </div>}
                        <div className={` w-[100%] flex justify-start items-center border-b-2 ${red1 || red4 ? " border-red-600" : " mb-5"} `}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <input className="inpu focus:outline-none" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}  />  
                        </div>
                        {red1 && <div className=" h-4 w-[100%] flex justify-start items-start">
                            <p className="mb-5 text-red-600 text-xs"> email incorrect</p>
                        </div>}
                        {red4 && <div className=" h-4 w-[100%] flex justify-start items-start">
                            <p className="mb-5 text-red-600 text-xs">email n'est pas de l'ESI</p>
                        </div>}
                        <div className={` w-[100%] flex justify-start items-center border-b-2 ${red3 ? " border-red-600" : " mb-5"} `}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                            <input className="inpu focus:outline-none" type="password" placeholder="mot de passe" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        {red3 && <div className=" h-4 w-[100%] flex justify-start items-start">
                            <p className="mb-5 text-red-600 text-xs"> mot de passe incorrect</p>
                        </div>}
                        <div className={` w-[100%] flex justify-start items-center border-b-2 ${(password === passwordd) ? "mb-8" : "border-red-600"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                            <input className="inpu focus:outline-none" type="password" placeholder="Confirmer mot de passe" value={passwordd} onChange={(e)=>setPasswordd(e.target.value)}  />
                        </div>
                        {(password != passwordd) && <div className="mb-8 h-4 w-[100%] flex justify-start items-start">
                            <p className=" text-red-600 text-xs">mot de passe incorrect</p>
                        </div>}
                        <button type="submit" className="here hovering">Inscription</button>              
                    </form>
                </div>
                <div className="overlay-container">
                    <div className={"overlay"}>
                        <div className="overlay-panel overlay-left">
                            <h1 className="texo text-4xl">Bonjour!</h1>
                            <p className="para"><b>Bienvenue sur IdealESI, souhaitez-vous vous inscrire ? </b></p>
                            <button className="here ghost" onClick={()=>{setShowSignup(!showSignup)}}>Inscription</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="texo text-4xl">Bon retour!</h1>
                            <p className="para"><b>Vous avez déjà un compte ! Connectez-vous maintenant</b></p>
                            <button className="here ghost" onClick={()=>{setShowSignup(!showSignup)}}>Connexion</button>
                        </div>
                    </div>
                </div>
            </div>
        </body>
     );
}
 
export default Register;
