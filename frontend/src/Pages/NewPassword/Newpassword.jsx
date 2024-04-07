import './Newpass.css';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Newpassword = () => {
    const location = useLocation(); 
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get('email');
    const [password, setPassword] = useState('');
    const [passwordd, setPasswordd] = useState('');
    const [red1, setRed1] = useState(false);

    const resetPassword = async (e) => {
        e.preventDefault(); 
        try {
            const response = await axios.post('http://127.0.0.1:5000/forgot_password', { email, password });
            navigate("/home");
        } catch (error) {
            console.log(error.response);
            setRed1(true);
        }
    };

    return ( 
        <body className='boddy'>
            <div className="form-containerr border rounded-xl overflow-hidden">
                <form className="forma" onSubmit={(e) => (password === passwordd) ? resetPassword(e) : false} action="#">
                    <div className="border-b-2 my-6">
                        <h1 className="texto text-4xl ">Create new password</h1>
                    </div>
                    <div className="mb-2">
                        <p className="para text-gray-600 text-base">Your new password must be different from the previously used password</p>
                    </div>
                    <div className={` w-[100%] flex justify-start items-center border-b-2 ${red1 ? " border-red-600" : " mb-5"} `}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <input className="inpu focus:outline-none" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    {red1 && <div className=" h-4 w-[100%] flex justify-start items-start">
                        <p className="mb-5 text-red-600 text-xs">Password does not match</p>
                    </div>}
                    <div className={` w-[100%] flex justify-start items-center border-b-2 ${(password === passwordd) ? "mb-8" : "border-red-600"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <input className="inpu focus:outline-none" type="password" placeholder="Confirm Password" value={passwordd} onChange={(e)=>setPasswordd(e.target.value)} />
                    </div>
                    {(password !== passwordd) && <div className="mb-8 h-4 w-[100%] flex justify-start items-start">
                        <p className=" text-red-600 text-xs">Password does not match</p>
                    </div>}
                    <button type='submit' id="hovering" className="here mb-6">Reset password</button>
                </form>
            </div>
        </body>
     );
}
 
export default Newpassword;
