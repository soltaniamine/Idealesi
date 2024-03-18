import { useState } from "react";
import styles from './Register.module.css';

const Register = () => {
    const [showSignup, setShowSignup] = useState(false);
    return ( 
        <div className={showSignup ? styles["container"] : `${styles["container"]} ${styles["right-panel-active"]}`}>
            <div className={styles["form-container"] + " " + styles["sign-up-container"]}>
                <form action="#">
                    <div className="border-b-2 mb-16">
                        <h1 className="text-4xl ">Log In</h1>
                    </div>
                    <div className=" w-[100%] mb-5 flex justify-start items-center border-b-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <input className="focus:outline-none" type="email" placeholder="Email" />  
                    </div>
                    <div className=" w-[100%] flex justify-start items-center border-b-2 mb-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <input className="focus:outline-none" type="password" placeholder="Password" />
                    </div>
                    <div className=" ml-80 mb-10">
                        <a href ="" className=" text-xs text-gray-400">Forgot Password?</a>
                    </div>
                    <button className={styles.hovering}>Log In</button>
                    <div className=" mt-5 flex items-center">
                        <div className="border-b-2 w-[180px]"></div>
                        <h3 className=" mx-14 text-gray-400">or</h3>
                        <div className="border-b-2 w-[180px]"></div>
                    </div>
                    <div className=" mt-5 flex items-center">
                        <a href=""><img className="w-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" alt="" /></a>
                        <a href=""><h2 className=" mx-5 text-gray-400">Log in with Google</h2></a>
                    </div>
                </form>
            </div>
            <div className={styles["form-container"] + " " + styles["sign-in-container"]}>
                <form className=" " action="#">
                    <div className="border-b-2 mb-9">
                        <h1 className="text-4xl ">Sign Up</h1>
                    </div>
                    <div className=" w-[100%] mb-5 flex justify-start items-center border-b-2 ">
                        <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        </div>
                        <input className="focus:outline-none" type="text" placeholder="Full Name" />
                    </div>
                    <div className=" w-[100%] mb-5 flex justify-start items-center border-b-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <input className="focus:outline-none" type="email" placeholder="Email" />  
                    </div>
                    <div className=" w-[100%] mb-5 flex justify-start items-center border-b-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <input className="focus:outline-none" type="password" placeholder="Password" />
                    </div>
                    <div className=" w-[100%] mb-8 flex justify-start items-center border-b-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <input className="focus:outline-none" type="password" placeholder="Confirm Password" />
                    </div>
                    <button className={styles.hovering}>Sign Up</button> 
                    <div className=" mt-5 flex items-center">
                        <div className="border-b-2 w-[180px]"></div>
                        <h3 className=" mx-14 text-gray-400">or</h3>
                        <div className="border-b-2 w-[180px]"></div>
                    </div>
                    <div className=" mt-5 flex items-center">
                        <a href=""><img className="w-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" alt="" /></a>
                        <a href=""><h2 className=" mx-5 text-gray-400">Sign up with Google</h2></a>
                    </div>
                </form>
            </div>
            <div className={styles["overlay-container"]}>
                <div className={styles.overlay}>
                    <div className={styles["overlay-panel"] + " " + styles["overlay-left"]}>
                        <h1 className=" text-4xl">Hello!</h1>
                        <p><b>Welcome to IdealESI, Would you like to Sing Up? </b></p>
                        <button className={styles.ghost} onClick={()=>{setShowSignup(!showSignup)}}>Sign Up</button>
                    </div>
                    <div className={styles["overlay-panel"] + " " + styles["overlay-right"]}>
                        <h1 className=" text-4xl">Welcome Back!</h1>
                        <p><b>You have already an account! Log in NOW </b></p>
                        <button className={styles.ghost} onClick={()=>{setShowSignup(!showSignup)}}>Log In</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Register;
