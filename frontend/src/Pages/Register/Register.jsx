import { useState } from "react";
import './Register.css';
import {Link} from 'react-router-dom';
const Register = () => {
    const [showSignup, setShowSignup] = useState(false);
    return ( 
        <body className="bodddy">
            <div className={showSignup ? "container" : "container right-panel-active"}>
                <div className="form-container sign-up-container">
                    <form className="forma" action="#">
                        <div className="border-b-2 mb-16">
                            <h1 className="texto text-4xl ">Log In</h1>
                        </div>
                        <div className=" w-[100%] mb-5 flex justify-start items-center border-b-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <input className="inpu focus:outline-none" type="email" placeholder="Email" />  
                        </div>
                        <div className=" w-[100%] flex justify-start items-center border-b-2 mb-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                            <input className="inpu focus:outline-none" type="password" placeholder="Password" />
                        </div>
                        <div className=" ml-80 mb-10">
                            <div className=""><Link to="/forgotpassword"><p className=" text-xs text-gray-400">Forgot Password?</p></Link></div>
                        </div>
                        <Link to="/home"><button className="here hovering">Log In</button></Link>
                        <div className=" mt-5 flex items-center">
                            <div className="border-b-2 w-[180px]"></div>
                            <h3 className="h33 mx-14 text-gray-400">or</h3>
                            <div className="border-b-2 w-[180px]"></div>
                        </div>
                        <div className=" mt-5 flex items-center">
                            <a href="/home"><img className="w-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" alt="" /></a>
                            <a href="/home"><p className=" text-sm mx-5 text-gray-400">Log in with Google</p></a>
                        </div>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form className="forma " action="#">
                        <div className="border-b-2 mb-9">
                            <h1 className="texto text-4xl ">Sign Up</h1>
                        </div>
                        <div className=" w-[100%] mb-5 flex justify-start items-center border-b-2 ">
                            <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            </div>
                            <input className="inpu focus:outline-none" type="text" placeholder="Full Name" />
                        </div>
                        <div className=" w-[100%] mb-5 flex justify-start items-center border-b-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <input className="inpu focus:outline-none" type="email" placeholder="Email" />  
                        </div>
                        <div className=" w-[100%] mb-5 flex justify-start items-center border-b-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                            <input className="inpu focus:outline-none" type="password" placeholder="Password" />
                        </div>
                        <div className=" w-[100%] mb-8 flex justify-start items-center border-b-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                            <input className="inpu focus:outline-none" type="password" placeholder="Confirm Password" />
                        </div>
                        <Link to="/verifyemail"><button className="here hovering">Sign Up</button> </Link>
                        <div className=" mt-5 flex items-center">
                            <div className="border-b-2 w-[180px]"></div>
                            <h3 className="h33 mx-14 text-gray-400">or</h3>
                            <div className="border-b-2 w-[180px]"></div>
                        </div>
                        <div className=" mt-5 flex items-center">
                            <a href="/home"><img className="w-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" alt="" /></a>
                            <a href="/home"><p className=" text-sm mx-5 text-gray-400">Sign up with Google</p></a>
                        </div>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className={"overlay"}>
                        <div className="overlay-panel overlay-left">
                            <h1 className="texo text-4xl">Hello!</h1>
                            <p className="para"><b>Welcome to IdealESI, Would you like to Sing Up? </b></p>
                            <button className="here ghost" onClick={()=>{setShowSignup(!showSignup)}}>Sign Up</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="texo text-4xl">Welcome Back!</h1>
                            <p className="para"><b>You have already an account! Log in NOW </b></p>
                            <button className="here ghost" onClick={()=>{setShowSignup(!showSignup)}}>Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        </body>
     );
}
 
export default Register;
